package com.FinalProject.AdminApp.proxy;

import com.FinalProject.AdminApp.model.DTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


    @FeignClient(name = "auth-service",url = "localhost:6666")
    public interface ProxyService {
        @PostMapping(path = "auth-app-a1/update-role" ,headers = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX3JvbGUiOiJST0xFLVVTRVIiLCJ1c2VyX2VtYWlsIjoiU1NLQDEyMyIsImlhdCI6MTY3MjA0OTczMX0.W4mW3gtKQAxyZGAZnoglka-P6ENKS3UPpGRM1X6e_rj2fpLGP1RPJgy-3A7jCBFdBuK32gQVz6TLvBnJbjjBGQ")
        public abstract ResponseEntity<?> sendUserDtoToAuthApp(@RequestBody DTO dto );
    }
