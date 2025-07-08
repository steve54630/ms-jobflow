package com.stever.jobflow.module.cvs.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.core.CvSchema;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import com.stever.jobflow.module.cvs.dto.CvDto;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.errors.ErrorPublisher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import com.stever.jobflow.module.cvs.service.CvService;

import javax.annotation.PostConstruct;
import java.util.List;

@Slf4j
@Component
public class FindAllCvListener extends BaseListener {

    private final CvService cvService;
    private final Connection ns;

    public FindAllCvListener(ObjectMapper mapper, ErrorPublisher errorPublisher, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.cvService = cvService;
        this.ns = ns;
        log.info("FindALlCVListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.findAll", m -> {
            try {
                EnvelopeRequest<CvDto> req = parseRequest(m, new TypeReference<>() {
                });
                CvDto data = req.getData();
                log.info("Récuperation de tous les cv du membre {}", data.getSub());
                List<CvSchema> found = cvService.findAll(data.getSub());
                sendResponse(m, found, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }

        });
    }

}
