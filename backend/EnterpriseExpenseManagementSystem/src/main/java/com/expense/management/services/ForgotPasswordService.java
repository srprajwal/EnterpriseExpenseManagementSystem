package com.expense.management.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.expense.management.entities.User;
import com.expense.management.repositories.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class ForgotPasswordService {

    private final UserRepository userRepository;
    private final JavaMailSender mailSender;
    private final PasswordEncoder passwordEncoder;

    @Value("${frontend.url}")
    private String frontendUrl;

    @Value("${spring.mail.username}")
    private String mailUsername;

    public ForgotPasswordService(UserRepository userRepository, JavaMailSender mailSender, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.mailSender = mailSender;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public void processForgotPassword(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));

        // Generate a unique reset token
        String token = UUID.randomUUID().toString();
        user.setResetToken(token);

        // Set token expiry time (e.g., 1 hour from now)
        LocalDateTime expiryTime = LocalDateTime.now().plusHours(1);
        user.setResetTokenExpiry(expiryTime);

        userRepository.save(user);

        // Send reset password email
        sendResetPasswordEmail(user.getEmail(), token);
    }

    private void sendResetPasswordEmail(String recipientEmail, String token) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(mailUsername);
        message.setTo(recipientEmail);
        message.setSubject("Password Reset Request");
        String resetLink = frontendUrl + "/reset-password?token=" + token;
        message.setText("To reset your password, click the following link:\n" + resetLink);

        mailSender.send(message);
    }
    
    @Transactional
    public boolean resetPassword(String token, String newPassword) {
        User user = userRepository.findByResetToken(token)
                .orElseThrow(() -> new RuntimeException("Invalid reset token."));

        if (user.getResetTokenExpiry().isBefore(LocalDateTime.now())) {
            user.setResetToken(null);
            user.setResetTokenExpiry(null);
            userRepository.save(user);
            throw new RuntimeException("Reset token has expired.");
        }

        // Update password
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);

        // Invalidate the token
        user.setResetToken(null);
        user.setResetTokenExpiry(null);

        userRepository.save(user);
        return true;
    }
    
}