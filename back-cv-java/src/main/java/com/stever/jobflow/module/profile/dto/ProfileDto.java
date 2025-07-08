package com.stever.jobflow.module.profile.dto;

import com.stever.jobflow.core.enums.CVProfileFields;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDto {

    private CVProfileFields select;
    private Object value;
    private String id;
    private int sub;

}
