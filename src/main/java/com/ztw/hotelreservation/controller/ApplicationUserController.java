package com.ztw.hotelreservation.controller;

import com.ztw.hotelreservation.model.Client;
import com.ztw.hotelreservation.model.User;
import com.ztw.hotelreservation.repository.ClientRepository;
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
    private final ClientRepository clientRepository;

    @Autowired
    public ApplicationUserController(UserRepository userRepository, PasswordEncoder passwordEncoder, ClientRepository clientRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.clientRepository = clientRepository;
    }

    //Ciekawa sprawa, gdy ma się w bazie już usera o danym ID to i tak probuje za pierwszym razem utworzyc i wyrzuca
    //wyjatek, dopiero za drugim razem podnosi auto generowany indeks
    @PostMapping("/register")
    ResponseEntity<Object> register(@RequestBody Client newClient) {
        Optional<User> checkUsername = userRepository.findByUsername(newClient.getUsername());
        if (checkUsername.isPresent())
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        else {
            String unHashedPassword= newClient.getPassword();
            newClient.setPassword(passwordEncoder.encode(unHashedPassword));
            newClient.setActive(true);
            newClient.setRole("CLIENT");
            return new ResponseEntity<>(clientRepository.save(newClient), HttpStatus.CREATED);
        }
    }
}
