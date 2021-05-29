package com.ztw.hotelreservation.controller;

import com.ztw.hotelreservation.repository.ClientRepository;
import com.ztw.hotelreservation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController {
    public final UserRepository userRepository;
    public final ClientRepository clientRepository;

    @Autowired
    public ClientController(UserRepository userRepository, ClientRepository clientRepository) {
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
    }

    @GetMapping("/profile")
    public ResponseEntity<Object> getProfileData(@RequestAttribute Long id) {
        return new ResponseEntity<>(clientRepository.findById(id), HttpStatus.OK);
    }
}
