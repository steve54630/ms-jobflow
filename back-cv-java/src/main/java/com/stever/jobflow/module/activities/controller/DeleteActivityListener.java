package module.activities.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import config.BaseListener;
import config.EnvelopeRequest;
import core.CvSchema;
import core.enums.CVFields;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import module.activities.dto.DeleteActivityDto;
import module.errors.ErrorPublisher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import module.activities.service.ActivityService;
import module.cvs.service.CvService;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class DeleteActivityListener extends BaseListener {

    private final ActivityService activityService;
    private final CvService cvService;
    private final Connection ns;


    public DeleteActivityListener(ObjectMapper mapper, ErrorPublisher errorPublisher, ActivityService activityService, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.activityService = activityService;
        this.cvService = cvService;
        this.ns = ns;
        log.info("DeleteActivityListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.activities.remove", m -> {
            try {
                EnvelopeRequest<DeleteActivityDto> req = parseRequest(m, new TypeReference<>() {
                });
                DeleteActivityDto data = req.getData();
                log.info("Suppression de l'activité {} au cv {}", data.getId(), data.getActivityId());
                cvService.verify(data.getId(), data.getSub());
                CvSchema cv = activityService.removeFromField(data.getId(), CVFields.ACTIVITIES, data.getActivityId());
                sendResponse(m, cv, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
