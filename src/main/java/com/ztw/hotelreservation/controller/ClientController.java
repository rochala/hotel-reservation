package com.ztw.hotelreservation.controller;

import com.ztw.hotelreservation.authentication.ApplicationUserService;
import com.ztw.hotelreservation.jwt.JwtTokenProvider;
import com.ztw.hotelreservation.jwt.JwtTokenResponse;
import com.ztw.hotelreservation.model.Client;
import com.ztw.hotelreservation.model.User;
import com.ztw.hotelreservation.repository.ClientRepository;
import com.ztw.hotelreservation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ClientController {
    public final UserRepository userRepository;
    public final ClientRepository clientRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final ApplicationUserService applicationUserService;

    @Autowired
    public ClientController(UserRepository userRepository, ClientRepository clientRepository, JwtTokenProvider jwtTokenProvider, ApplicationUserService applicationUserService) {
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.applicationUserService = applicationUserService;
    }

    @GetMapping("/profile")
    public ResponseEntity<Object> getProfileData(@RequestAttribute Long id) {
        return new ResponseEntity<>(clientRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/profile")
    public ResponseEntity<?> updateUserDetails(@RequestAttribute Long id, @RequestBody Client updatedClient) {
        Optional<User> checkUsername = userRepository.findByUsername(updatedClient.getUsername());
        if (checkUsername.isPresent())
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        else {
            Client clientToUpdate = clientRepository.findById(id).get();
            if (clientToUpdate.getRole().equals("CLIENT"))
                clientToUpdate.setUsername(updatedClient.getUsername());
            clientToUpdate.setName(updatedClient.getName());
            clientToUpdate.setSurname(updatedClient.getSurname());
            clientToUpdate.setPhone(updatedClient.getPhone());
            clientToUpdate.setAddress1(updatedClient.getAddress1());
            clientToUpdate.setAddress2(updatedClient.getAddress2());
            clientToUpdate.setCity(updatedClient.getCity());
            clientToUpdate.setZipCode(updatedClient.getZipCode());
            clientToUpdate.setCountry(updatedClient.getCountry());
            clientRepository.save(clientToUpdate);
            UserDetails updatedUserDetails = applicationUserService.loadUserByUsername(clientToUpdate.getUsername());
            String token = jwtTokenProvider.generateToken(new UsernamePasswordAuthenticationToken(
                    updatedUserDetails,
                    null,
                    updatedUserDetails.getAuthorities()
            ));
            return ResponseEntity.ok(new JwtTokenResponse(token));
        }
    }
}
