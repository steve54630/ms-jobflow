package com.stever.jobflow.module.skills.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.enums.CVFields;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.module.skills.dto.AddSkillDto;
import com.stever.jobflow.module.skills.service.SkillService;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class AppendSkillListener extends BaseListener {

    private final SkillService skillService;
    private final CvService cvService;
    private final Connection ns;

    public AppendSkillListener(ObjectMapper mapper, ErrorPublisher errorPublisher, SkillService skillService, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.skillService = skillService;
        this.cvService = cvService;
        this.ns = ns;
        log.info("AppendSkillListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.skills.add", m -> {
            try {
                EnvelopeRequest<AddSkillDto> request = parseRequest(m, new TypeReference<>() {
                });
                AddSkillDto data = request.getData();
                log.info("Ajout du skill {} au cv {}", data.getId(), data.getSkill().get(0).getId());
                cvService.verifyOwnership(data.getId(), data.getSub());
                CvSchema updated = skillService.appendToField(data.getId(), CVFields.SKILLS, data.getSkill().get(0));
                sendResponse(m, updated, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
