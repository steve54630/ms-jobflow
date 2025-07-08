package module.cvs.service;

import core.CvSchema;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import repository.interfaces.CVRepository;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class CvService {
    private final CVRepository repo; // Spring Data Mongo repository

    public CvService(CVRepository repo) { this.repo = repo; }

    public CvSchema create(CvSchema cv, int sub) {
        log.info("Création d'un cv pour l'utilsateur id = {}", sub );
        cv.setMemberId(sub);
        return repo.save(cv);
    }

    public List<CvSchema> findAll(int sub) {
        log.info("Récupération de tous les CVs pour l'utilisateur id={}", sub);
        return repo.findByMemberId(sub);
    }

    public boolean delete(String id, int sub) {
        log.info("Suppression du cv id={}", id);
        verify(id, sub);
        repo.deleteById(id);
        return true;
    }

    public CvSchema findOne(String id, int sub) {
        log.info("Recherche du CV id={} pour l'utilisateur id={}", id, sub);
        return verify(id, sub);
    }

    public CvSchema verify(String id, int sub) {
        log.debug("Vérification d'accès pour le CV id={} et utilisateur id={}", id, sub);
        Optional<CvSchema> cv = repo.findById(id);
        return cv
                .filter(cvFound -> cvFound.getMemberId() == sub)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Accés non authorisé"));
    }
}