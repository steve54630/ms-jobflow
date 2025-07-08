package com.stever.jobflow.module.langues.dto;

import com.stever.jobflow.core.classes.Langue;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddLangueDto {

    private String id;
    private int sub;
    private List<Langue> langue;
}
