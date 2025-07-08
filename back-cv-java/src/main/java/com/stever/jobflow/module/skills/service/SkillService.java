package module.skills.service;

import core.classes.Skill;
import core.enums.CVFields;
import org.springframework.stereotype.Service;
import repository.CvRepositoryImpl;

@Service
public class SkillService extends CvRepositoryImpl<Skill, CVFields> {}
