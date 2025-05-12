package com.bookstore.controller;

import com.bookstore.dto.LoginRequest;
import com.bookstore.dto.RegisterRequest;
import com.bookstore.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
         if (authService.authenticate(request)) {
 
            return ResponseEntity.ok(Map.of("token", "fake-jwt-token"));
        } else {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        String result = authService.register(request);
        if (result.equals("User registered successfully!")) {
            return ResponseEntity.ok(Map.of("message", result));
        } else {
            return ResponseEntity.badRequest().body(Map.of("message", result));
        }
    }
}
