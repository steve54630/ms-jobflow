package module.madskills.service;

import core.classes.MadSkill;
import core.enums.CVFields;
import org.springframework.stereotype.Service;
import repository.CvRepositoryImpl;

@Service
public class MadSkillsService extends CvRepositoryImpl<MadSkill, CVFields> {}
