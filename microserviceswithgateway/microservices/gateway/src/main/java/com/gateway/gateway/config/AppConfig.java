package com.gateway.gateway.config;


import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AppConfig {
    @Bean
    public RouteLocator getRoutes(RouteLocatorBuilder builder){
        return builder.routes()
                .route(p->p
                        .path("/admin-app/**")
                        .uri("lb://admin-service"))
                .route(p->p.
                        path("/auth-app-a1/**")
                        .uri("lb://auth-service"))
                .route(p->p.
                          path("/user-app-a1/**")
                         .uri("lb://user-service"))
                .build();
    }
}
