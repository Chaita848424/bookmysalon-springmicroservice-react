package com.zosh.controller;

import com.zosh.model.User;
import com.zosh.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

private final UserService userService;


    @PostMapping("/api/users")
    public ResponseEntity<User> createUser(@RequestBody @Valid User user) {

        User createdUser= userService.createUser(user);
return new ResponseEntity<>(createdUser, HttpStatus.CREATED);

    }

    @GetMapping("/api/users")
    public ResponseEntity<List<User>> getUsers() {
List<User> users=userService.getAllUsers();
return new ResponseEntity<>(users,HttpStatus.OK);

    }

    @GetMapping("/api/users/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable("userId") Long id) throws Exception {
User user=userService.getUserById(id);
return new ResponseEntity<>(user,HttpStatus.OK);
    }


    @PutMapping("/api/users/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user,
                           @PathVariable Long id) throws Exception {
        User updatedUser=userService.updateUser(id,user);
        return new ResponseEntity<>(updatedUser,HttpStatus.OK);
    }

    @DeleteMapping("/api/users/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable Long id)  throws Exception {
userService.deleteUser(id);
return new ResponseEntity<>("User deleted",HttpStatus.ACCEPTED);
    }
    }


