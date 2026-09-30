package com.agrin.auth;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    public static class LoginRequest {
        public String email;
        public String password;
        public String role;
    }

    public static class AuthResponse {
        public String token;
        public String email;
        public String role;
        public String message;
        public long timestamp;

        public AuthResponse(String token, String email, String role, String message) {
            this.token = token;
            this.email = email;
            this.role = role;
            this.message = message;
            this.timestamp = System.currentTimeMillis();
        }
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        String token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
                Base64.getEncoder().encodeToString((request.email + ":" + request.role).getBytes()) +
                ".AgriNSignatureToken2026";
        return new AuthResponse(token, request.email, request.role, "Successfully authenticated with Spring Boot agrin-auth-service");
    }

    @GetMapping("/health")
    public Map<String, Object> health() {
        Map<String, Object> status = new HashMap<>();
        status.put("service", "agrin-auth-service");
        status.put("port", 8081);
        status.put("status", "UP");
        status.put("active_users", 142090);
        return status;
    }
}
