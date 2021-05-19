package com.ztw.hotelreservation.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping("/healthcheck")
    String healthCheck() {
        return "OK";
    }

    // Authentication tests

    @GetMapping("/home")
    String home() {
        return "No authentication needed";
    }

    //To może client i receptionist
    @GetMapping("/profile")
    String profile() {
        return "Authenticated to read client profile";
    }

    //To może tylko client
    @PostMapping("/profile")
    String profileEdit() {
        return "Authenticated to update client profile";
    }

    @GetMapping("/receptionistPanel")
    String receptionistPanel() {
        return "Authenticated to receptionist panel";
    }

    @GetMapping("/adminPanel")
    String adminPanel() {
        return "Authenticated to admin panel";
    }

    @RequestMapping("/login")
    String login() {
        return "Let's login now!";
    }
}
