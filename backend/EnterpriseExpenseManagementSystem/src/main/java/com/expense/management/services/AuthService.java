package com.expense.management.services;

import com.expense.management.dto.RegisterRequest;

public interface AuthService {
    void registerUser(RegisterRequest registerRequest);
}