package com.stever.jobflow.module.experiences.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RemoveExperienceDto {

    private String id;
    private int sub;

    @JsonProperty("experience_id")
    private int experienceId;
}
