package com.stever.jobflow.module.cvs.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.cvs.dto.UpdateCvDto;
import com.stever.jobflow.module.cvs.service.CvService;
import io.nats.client.Connection;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class UpdateCvListener extends BaseListener {
    private final CvService cvService;
    private final Connection ns;

    public UpdateCvListener(ObjectMapper mapper, ErrorPublisher errorPublisher, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.cvService = cvService;
        this.ns = ns;
    }

    @PostConstruct
    public void subscribe() {
        ns.createDispatcher().subscribe("cv.update", m -> {
            try {
                UpdateCvDto data = parseRequest(m, new TypeReference<EnvelopeRequest<UpdateCvDto>>() {
                }).getData();
                sendResponse(m, cvService.update(data), ns);
            } catch (Exception e) {
                logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}