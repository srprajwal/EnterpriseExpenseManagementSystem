package com.expense.management.services;

  import com.expense.management.entities.User;
  import com.expense.management.repositories.UserRepository;
import com.expense.management.security.UserDetailsImpl;

import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.security.core.userdetails.UserDetails;
  import org.springframework.security.core.userdetails.UserDetailsService;
  import org.springframework.security.core.userdetails.UsernameNotFoundException;
  import org.springframework.stereotype.Service;
  import org.springframework.security.core.GrantedAuthority;
  import org.springframework.security.core.authority.SimpleGrantedAuthority;

  import java.util.Collection;
  import java.util.List;
  import java.util.ArrayList;

  @Service
  public class UserDetailsServiceImpl implements UserDetailsService {

      @Autowired
      UserRepository userRepository;

      @Override
      public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
          User user = userRepository.findByEmail(email)
                  .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

          return UserDetailsImpl.build(user); // Make sure your UserDetailsImpl has a build method
      }

      private Collection<? extends GrantedAuthority> getAuthorities(User user) {
          List<GrantedAuthority> authorities = new ArrayList<>();
          for (com.expense.management.entities.Role role : user.getRoles()) {
              authorities.add(new SimpleGrantedAuthority(role.getName()));
          }
          return authorities;
      }
  }