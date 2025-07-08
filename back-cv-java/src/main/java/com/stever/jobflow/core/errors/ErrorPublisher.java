package com.stever.jobflow.module.errors;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.config.NatsConnectionManager;
import com.stever.jobflow.core.exceptions.ErrorResponse;
import io.nats.client.Connection;
import io.nats.client.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;

@Slf4j
@Component
public class ErrorPublisher {

    private final ObjectMapper mapper;
    private final Connection ns;

    public ErrorPublisher(NatsConnectionManager ns, ObjectMapper mapper) {
        this.ns = ns.getConnection();
        this.mapper = mapper;
    }

    public void sendError(Exception je, Message m, int code, String message) {
        log.error("Erreur capturé", je);
        ErrorResponse err = new ErrorResponse(code, message);
        try {
            String errJson = mapper.writeValueAsString(err);
            if (m.getReplyTo() != null) {
                ns.publish(m.getReplyTo(), errJson.getBytes(StandardCharsets.UTF_8));
            } else {
                log.warn("Pas de replyTo pour envoyer l’erreur");
            }
        } catch (JsonProcessingException ex) {
            log.error(ex.toString());
        }
    }

}
