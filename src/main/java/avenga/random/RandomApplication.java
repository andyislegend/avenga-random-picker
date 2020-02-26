package avenga.random;

import avenga.random.properties.GoogleCredentialProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(GoogleCredentialProperties.class)
public class RandomApplication {

    public static void main(String[] args) {
        SpringApplication.run(RandomApplication.class, args);
    }
}
