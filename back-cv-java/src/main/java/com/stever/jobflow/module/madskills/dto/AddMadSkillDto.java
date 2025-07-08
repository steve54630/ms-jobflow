package com.stever.jobflow.module.madskills.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.stever.jobflow.core.classes.MadSkill;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddMadSkillDto {

    private String id;
    private int sub;

    @JsonProperty("mad_skills")
    private List<MadSkill> madSkill;
}
