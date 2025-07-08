package module.activities.service;

import core.classes.Activity;
import core.enums.CVFields;
import org.springframework.stereotype.Service;
import repository.CvRepositoryImpl;

@Service
public class ActivityService extends CvRepositoryImpl<Activity, CVFields> {}
