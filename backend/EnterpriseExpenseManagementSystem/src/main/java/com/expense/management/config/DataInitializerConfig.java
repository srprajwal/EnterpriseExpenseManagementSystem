package com.expense.management.config;

import com.expense.management.entities.Role;
import com.expense.management.repositories.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializerConfig {

    @Bean
    public CommandLineRunner initializeRoles(RoleRepository roleRepository) {
        return args -> {
            if (roleRepository.findByName("EMPLOYEE") == null) {
                Role employeeRole = new Role();
                employeeRole.setName("EMPLOYEE");
                roleRepository.save(employeeRole);
            }

            if (roleRepository.findByName("MANAGER") == null) {
                Role managerRole = new Role();
                managerRole.setName("MANAGER");
                roleRepository.save(managerRole);
            }

            if (roleRepository.findByName("ADMIN") == null) {
                Role adminRole = new Role();
                adminRole.setName("ADMIN");
                roleRepository.save(adminRole);
            }
        };
    }
}