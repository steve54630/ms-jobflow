package com.stever.jobflow.core.interfaces;

import com.fasterxml.jackson.annotation.JsonValue;

public interface Categorizable {

    @JsonValue
    String getValue();
}
