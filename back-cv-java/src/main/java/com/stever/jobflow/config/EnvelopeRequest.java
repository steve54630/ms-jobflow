package com.stever.jobflow.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class EnvelopeRequest<T> {

    private String pattern;
    private T data;
    private String id;
}
