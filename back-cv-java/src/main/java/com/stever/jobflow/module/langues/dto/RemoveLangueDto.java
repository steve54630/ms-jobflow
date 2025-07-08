package com.stever.jobflow.module.langues.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RemoveLangueDto {

    private String id;
    private int sub;
    private int languageId;
}
