package module.langues.service;

import core.classes.Langue;
import core.enums.CVFields;
import org.springframework.stereotype.Service;
import repository.CvRepositoryImpl;

@Service
public class LangueService extends CvRepositoryImpl<Langue, CVFields> {}
