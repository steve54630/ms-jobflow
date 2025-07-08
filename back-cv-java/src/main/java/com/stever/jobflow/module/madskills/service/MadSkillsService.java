package com.stever.jobflow.module.madskills.service;

import com.stever.jobflow.core.classes.MadSkill;
import com.stever.jobflow.core.enums.CVFields;
import org.springframework.stereotype.Service;
import com.stever.jobflow.repository.CvRepositoryImpl;

@Service
public class MadSkillsService extends CvRepositoryImpl<MadSkill, CVFields> {}
