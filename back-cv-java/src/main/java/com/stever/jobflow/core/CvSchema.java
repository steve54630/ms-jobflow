package com.stever.jobflow.core;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.stever.jobflow.core.classes.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Document(collection = "cvs")
public class CvSchema {

    @Id
    @JsonProperty("_id")
    private String id;

    @JsonProperty("member_id")
    @Field("member_id")
    private int memberId;

    private String title;

    @Getter(AccessLevel.NONE)
    @Field("cv_title")
    @JsonProperty("cv_title")
    private String cvTitle;

    private String tagline;

    private Profile profile;

    @JsonSetter(nulls = Nulls.AS_EMPTY)
    private List<Experience> experiences;

    @JsonSetter(nulls = Nulls.AS_EMPTY)
    private List<Education> educations;

    @JsonSetter(nulls = Nulls.AS_EMPTY)
    private List<Langue> languages;

    @JsonSetter(nulls = Nulls.AS_EMPTY)
    private List<Skill> skills;

    @JsonSetter(nulls = Nulls.AS_EMPTY)
    private List<MadSkill> madskills;

    @JsonSetter(nulls = Nulls.AS_EMPTY)
    private List<Activity> activities;

    public String getCvTitle() {
        return cvTitle!= null ? cvTitle : title;
    }

}
