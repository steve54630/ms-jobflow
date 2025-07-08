package com.stever.jobflow.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stever.jobflow.core.interfaces.Listener;
import io.nats.client.Connection;
import io.nats.client.Message;
import com.stever.jobflow.core.errors.ErrorPublisher;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;

@Slf4j
@RequiredArgsConstructor
abstract public class BaseListener implements Listener {

    protected final ObjectMapper mapper;
    protected final ErrorPublisher errorPublisher;

    protected void logErrorAndSend(Exception e, Message m, int code, String message) {
        errorPublisher.sendError(e, m, code, message);
    }

    protected <T> T parseRequest(Message m, TypeReference<T> typeof) throws JsonProcessingException {
        String json = new String(m.getData(), StandardCharsets.UTF_8);
        log.info("body : {}",json);
        return mapper.readValue(json, typeof);
    }

    protected void sendResponse(Message m, Object response, Connection ns) throws JsonProcessingException {
        String res = mapper.writeValueAsString(response);
        ns.publish(m.getReplyTo(), res.getBytes(StandardCharsets.UTF_8));
    }
}
