package core.enums;

import core.interfaces.IFields;

public enum CVProfileFields implements IFields {

    ID("profile.id", Integer.class),
    PICTURE("profile.picture", String.class),
    FIRSTNAME("profile.firstname", String.class),
    LASTNAME("profile.lastname", String.class),
    EMAIL("profile.email", String.class),
    PHONE("profile.phone", String.class),
    LOCATION("profile.location", String.class),
    DESCRIPTION("profile.description", String.class),
    HAS_CAR("profile.has_car", Boolean.class);

    private final String fieldName;
    private final Class<?> classType;

    CVProfileFields(String fieldName, Class<?> classType) {
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
