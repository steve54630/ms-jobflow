package com.stever.jobflow.module.cvs.service;

import com.stever.jobflow.core.CvSchema;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.stever.jobflow.repository.interfaces.CVRepository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
public class CvService {

    @Autowired
    private MongoTemplate mongoTemplate;

    private final CVRepository repo; // Spring Data Mongo repository

    public CvService(CVRepository repo) {
        this.repo = repo;
    }

    public CvSchema create(CvSchema cv, int sub) {
        cv.setMemberId(sub);
        return repo.save(cv);
    }

    public CvSchema update(Map<String, String> fieldsToUpdate, String id, int sub) {
        verifyOwnership(id, sub);
        Query query = new Query(Criteria.where("_id").is(id));
        Update update = new Update();

        fieldsToUpdate.forEach(update::set);

        return mongoTemplate.findAndModify(query, update, FindAndModifyOptions.options().returnNew(true), CvSchema.class);
    }

    public List<CvSchema> findAll(int sub) {
        return repo.findByMemberId(sub);
    }

    public boolean delete(String id, int sub) {
        verifyOwnership(id, sub);
        repo.deleteById(id);
        return true;
    }

    public CvSchema findOne(String id, int sub) {
        return verifyOwnership(id, sub);
    }

    public CvSchema verifyOwnership(String id, int sub) {
        Optional<CvSchema> cv = repo.findById(id);
        return cv
                .filter(cvFound -> Integer.valueOf(cvFound.getMemberId()).equals(sub))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Accés non authorisé"));
    }
}