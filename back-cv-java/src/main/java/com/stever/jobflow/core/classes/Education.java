package com.stever.jobflow.core.classes;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.stever.jobflow.config.LocalDateToInstantDeserializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Education {

    @Field("id")
    private Integer id;

    @JsonProperty("start_date")
    @JsonDeserialize(using = LocalDateToInstantDeserializer.class)
    @Field("start_date")
    private Instant startDate;

    @JsonProperty("end_date")
    @JsonDeserialize(using = LocalDateToInstantDeserializer.class)
    @Field("end_date")
    private Instant endDate;

    @JsonProperty("is_obtained")
    @Field("is_obtained")
    private boolean isObtained;

    private String title;

    @JsonProperty("school_name")
    @Field("school_name")
    private String schoolName;

    private String location;

    private String description;
}
