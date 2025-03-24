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

        // Assign role based on the request
        String requestedRoleName = registerRequest.getRole();
        Role requestedRole = roleRepository.findByName(requestedRoleName);

        if (requestedRole != null) {
            user.getRoles().add(requestedRole);
        } else {
            // Handle case where the requested role doesn't exist
            System.err.println("Requested role not found: " + requestedRoleName);
            // Optionally, assign a default role here if needed
            Role defaultRole = roleRepository.findByName("EMPLOYEE");
            if (defaultRole != null) {
                user.getRoles().add(defaultRole);
            }
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

        User user = userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
        String role = "UNKNOWN";
        if (user != null && !user.getRoles().isEmpty()) {
            role = user.getRoles().iterator().next().getName(); // Get the name of the first role
        }

        return new AuthResponse(jwt, role);
    }
}