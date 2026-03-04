package com.stever.jobflow.module.cvs.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import io.nats.client.Connection;
import com.stever.jobflow.module.cvs.dto.CvDto;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.errors.ErrorPublisher;
import org.springframework.stereotype.Component;
import com.stever.jobflow.module.cvs.service.CvService;

import javax.annotation.PostConstruct;

@Component
public class DeleteCvListener extends BaseListener {
    private final CvService cvService;
    private final Connection ns;

    public DeleteCvListener(ObjectMapper mapper, ErrorPublisher errorPublisher, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.cvService = cvService;
        this.ns = ns;
    }

    @PostConstruct
    public void subscribe() {
        ns.createDispatcher().subscribe("cv.delete", m -> {
            try {
                CvDto data = parseRequest(m, new TypeReference<EnvelopeRequest<CvDto>>() {
                }).getData();
                sendResponse(m, cvService.delete(data), ns);
            } catch (Exception e) {
                logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}