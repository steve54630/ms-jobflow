package repository;

import core.CvSchema;
import core.interfaces.IFields;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import repository.interfaces.SubCvRepository;

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
        return mongoTemplate.findAndModify(query, update, FindAndModifyOptions.options().returnNew(true), CvSchema.class);
    }

    @Override
    public CvSchema removeFromField(String id, U field, Object value) {
        Query query = new Query(Criteria.where("_id").is(id));
        Update update = new Update().pull(field.getFieldName(), value);
        return mongoTemplate.findAndModify(query, update, FindAndModifyOptions.options().returnNew(true), CvSchema.class);
    }
}
