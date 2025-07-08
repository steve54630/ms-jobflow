package com.stever.jobflow.module.profile.service;

import com.stever.jobflow.core.enums.CVProfileFields;
import org.springframework.stereotype.Service;
import com.stever.jobflow.repository.CvRepositoryImpl;

@Service
public class ProfileService extends CvRepositoryImpl<Object, CVProfileFields> {
}
