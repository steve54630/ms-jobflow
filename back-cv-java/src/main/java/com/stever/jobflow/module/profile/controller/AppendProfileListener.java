package com.stever.jobflow.module.profile.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.profile.dto.ProfileDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.module.profile.service.ProfileService;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class AppendProfileListener extends BaseListener {

    private final ProfileService profileService;
    private final CvService cvService;
    private final Connection ns;

    public AppendProfileListener(ObjectMapper mapper, ErrorPublisher errorPublisher, ProfileService profileService, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.profileService = profileService;
        this.cvService = cvService;
        this.ns = ns;
        log.info("AppendProfileListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.profile.create", m -> {
            try {
                EnvelopeRequest<ProfileDto> request = parseRequest(m, new TypeReference<>() {
                });
                ProfileDto data = request.getData();
                log.info("Modification du champ {} pour le cv {} ", data.getSelect(), data.getValue());
                cvService.verifyOwnership(data.getId(), data.getSub());
                CvSchema updated = profileService.appendToField(data.getId(), data.getSelect(), data.getValue());
                sendResponse(m, updated, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
