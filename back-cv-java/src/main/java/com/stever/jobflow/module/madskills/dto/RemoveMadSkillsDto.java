package com.stever.jobflow.module.madskills.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RemoveMadSkillsDto {

    private int sub;
    private String id;

    @JsonProperty("mad_skillsId")
    private int madSkillId;
}
