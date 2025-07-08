package com.stever.jobflow.module.cvs.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.cvs.dto.UpdateCvDto;
import com.stever.jobflow.module.cvs.service.CvService;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class UpdateCvListener extends BaseListener {

    private final CvService cvService;
    private final Connection ns;

    public UpdateCvListener(ObjectMapper mapper, ErrorPublisher errorPublisher, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.cvService = cvService;
        this.ns = ns;
        log.info("UpdateCVListener initialized");
    }

    @PostConstruct
    public void subscribe() {

        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.update", m-> {

            try {
                EnvelopeRequest<UpdateCvDto> request = parseRequest(m, new TypeReference<>() {});
                UpdateCvDto data = request.getData();
                log.info("Création du cv {}", data.getId());
                CvSchema updated = cvService.update(data.getData(), data.getId(), data.getSub());
                sendResponse(m, updated, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }

        });

    }
}
