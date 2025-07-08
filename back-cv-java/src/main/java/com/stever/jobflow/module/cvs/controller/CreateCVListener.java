package module.cvs.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import config.NatsConnectionManager;
import core.CvSchema;
import io.nats.client.Connection;
import io.nats.client.Dispatcher;
import config.BaseListener;
import module.cvs.dto.CreateCvRequest;
import config.EnvelopeRequest;
import module.errors.ErrorPublisher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import module.cvs.service.CvService;

import javax.annotation.PostConstruct;

@Slf4j
@Component
public class CreateCVListener extends BaseListener {

    private final CvService cvService;
    private final Connection ns;

    public CreateCVListener(CvService cvService, NatsConnectionManager ngr, ErrorPublisher publisher, ObjectMapper mapper) {
        super(mapper, publisher);
        this.cvService = cvService;
        this.ns = ngr.getConnection();
        log.info("CreateCVListener initialized");
    }

    @PostConstruct
    public void subscribe() {
        Dispatcher d = ns.createDispatcher();
        d.subscribe("cv.create", m -> {
            try {
                EnvelopeRequest<CreateCvRequest> req = parseRequest(m, new TypeReference<>() {});
                CreateCvRequest data = req.getData();
                log.info("Création du cv {}", data.getCv().getCvTitle());
                CvSchema created = cvService.create(data.getCv(),  data.getSub());
                sendResponse(m, created, ns);
            } catch (JsonProcessingException je) {
                this.logErrorAndSend(je, m, 400, je.getLocalizedMessage());
            } catch (Exception e) {
                this.logErrorAndSend(e, m, 500, "Internal server error");
            }
        });
    }

}
