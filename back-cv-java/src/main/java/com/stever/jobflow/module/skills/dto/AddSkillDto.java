package com.stever.jobflow.module.skills.dto;

import com.stever.jobflow.core.classes.Skill;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddSkillDto {

    private int sub;
    private String id;
    private List<Skill> skill;
}
