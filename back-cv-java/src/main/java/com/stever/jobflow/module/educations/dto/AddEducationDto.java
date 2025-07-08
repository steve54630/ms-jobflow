package com.stever.jobflow.module.educations.dto;

import com.stever.jobflow.core.classes.Education;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddEducationDto {

    private String id;
    private List<Education> education;
    private int sub;

}
