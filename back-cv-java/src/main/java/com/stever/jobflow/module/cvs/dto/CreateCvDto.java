package com.stever.jobflow.module.cvs.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.stever.jobflow.core.CvSchema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CreateCvRequest {

    @JsonProperty("createCvDto")
    private List<CvSchema> cv;
    private int sub;
}
