package com.stever.jobflow.module.skills.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.skills.dto.RemoveSkillDto;
import com.stever.jobflow.module.skills.service.SkillService;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class DeleteSkillListener extends BaseListener {

    private final SkillService skillService;
    private final Connection ns;

    public DeleteSkillListener(ObjectMapper mapper, ErrorPublisher errorPublisher,
            SkillService skillService, Connection ns) {
        super(mapper, errorPublisher);
        this.skillService = skillService;
        this.ns = ns;
        log.info("DeleteSkillListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        log.info("Subscribing to 'cv.skills.delete'");
        Dispatcher d = ns.createDispatcher();

        d.subscribe("cv.skills.delete", m -> {
            try {
                // 1. Parsing du message NATS
                EnvelopeRequest<RemoveSkillDto> request = parseRequest(m, new TypeReference<>() {
                });
                RemoveSkillDto data = request.getData();

                log.info("Request: Removal of skill {} from CV {}", data.getSkillId(), data.getId());

                // 2. Délégation à l'orchestrateur (Service)
                CvSchema updated = skillService.removeSkillFromCv(data);

                // 3. Réponse NATS
                sendResponse(m, updated, ns);

            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, "Invalid JSON format");
            } catch (Exception e) {
                // Gère les erreurs de sécurité (403) ou techniques (500)
                this.logErrorAndSend(e, m, 500, e.getMessage());
            }
        });
    }
}