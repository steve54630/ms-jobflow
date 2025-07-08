package com.stever.jobflow.module.educations.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.enums.CVFields;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.module.educations.dto.AddEducationDto;
import com.stever.jobflow.module.educations.services.EducationService;
import com.stever.jobflow.core.errors.ErrorPublisher;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class AppendEducationListener extends BaseListener {

    private final EducationService educationService;
    private final CvService cvService;
    private final Connection ns;


    public AppendEducationListener(ObjectMapper mapper, ErrorPublisher errorPublisher, EducationService educationService, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.educationService = educationService;
        this.cvService = cvService;
        this.ns = ns;
        log.info("AppendEducationListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.education.add", m -> {
            try {
                EnvelopeRequest<AddEducationDto> request = parseRequest(m, new TypeReference<>() {
                });
                AddEducationDto data = request.getData();
                log.info("Ajout de l'éducation {} au cv {}", data.getEducation().get(0).getId(), data.getId());
                cvService.verifyOwnership(data.getId(), data.getSub());
                CvSchema updated = educationService.appendToField(data.getId(), CVFields.EDUCATIONS, data.getEducation().get(0));
                sendResponse(m, updated, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
