package com.FinalProject.AuthenticationApp.proxy;


import com.FinalProject.AuthenticationApp.model.Dto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "user-service",url = "localhost:7777")
public interface ProxyService {
    @PostMapping("/user-app-a1/add-user")
    public abstract ResponseEntity<?> sendUserDtoToProductApp(@RequestBody Dto dto);
}
