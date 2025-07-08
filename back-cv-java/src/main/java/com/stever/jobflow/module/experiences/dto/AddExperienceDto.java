package com.stever.jobflow.module.experiences.dto;

import com.stever.jobflow.core.classes.Experience;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddExperienceDto {

    private String id;
    private List<Experience> experience;
    private int sub;

}
