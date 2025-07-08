package com.stever.jobflow.repository.interfaces;

import com.stever.jobflow.core.CvSchema;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CVRepository extends MongoRepository<CvSchema, String> {

    List<CvSchema> findByMemberId(int memberID);

}
