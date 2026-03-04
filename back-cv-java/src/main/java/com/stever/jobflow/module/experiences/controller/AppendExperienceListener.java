package com.stever.jobflow.module.experiences.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.experiences.dto.AddExperienceDto;
import com.stever.jobflow.module.experiences.service.ExperienceService;
import io.nats.client.Connection;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class AppendExperienceListener extends BaseListener {

    private final ExperienceService experienceService;
    private final Connection ns;

    public AppendExperienceListener(ObjectMapper mapper, ErrorPublisher errorPublisher,
            ExperienceService experienceService, Connection ns) {
        super(mapper, errorPublisher);
        this.experienceService = experienceService;
        this.ns = ns;
    }

    @PostConstruct
    public void subscribe() {
        log.info("Subscribing to 'cv.experiences.add'");
        ns.createDispatcher().subscribe("cv.experiences.add", m -> {
            try {
                // Parsing
                AddExperienceDto data = parseRequest(m, new TypeReference<EnvelopeRequest<AddExperienceDto>>() {
                }).getData();

                // Délégation au service
                CvSchema updated = experienceService.addExperience(data);

                // Réponse
                sendResponse(m, updated, ns);
            } catch (Exception e) {
                logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}