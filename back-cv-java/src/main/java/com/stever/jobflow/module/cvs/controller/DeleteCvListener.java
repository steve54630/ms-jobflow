package module.cvs.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import config.BaseListener;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import module.cvs.dto.CvRequest;
import config.EnvelopeRequest;
import module.errors.ErrorPublisher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import module.cvs.service.CvService;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class DeleteCvListener extends BaseListener {

    private final CvService cvService;
    private final Connection ns;

    public DeleteCvListener(ObjectMapper mapper, ErrorPublisher errorPublisher, CvService cvService, Connection ns) {
        super(mapper, errorPublisher);
        this.cvService = cvService;
        this.ns = ns;
        log.info("DeleteCVListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.delete", m -> {
            try {
                EnvelopeRequest<CvRequest> req = parseRequest(m, new TypeReference<>() {
                });
                CvRequest data = req.getData();
                log.info("Suppression du cv {}", data.getId());
                Boolean deleted = cvService.delete(data.getId(), data.getSub());
                sendResponse(m, deleted, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }
}
