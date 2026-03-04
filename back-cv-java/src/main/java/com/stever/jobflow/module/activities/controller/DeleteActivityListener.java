package com.stever.jobflow.module.activities.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import com.stever.jobflow.module.activities.dto.DeleteActivityDto;
import com.stever.jobflow.core.errors.ErrorPublisher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import com.stever.jobflow.module.activities.service.ActivityService;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class DeleteActivityListener extends BaseListener {

    private final ActivityService activityService;
    private final Connection ns;

    public DeleteActivityListener(ObjectMapper mapper, ErrorPublisher errorPublisher,
            ActivityService activityService, Connection ns) {
        super(mapper, errorPublisher);
        this.activityService = activityService;
        this.ns = ns;
        log.info("DeleteActivityListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        log.info("Subscribing to 'cv.activities.remove'");
        Dispatcher d = ns.createDispatcher();

        d.subscribe("cv.activities.remove", m -> {
            try {
                // 1. Parsing
                EnvelopeRequest<DeleteActivityDto> req = parseRequest(m, new TypeReference<>() {
                });
                DeleteActivityDto data = req.getData();

                log.info("Request: Removal of activity {} from CV {}", data.getActivityId(), data.getId());

                // 2. Délégation à l'ActivityService (Orchestrateur)
                CvSchema cv = activityService.removeActivityFromCv(data);

                // 3. Réponse
                sendResponse(m, cv, ns);

            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, "Invalid JSON format");
            } catch (Exception e) {
                // Gère les 403 (verifyOwnership) ou 500
                this.logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}