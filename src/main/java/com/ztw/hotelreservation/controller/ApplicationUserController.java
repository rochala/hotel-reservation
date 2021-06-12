package com.ztw.hotelreservation.controller;

import com.ztw.hotelreservation.authentication.ApplicationUserService;
import com.ztw.hotelreservation.authentication.facebook.FacebookLoginRequest;
import com.ztw.hotelreservation.authentication.facebook.FacebookService;
import com.ztw.hotelreservation.jwt.JwtFacebookAuthResponse;
import com.ztw.hotelreservation.jwt.JwtTokenProvider;
import com.ztw.hotelreservation.jwt.JwtTokenResponse;
import com.ztw.hotelreservation.model.Client;
import com.ztw.hotelreservation.model.User;
import com.ztw.hotelreservation.repository.ClientRepository;
import com.ztw.hotelreservation.repository.UserRepository;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class ApplicationUserController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ClientRepository clientRepository;
    private final FacebookService facebookService;
    private final JwtTokenProvider jwtTokenProvider;
    private final ApplicationUserService applicationUserService;

    @Autowired
    public ApplicationUserController(UserRepository userRepository, PasswordEncoder passwordEncoder, ClientRepository clientRepository, FacebookService facebookService, JwtTokenProvider jwtTokenProvider, AuthenticationManager authenticationManager, ApplicationUserService applicationUserService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.clientRepository = clientRepository;
        this.facebookService = facebookService;
        this.jwtTokenProvider = jwtTokenProvider;
        this.applicationUserService = applicationUserService;
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

    @PostMapping("/facebook/login")
    public  ResponseEntity<?> facebookAuth(@RequestBody FacebookLoginRequest facebookLoginRequest) {
        boolean firstRegistration = facebookService.userNeedsDetails(facebookLoginRequest.getAccessToken());
        String token = facebookService.loginUser(facebookLoginRequest.getAccessToken());
        String name = facebookService.getName(facebookLoginRequest.getAccessToken());
        String surname = facebookService.getSurname(facebookLoginRequest.getAccessToken());
        return ResponseEntity.ok(new JwtFacebookAuthResponse(token, firstRegistration, name, surname));
    }

    @PostMapping("/facebook/registerdetails")
    public  ResponseEntity<?> facebookRegisterDetails(@RequestAttribute Long id, @RequestBody Client client) {
        Client registeringUser=clientRepository.findById(id).get();
        registeringUser.setRole("CLIENT");
        registeringUser.setName(client.getName());
        registeringUser.setSurname(client.getSurname());
        registeringUser.setPhone(client.getPhone());
        registeringUser.setAddress1(client.getAddress1());
        registeringUser.setAddress2(client.getAddress2());
        registeringUser.setCity(client.getCity());
        registeringUser.setZipCode(client.getZipCode());
        registeringUser.setCountry(client.getCountry());
        clientRepository.save(registeringUser);
        UserDetails updatedUserDetails = applicationUserService.loadUserByUsername(registeringUser.getUsername());
        String token=jwtTokenProvider.generateToken(new UsernamePasswordAuthenticationToken(
                updatedUserDetails,
                null,
                updatedUserDetails.getAuthorities()
        ));
        return ResponseEntity.ok(new JwtTokenResponse(token));
    }

    @GetMapping("/userrole")
    public  ResponseEntity<?> getUserRole(@RequestAttribute Long id) {
        Client client=clientRepository.findById(id).get();
        String role=client.getRole();
        Map<String, String> jsonMap=new HashMap<>();
        jsonMap.put("role", role);
        JSONObject jsonObject = new JSONObject(jsonMap);
        return ResponseEntity.ok(new JSONObject(jsonMap));
    }
}
