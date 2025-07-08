package com.stever.jobflow.module.activities.service;

import com.stever.jobflow.core.classes.Activity;
import com.stever.jobflow.core.enums.CVFields;
import org.springframework.stereotype.Service;
import com.stever.jobflow.repository.CvRepositoryImpl;

@Service
public class ActivityService extends CvRepositoryImpl<Activity, CVFields> {}
