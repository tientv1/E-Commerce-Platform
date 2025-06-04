package com.tientv.ecomuserservice.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;

@Configuration
public class FirebaseConfig {

    @Bean
    FirebaseApp firebase() throws IOException {
        try (var in = getClass().getResourceAsStream("/serviceAccountKey.json")) {
            assert in != null;
            return FirebaseApp.initializeApp(
                    FirebaseOptions.builder()
                            .setCredentials(GoogleCredentials.fromStream(in)).build());
        }
    }
}

