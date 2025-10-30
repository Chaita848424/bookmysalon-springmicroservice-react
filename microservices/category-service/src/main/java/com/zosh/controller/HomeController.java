package com.zosh.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String HomeControllerHandler(){
        return "category microservice for salon booking System";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello from HomeController!";
    }
}
