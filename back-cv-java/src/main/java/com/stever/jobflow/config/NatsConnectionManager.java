package config;

import io.nats.client.Connection;
import io.nats.client.Nats;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.io.IOException;

@Component
public class NatsConnectionManager {

    private Connection connection;
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @PostConstruct
    public void init() {
        try {
            logger.info("Tentative de connexion");
            connection = Nats.connect("nats://localhost:4222");
            logger.info("connection au service nats");
        } catch (IOException | InterruptedException e) {
            throw new IllegalStateException("Could not connect to NATS server", e);
        }
    }

    public NatsConnectionManager() {
        logger.info("Constructeur NatsConnectionManager appelé");
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
            connection.close();
        }
    }
}
