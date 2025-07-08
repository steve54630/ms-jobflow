package com.stever.jobflow.core.classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MadSkill {

    @Field("id")
    private Integer id;

    private String title;

    private String category;
}
