package com.stever.jobflow.repository;

import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.interfaces.IFields;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import com.stever.jobflow.repository.interfaces.SubCvRepository;

@Slf4j
@Repository
public class CvRepositoryImpl<T, U extends IFields> implements SubCvRepository<T, U> {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public CvSchema appendToField(String id, U field, T value) {
        Query query = new Query(Criteria.where("_id").is(id));
        if (!field.getExpectedType().isInstance(value)) {
            throw new IllegalArgumentException("Value type does not match expected type: " + field.getExpectedType().getSimpleName());
        }
        Update update = new Update().push(field.getFieldName(), value);
        CvSchema cv = mongoTemplate.findAndModify(query, update, FindAndModifyOptions.options().returnNew(true), CvSchema.class);
        if (cv == null) {
            log.error("Append failed: CV with id {} not found.", id);
            throw new IllegalStateException("CV with id " + id + " not found");
        }
        log.info("Ajout au CV {} réussi de {}", id, field.getFieldName());
        return cv;
    }

    @Override
    public CvSchema removeFromField(String id, U field, Object value) {
        Query query = new Query(Criteria.where("_id").is(id));
        Update update = new Update().pull(field.getFieldName(), Query.query(Criteria.where("id").is(value)));
        CvSchema cv = mongoTemplate.findAndModify(query, update, FindAndModifyOptions.options().returnNew(true), CvSchema.class);
        if (cv == null) {
            log.error("Remove failed: CV with id {} not found.", id);
            throw new IllegalStateException("CV with id " + id + " not found");
        }
        log.info("Suppression réussi de {} du cv {}", field.getFieldName(), id);
        return cv;
    }
}
