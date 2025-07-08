package module.experiences.service;

import core.classes.Experience;
import core.enums.CVFields;
import org.springframework.stereotype.Service;
import repository.CvRepositoryImpl;

@Service
public class ExperienceService extends CvRepositoryImpl<Experience, CVFields> {}
