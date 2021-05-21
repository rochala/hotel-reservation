package com.ztw.hotelreservation.controller;

import com.ztw.hotelreservation.model.User;
import com.ztw.hotelreservation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class ApplicationUserController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ApplicationUserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    //Ciekawa sprawa, gdy ma się w bazie już usera o danym ID to i tak probuje za pierwszym razem utworzyc i wyrzuca
    //wyjatek, dopiero za drugim razem podnosi auto generowany indeks
    @PostMapping("/register")
    ResponseEntity<Object> register(@RequestBody User newUser) {
        Optional<User> checkUsername = userRepository.findByUsername(newUser.getUsername());
        if (checkUsername.isPresent())
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        else {
            String unHashedPassword= newUser.getPassword();
            newUser.setPassword(passwordEncoder.encode(unHashedPassword));
            newUser.setActive(true);
            newUser.setRole("CLIENT");
            return new ResponseEntity<>(userRepository.save(newUser), HttpStatus.CREATED);
        }
    }
}
