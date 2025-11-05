package com.zosh.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String HomeControllerHandler(){
        return "user microservice for salon";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello from HomeController!";
    }
}
