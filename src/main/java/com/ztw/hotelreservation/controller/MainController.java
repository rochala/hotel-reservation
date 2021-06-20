package com.ztw.hotelreservation.controller;

import org.springframework.web.bind.annotation.*;

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
    /*@GetMapping("/profile")
    String profile(@RequestBody String username) {
        return "Authenticated to read client profile: "+username;
    }*/
    

    @GetMapping("/receptionistPanel")
    String receptionistPanel() {
        return "Authenticated to receptionist panel";
    }

    @GetMapping("/adminPanel")
    String adminPanel() {
        return "Authenticated to admin panel";
    }
}
