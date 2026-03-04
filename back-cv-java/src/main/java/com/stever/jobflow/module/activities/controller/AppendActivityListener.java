package com.stever.jobflow.module.activities.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import com.stever.jobflow.module.activities.dto.AddActivityDto;
import com.stever.jobflow.core.errors.ErrorPublisher;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import com.stever.jobflow.module.activities.service.ActivityService;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class AppendActivityListener extends BaseListener {

    private final ActivityService activityService;
    private final Connection ns;

    public AppendActivityListener(
            ObjectMapper mapper,
            ErrorPublisher errorPublisher,
            ActivityService activityService,
            Connection ns) {
        super(mapper, errorPublisher); // Résout l'erreur "Implicit super constructor"
        this.activityService = activityService;
        this.ns = ns;
        log.info("AppendActivityListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        log.info("AppendActivityListener initialized and subscribing to 'cv.activities.add'");

        Dispatcher d = ns.createDispatcher();

        d.subscribe("cv.activities.add", m -> {
            try {
                // 1. Extraction et Parsing (Responsabilité du Listener/BaseListener)
                EnvelopeRequest<AddActivityDto> req = parseRequest(m, new TypeReference<>() {
                });
                AddActivityDto data = req.getData();

                // 2. Délégation totale à la couche métier (Le Service orchestre tout)
                CvSchema cv = activityService.addActivityToCv(data);

                // 3. Réponse (Responsabilité du Listener)
                sendResponse(m, cv, ns);

            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, "Invalid JSON format");
            } catch (Exception e) {
                // Ici, on attrape aussi les erreurs métier (ex: AccessDeniedException lancée
                // par le service)
                this.logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}