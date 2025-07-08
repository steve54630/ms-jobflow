package com.stever.jobflow.module.activities.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.enums.CVFields;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import com.stever.jobflow.module.activities.dto.AddActivityDto;
import com.stever.jobflow.core.errors.ErrorPublisher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import com.stever.jobflow.module.activities.service.ActivityService;
import com.stever.jobflow.module.cvs.service.CvService;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class AppendActivityListener extends BaseListener {

    private final ActivityService activityService;
    private final CvService cvService;
    private final Connection ns;


    public AppendActivityListener(ObjectMapper mapper, ErrorPublisher errorPublisher, ActivityService activityService, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.activityService = activityService;
        this.cvService = cvService;
        this.ns = ns;
        log.info("AppendActivityListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.activities.add", m -> {
            try {
                EnvelopeRequest<AddActivityDto> req = parseRequest(m, new TypeReference<>() {
                });
                AddActivityDto data = req.getData();
                log.info("Ajout de l'activité {} au cv {}", data.getActivity().get(0).getId(), data.getId());
                cvService.verifyOwnership(data.getId(), data.getSub());
                CvSchema cv = activityService.appendToField(data.getId(), CVFields.ACTIVITIES, data.getActivity().get(0));
                sendResponse(m, cv, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
