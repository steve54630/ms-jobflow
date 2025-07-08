package com.stever.jobflow.repository.interfaces;

import com.stever.jobflow.core.CvSchema;

public interface SubCvRepository<T,U> {

        CvSchema appendToField(String id, U field, T value);

        CvSchema removeFromField(String id, U field, Object value);

}
