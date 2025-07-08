package com.stever.jobflow.module.educations.services;

import com.stever.jobflow.core.classes.Education;
import com.stever.jobflow.core.enums.CVFields;
import org.springframework.stereotype.Service;
import com.stever.jobflow.repository.CvRepositoryImpl;

@Service
public class EducationService extends CvRepositoryImpl<Education, CVFields> {}
