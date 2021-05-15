package com.ztw.hotelreservation.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping("/healthcheck")
    String healthCheck() {
        return "OK";
    }
}
