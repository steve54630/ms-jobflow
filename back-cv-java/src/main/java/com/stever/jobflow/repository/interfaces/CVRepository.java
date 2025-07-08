package repository.interfaces;

import core.CvSchema;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CVRepository extends MongoRepository<CvSchema, String> {

    List<CvSchema> findByMemberId(int memberID);

}
