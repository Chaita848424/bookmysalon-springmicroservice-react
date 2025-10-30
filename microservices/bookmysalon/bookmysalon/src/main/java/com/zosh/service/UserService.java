package com.zosh.service;

import com.zosh.exception.UserException;
import com.zosh.model.User;

import java.util.List;

public interface UserService {
    User createUser(User user);
    User getUserById(Long id) throws UserException;
    List<User> getAllUsers();
    String deleteUser(Long id) throws UserException;
    User updateUser(Long id, User user) throws UserException;

}
