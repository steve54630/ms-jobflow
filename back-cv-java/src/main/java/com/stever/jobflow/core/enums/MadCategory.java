package core.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import core.interfaces.Categorizable;

import java.util.Arrays;
import java.util.Locale;

public enum MadCategory implements Categorizable {

    INTEREST, HOBBIES;

    @JsonCreator
    public static MadCategory fromString(String key) {
        if (key == null) return null;

        for (MadCategory category : MadCategory.values()) {
            if (category.name().equalsIgnoreCase(key)) {
                return category;
            }
        }

        throw new IllegalArgumentException("Invalid category: " + key +
                ". Valid values are: " + Arrays.toString(MadCategory.values()));
    }

    @JsonValue
    @Override
    public String getValue() {
        return this.name().toLowerCase(Locale.ROOT);
    }
}
