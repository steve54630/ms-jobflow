package module.educations.services;

import core.enums.CVFields;
import org.springframework.stereotype.Service;
import repository.CvRepositoryImpl;

@Service
public class EducationService extends CvRepositoryImpl<Service, CVFields> {}
