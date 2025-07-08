package com.stever.jobflow.module.madskills.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.BaseListener;
import com.stever.jobflow.config.EnvelopeRequest;
import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.enums.CVFields;
import com.stever.jobflow.core.errors.ErrorPublisher;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.module.madskills.dto.RemoveMadSkillsDto;
import com.stever.jobflow.module.madskills.service.MadSkillsService;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class DeleteMadSkillListener extends BaseListener {

    private final MadSkillsService madSkillService;
    private final CvService cvService;
    private final Connection ns;

    public DeleteMadSkillListener(ObjectMapper mapper, ErrorPublisher errorPublisher, MadSkillsService madSkillService, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.madSkillService = madSkillService;
        this.cvService = cvService;
        this.ns = ns;
        log.info("DeleteMadSkillListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.mad_skills.delete", m -> {
            try {
                EnvelopeRequest<RemoveMadSkillsDto> request = parseRequest(m, new TypeReference<>() {
                });
                RemoveMadSkillsDto data = request.getData();
                log.info("Suppression du mad skill {} du cv {}", data.getMadSkillId(), data.getId());
                cvService.verifyOwnership(data.getId(), data.getSub());
                CvSchema updated = madSkillService.removeFromField(data.getId(), CVFields.MADSKILLS, data.getMadSkillId());
                sendResponse(m, updated, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
