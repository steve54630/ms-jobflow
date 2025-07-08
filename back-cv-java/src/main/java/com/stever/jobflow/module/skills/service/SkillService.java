package com.stever.jobflow.module.skills.service;

import com.stever.jobflow.core.classes.Skill;
import com.stever.jobflow.core.enums.CVFields;
import org.springframework.stereotype.Service;
import com.stever.jobflow.repository.CvRepositoryImpl;

@Service
public class SkillService extends CvRepositoryImpl<Skill, CVFields> {}
