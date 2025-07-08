package com.stever.jobflow.module.activities.dto;

import com.stever.jobflow.core.classes.Activity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddActivityDto {

    private String id;
    private int sub;
    private List<Activity> activity;
}
