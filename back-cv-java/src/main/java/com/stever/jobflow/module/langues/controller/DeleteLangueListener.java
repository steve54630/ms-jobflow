package com.stever.jobflow.module.langues.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.enums.CVFields;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.module.langues.dto.RemoveLangueDto;
import com.stever.jobflow.module.langues.service.LangueService;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class DeleteLangueListener extends BaseListener {

    private final LangueService langueService;
    private final CvService cvService;
    private final Connection ns;

    public DeleteLangueListener(ObjectMapper mapper, ErrorPublisher errorPublisher, LangueService langueService, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.langueService = langueService;
        this.cvService = cvService;
        this.ns = ns;
        log.info("DeleteLangueListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.langues.delete", m -> {
            try {
                EnvelopeRequest<RemoveLangueDto> request = parseRequest(m, new TypeReference<>() {
                });
                RemoveLangueDto data = request.getData();
                log.info(request.toString());
                log.info("Suppression de la langue {} du cv {}", data.getLanguageId(), data.getId());
                cvService.verifyOwnership(data.getId(), data.getSub());
                CvSchema updated = langueService.removeFromField(data.getId(), CVFields.LANGUES, data.getLanguageId());
                sendResponse(m, updated, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
