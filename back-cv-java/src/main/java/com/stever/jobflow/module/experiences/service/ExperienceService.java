package com.stever.jobflow.module.experiences.service;

import com.stever.jobflow.core.classes.Experience;
import com.stever.jobflow.core.enums.CVFields;
import org.springframework.stereotype.Service;
import com.stever.jobflow.repository.CvRepositoryImpl;

@Service
public class ExperienceService extends CvRepositoryImpl<Experience, CVFields> {}
