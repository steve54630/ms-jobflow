package com.stever.jobflow.module.experiences.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.experiences.dto.RemoveExperienceDto;
import com.stever.jobflow.module.experiences.service.ExperienceService;
import io.nats.client.Connection;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class DeleteExperienceListener extends BaseListener {

    private final ExperienceService experienceService;
    private final Connection ns;

    public DeleteExperienceListener(ObjectMapper mapper, ErrorPublisher errorPublisher,
            ExperienceService experienceService, Connection ns) {
        super(mapper, errorPublisher);
        this.experienceService = experienceService;
        this.ns = ns;
        log.info("DeleteExperienceListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        ns.createDispatcher().subscribe("cv.experiences.delete", m -> {
            try {
                // Parsing du DTO
                RemoveExperienceDto data = parseRequest(m, new TypeReference<EnvelopeRequest<RemoveExperienceDto>>() {
                }).getData();

                log.info("Request: Removing experience {} from CV {}", data.getExperienceId(), data.getId());

                // Délégation au service métier
                CvSchema updated = experienceService.removeExperience(data);

                // Réponse
                sendResponse(m, updated, ns);

            } catch (JsonProcessingException je) {
                logErrorAndSend(je, m, 400, "Invalid JSON format");
            } catch (Exception e) {
                // Capture les 403 de verifyOwnership ou les 500
                logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}