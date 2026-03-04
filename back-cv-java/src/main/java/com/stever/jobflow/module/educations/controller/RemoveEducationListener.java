package com.stever.jobflow.module.educations.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.module.educations.dto.RemoveEducationDto;
import com.stever.jobflow.module.educations.services.EducationService;
import com.stever.jobflow.core.errors.ErrorPublisher;
import io.nats.client.Connection;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class RemoveEducationListener extends BaseListener {

    private final EducationService educationService;
    private final Connection ns;

    public RemoveEducationListener(ObjectMapper mapper, ErrorPublisher errorPublisher,
            EducationService educationService, Connection ns) {
        super(mapper, errorPublisher);
        this.educationService = educationService;
        this.ns = ns;
    }

    @PostConstruct
    public void subscribe() {
        ns.createDispatcher().subscribe("cv.education.delete", m -> {
            try {
                RemoveEducationDto data = parseRequest(m, new TypeReference<EnvelopeRequest<RemoveEducationDto>>() {
                }).getData();
                log.info("Request: Removing education {} from CV {}", data.getEducationId(), data.getId());

                CvSchema updated = educationService.removeEducation(data);
                sendResponse(m, updated, ns);
            } catch (Exception e) {
                logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}