package com.expense.management.services;



import com.expense.management.dto.RegisterRequest;
import com.expense.management.dto.LoginRequest;
import com.expense.management.dto.AuthResponse;
import com.expense.management.entities.User;
import com.expense.management.entities.Role; // Import Role
import com.expense.management.repositories.UserRepository;
import com.expense.management.security.UserDetailsImpl;
import com.expense.management.repositories.RoleRepository; // Import RoleRepository
import com.expense.management.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository; // Inject RoleRepository

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    public void registerUser(RegisterRequest registerRequest) {
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new RuntimeException("Error: Email is already in use!");
        }

        User user = new User();
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        // Assign default role (e.g., EMPLOYEE)
        Role employeeRole = roleRepository.findByName("EMPLOYEE");
        if (employeeRole != null) {
            user.getRoles().add(employeeRole);
        }

        userRepository.save(user);
    }

    @Override
    public AuthResponse authenticateUser(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String jwt = jwtUtils.generateToken((UserDetails) userDetails);


        // Get user details (role) - Replace this with your actual logic to fetch user details
        User user = userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
        String role = (user != null) ? user.getRoles().toString() : "UNKNOWN";

        return new AuthResponse(jwt, role);
    }
}