package com.stever.jobflow.module.cvs.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.NatsConnectionManager;
import io.nats.client.Connection;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.module.cvs.dto.CreateCvDto;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.errors.ErrorPublisher;
import org.springframework.stereotype.Component;
import com.stever.jobflow.module.cvs.service.CvService;

import javax.annotation.PostConstruct;

@Component
public class CreateCVListener extends BaseListener {
    private final CvService cvService;
    private final Connection ns;

    public CreateCVListener(CvService cvService, NatsConnectionManager ngr, ErrorPublisher publisher,
            ObjectMapper mapper) {
        super(mapper, publisher);
        this.cvService = cvService;
        this.ns = ngr.getConnection();
    }

    @PostConstruct
    public void subscribe() {
        ns.createDispatcher().subscribe("cv.create", m -> {
            try {
                CreateCvDto data = parseRequest(m, new TypeReference<EnvelopeRequest<CreateCvDto>>() {
                }).getData();
                sendResponse(m, cvService.create(data), ns);
            } catch (Exception e) {
                logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}