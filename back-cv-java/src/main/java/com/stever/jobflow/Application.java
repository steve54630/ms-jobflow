package com.stever.jobflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.stever.jobflow.repository")
public class Application {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Application.class);

        Map<String, Object> defaults = new HashMap<>();
        defaults.put("spring.data.mongodb.uri", "mongodb://root:example@localhost:27017/cv?authSource=admin");
        app.setDefaultProperties(defaults);

        app.run(args);
    }
}