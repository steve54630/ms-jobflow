package com.stever.jobflow.config;

import io.nats.client.Connection;
import io.nats.client.Nats;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.io.IOException;

@Slf4j
@Component
public class NatsConnectionManager {

    private Connection connection;

    @PostConstruct
    public void init() {
        try {
            log.info("Tentative de connexion");
            connection = Nats.connect("nats://localhost:4222");
            log.info("Connexion au service nats");
        } catch (IOException | InterruptedException e) {
            log.error("Could not connect to NATS server", e);
            throw new IllegalStateException("Could not connect to NATS server", e);
        }
    }

    @Bean
    public Connection getConnection() {
        if (connection == null || connection.getStatus() != Connection.Status.CONNECTED) {
            throw new IllegalStateException("NATS connection is not initialized");
        }
        return connection;
    }

    @PreDestroy
    public void clean() throws InterruptedException {
        if (connection != null && connection.getStatus() == Connection.Status.CONNECTED) {
            log.info("Fermeture de la connexion NATS");
            connection.close();
        }
    }
}
