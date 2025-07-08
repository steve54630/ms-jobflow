package com.stever.jobflow.module.langues.service;

import com.stever.jobflow.core.classes.Langue;
import com.stever.jobflow.core.enums.CVFields;
import org.springframework.stereotype.Service;
import com.stever.jobflow.repository.CvRepositoryImpl;

@Service
public class LangueService extends CvRepositoryImpl<Langue, CVFields> {}
