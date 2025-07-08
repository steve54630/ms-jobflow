package module.profile.service;

import core.enums.CVProfileFields;
import org.springframework.stereotype.Service;
import repository.CvRepositoryImpl;

@Service
public class ProfileService extends CvRepositoryImpl<Object, CVProfileFields> {
}
