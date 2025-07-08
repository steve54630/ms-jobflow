package com.stever.jobflow.module.educations.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RemoveEducationDto {

    private String id;
    private int educationId;
    private int sub;

}
