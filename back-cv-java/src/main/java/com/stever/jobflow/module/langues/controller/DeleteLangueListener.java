package com.stever.jobflow.module.experiences.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.enums.CVFields;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.module.experiences.dto.AddExperienceDto;
import com.stever.jobflow.module.experiences.dto.RemoveExperienceDto;
import com.stever.jobflow.module.experiences.service.ExperienceService;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class DeleteExperienceListener extends BaseListener {

    private final ExperienceService experienceService;
    private final CvService cvService;
    private final Connection ns;

    public DeleteExperienceListener(ObjectMapper mapper, ErrorPublisher errorPublisher, ExperienceService experienceService, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.experienceService = experienceService;
        this.cvService = cvService;
        this.ns = ns;
        log.info("DeleteExperienceListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.experiences.delete", m -> {
            try {
                EnvelopeRequest<RemoveExperienceDto> request = parseRequest(m, new TypeReference<>() {
                });
                RemoveExperienceDto data = request.getData();
                log.info("Suppression de l'expérience {} du cv {}", data.getId(), data.getExperienceId());
                cvService.verify(data.getId(), data.getSub());
                CvSchema updated = experienceService.removeFromField(data.getId(), CVFields.EXPERIENCES, data.getExperienceId());
                sendResponse(m, updated, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
