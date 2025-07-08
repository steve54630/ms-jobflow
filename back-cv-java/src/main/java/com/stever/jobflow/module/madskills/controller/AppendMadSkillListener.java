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
import com.stever.jobflow.module.experiences.dto.AddExperienceDto;
import com.stever.jobflow.module.experiences.service.ExperienceService;
import com.stever.jobflow.module.langues.dto.AddLangueDto;
import com.stever.jobflow.module.langues.service.LangueService;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class AppendLangueListener extends BaseListener {

    private final LangueService langueService;
    private final CvService cvService;
    private final Connection ns;

    public AppendLangueListener(ObjectMapper mapper, ErrorPublisher errorPublisher, LangueService langueService, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.langueService = langueService;
        this.cvService = cvService;
        this.ns = ns;
        log.info("AppendLangueListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.langues.add", m -> {
            try {
                EnvelopeRequest<AddLangueDto> request = parseRequest(m, new TypeReference<>() {
                });
                AddLangueDto data = request.getData();
                log.info("Ajout de la langue {} au cv {}", data.getId(), data.getLangue().getId());
                cvService.verify(data.getId(), data.getSub());
                CvSchema updated = langueService.appendToField(data.getId(), CVFields.LANGUAGES, data.getLangue());
                sendResponse(m, updated, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
