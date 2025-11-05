package com.zosh.service.impl;

import com.zosh.model.User;
import com.zosh.repository.UserRepository;
import com.zosh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service   // 🔥 This tells Spring to create the bean
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) throws Exception {
        return userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found"));
    }

    @Override
    public User updateUser(Long id, User user) throws Exception {
        User existing = getUserById(id);
        existing.setFullName(user.getFullName());
        existing.setEmail(user.getEmail());
        return userRepository.save(existing);
    }

    @Override
    public String deleteUser(Long id) {
        userRepository.deleteById(id);
        return null;
    }
}
