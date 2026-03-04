package com.stever.jobflow.module.cvs.service;

import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.module.cvs.dto.CreateCvDto;
import com.stever.jobflow.module.cvs.dto.CvDto;
import com.stever.jobflow.module.cvs.dto.UpdateCvDto;

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

@Slf4j
@Service
public class CvService {

    @Autowired
    private MongoTemplate mongoTemplate;

    private final CVRepository repo;

    public CvService(CVRepository repo) {
        this.repo = repo;
    }

    // --- Orchestration pour les Listeners ---

    public CvSchema create(CreateCvDto dto) {
        // On extrait le premier CV de la liste du DTO
        CvSchema cv = dto.getCv().get(0);
        cv.setMemberId(dto.getSub());
        log.info("Création d'un CV pour le membre {}", dto.getSub());
        return repo.save(cv);
    }

    public CvSchema update(UpdateCvDto dto) {
        int sub = dto.getSub();
        verifyOwnership(dto.getId(), sub);

        log.info("Mise à jour des champs pour le CV {}", dto.getId());
        Query query = new Query(Criteria.where("_id").is(dto.getId()));
        Update update = new Update();

        // Applique dynamiquement les champs reçus dans la Map
        dto.getData().forEach(update::set);

        return mongoTemplate.findAndModify(
                query,
                update,
                FindAndModifyOptions.options().returnNew(true),
                CvSchema.class);
    }

    public List<CvSchema> findAll(CvDto dto) {
        int sub = dto.getSub();
        log.info("Récupération de tous les CV du membre {}", sub);
        return repo.findByMemberId(sub);
    }

    public CvSchema findOne(CvDto dto) {
        int sub = dto.getSub();
        log.info("Récupération du CV {}", dto.getId());
        return verifyOwnership(dto.getId(), sub);
    }

    public boolean delete(CvDto dto) {
        int sub = dto.getSub();
        verifyOwnership(dto.getId(), sub);
        log.info("Suppression du CV {}", dto.getId());
        repo.deleteById(dto.getId());
        return true;
    }

    // --- Méthode utilitaire de sécurité ---

    public CvSchema verifyOwnership(String id, int sub) {
        return repo.findById(id)
                .filter(cvFound -> Integer.valueOf(cvFound.getMemberId()).equals(sub))
                .orElseThrow(() -> {
                    log.warn("Tentative d'accès non autorisé au CV {} par le membre {}", id, sub);
                    return new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Accès non autorisé");
                });
    }
}