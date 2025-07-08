package com.stever.jobflow.core.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.stever.jobflow.core.interfaces.Categorizable;

import java.util.Arrays;
import java.util.Locale;

public enum SkillCategory implements Categorizable {

    SOFT, HARD;

    @JsonCreator
    public static SkillCategory fromString(String key) {
        if (key == null) return null;

        for (SkillCategory category : SkillCategory.values()) {
            if (category.name().equalsIgnoreCase(key)) {
                return category;
            }
        }

        throw new IllegalArgumentException("Invalid category: " + key +
                ". Valid values are: " + Arrays.toString(SkillCategory.values()));
    }

    @JsonValue
    @Override
    public String getValue() {
        return this.name().toLowerCase(Locale.ROOT);
    }
}
