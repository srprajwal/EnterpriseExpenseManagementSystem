package com.expense.management.controllers;



import com.expense.management.dto.RegisterRequest;
import com.expense.management.dto.MessageResponse;
import com.expense.management.dto.LoginRequest; // Import LoginRequest
import com.expense.management.dto.AuthResponse;  // Import AuthResponse
import com.expense.management.dto.ForgotPasswordRequest;
import com.expense.management.services.AuthService;
import com.expense.management.services.ForgotPasswordService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private final AuthService authService;
    
    private final ForgotPasswordService forgotPasswordService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        try {
            authService.registerUser(registerRequest);
            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        AuthResponse authResponse = authService.authenticateUser(loginRequest);
        return ResponseEntity.ok(authResponse);
    }
    
    
    public AuthController(AuthService authService, ForgotPasswordService forgotPasswordService) {
        this.authService = authService;
        this.forgotPasswordService = forgotPasswordService;
    }
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        forgotPasswordService.processForgotPassword(request.getEmail());
        return ResponseEntity.ok("Password reset link sent to your email.");
    }
    
}
