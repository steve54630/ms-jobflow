package com.stever.jobflow.core.classes;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Activity {

    @Field("id")
    private Integer id;

    private String title;

    private String description;

    @JsonProperty("start_date")
    @Field("start_date")
    private Instant startDate;

    @JsonProperty("end_date")
    @Field("end_date")
    private Instant endDate;

    private String location;

    @JsonProperty("member_id")
    @Field("member_id")
    private Number memberId;

}
