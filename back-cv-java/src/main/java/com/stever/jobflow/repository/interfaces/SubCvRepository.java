package repository.interfaces;

import core.CvSchema;

public interface SubCvRepository<T,U> {

        CvSchema appendToField(String id, U field, T value);

        CvSchema removeFromField(String id, U field, Object value);

}
