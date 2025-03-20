package com.expense.management.services;



import com.expense.management.dto.RegisterRequest;
import com.expense.management.dto.LoginRequest;
import com.expense.management.dto.AuthResponse; 

public interface AuthService {
    void registerUser(RegisterRequest registerRequest);
    AuthResponse authenticateUser(LoginRequest loginRequest); 
}