package core.enums;

import core.classes.*;
import core.interfaces.IFields;

public enum CVFields implements IFields {


    EXPERIENCES("experiences", Experience.class),
    EDUCATIONS("educations", Education.class),
    LANGUAGES("languages", Langue.class),
    SKILLS("skills", Skill.class),
    MADSKILLS("madskills", MadSkill.class),
    ACTIVITIES("activities", Activity.class);

    private final String fieldName;
    private final Class<?> classType;

    CVFields(String fieldName, Class<?> classType) {
        this.fieldName = fieldName;
        this.classType = classType;
    }

    @Override
    public String getFieldName() {
        return fieldName;
    }

    @Override
    public Class<?> getExpectedType() {
        return classType;
    }
}
