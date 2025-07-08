package com.stever.jobflow.module.skills.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RemoveSkillDto {

    private int sub;
    private String id;
    private int skillId;
}
