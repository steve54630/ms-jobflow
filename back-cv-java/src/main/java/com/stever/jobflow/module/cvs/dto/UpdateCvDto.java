package com.stever.jobflow.module.cvs.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Map;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UpdateCvRequest {

    private String id;
    private Map<String, String> data;
    private int sub;
}
