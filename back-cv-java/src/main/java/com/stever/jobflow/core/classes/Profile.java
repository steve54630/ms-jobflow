package com.stever.jobflow.core.classes;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Profile {

    @Field("id")
    private Integer id;

    private String picture;

    private String firstname;

    private String lastname;

    private String email;

    private String phone;

    private String location;

    private String description;

    @Field("has_car")
    @JsonProperty("has_car")
    private Boolean hasCar;
}
