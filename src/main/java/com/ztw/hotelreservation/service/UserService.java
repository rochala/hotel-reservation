package com.ztw.hotelreservation.service;

import com.ztw.hotelreservation.jwt.JwtTokenProvider;
import com.ztw.hotelreservation.model.User;
import com.ztw.hotelreservation.repository.UserRepository;
import com.ztw.hotelreservation.security.ApplicationUserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;

    @Autowired
    public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository, AuthenticationManager authenticationManager, JwtTokenProvider tokenProvider) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }


    public String loginUser(String username, String password) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(username, password));

        return tokenProvider.generateToken(authentication);
    }

    public User registerUser(User user, ApplicationUserRole role) {
        System.out.println("registering user");

        if(userRepository.existsByUsername(user.getUsername())) {
            System.out.println("username already exists.");

            throw new RuntimeException(
                    String.format("username %s already exists", user.getUsername()));
        }

        user.setActive(true);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(role.name());

        return userRepository.save(user);
    }

    public List<User> findAll() {
        System.out.println("retrieving all users");
        return userRepository.findAll();
    }

    public Optional<User> findByUsername(String username) {
        System.out.println("retrieving user");
        return userRepository.findByUsername(username);
    }

    public Optional<User> findById(Long id) {
        System.out.println("retrieving user");
        return userRepository.findById(id);
    }
}
