package com.stever.jobflow.module.cvs.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import com.stever.jobflow.module.cvs.dto.CvDto;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.errors.ErrorPublisher;
import org.springframework.stereotype.Component;
import com.stever.jobflow.module.cvs.service.CvService;

import javax.annotation.PostConstruct;

@Component
public class FindCvListener extends BaseListener {
    private final CvService cvService;
    private final Connection ns;

    public FindCvListener(ObjectMapper mapper, ErrorPublisher errorPublisher, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.cvService = cvService;
        this.ns = ns;
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();

        // Find One
        d.subscribe("cv.findOne", m -> {
            try {
                CvDto data = parseRequest(m, new TypeReference<EnvelopeRequest<CvDto>>() {
                }).getData();
                sendResponse(m, cvService.findOne(data), ns);
            } catch (Exception e) {
                logErrorAndSend(e, m, 500, e.getMessage());
            }
        });

        // Find All
        d.subscribe("cv.findAll", m -> {
            try {
                CvDto data = parseRequest(m, new TypeReference<EnvelopeRequest<CvDto>>() {
                }).getData();
                sendResponse(m, cvService.findAll(data), ns);
            } catch (Exception e) {
                logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}
