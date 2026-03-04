package com.stever.jobflow.module.educations.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.module.educations.dto.AddEducationDto;
import com.stever.jobflow.module.educations.services.EducationService;
import com.stever.jobflow.core.errors.ErrorPublisher;
import io.nats.client.Connection;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class AppendEducationListener extends BaseListener {

    private final EducationService educationService;
    private final Connection ns;

    public AppendEducationListener(ObjectMapper mapper, ErrorPublisher errorPublisher,
            EducationService educationService, Connection ns) {
        super(mapper, errorPublisher);
        this.educationService = educationService;
        this.ns = ns;
    }

    @PostConstruct
    public void subscribe() {
        ns.createDispatcher().subscribe("cv.education.add", m -> {
            try {
                AddEducationDto data = parseRequest(m, new TypeReference<EnvelopeRequest<AddEducationDto>>() {
                }).getData();
                log.info("Request: Adding education to CV {}", data.getId());

                CvSchema updated = educationService.addEducation(data);
                sendResponse(m, updated, ns);
            } catch (Exception e) {
                logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}