package com.bookstore.service;

import com.bookstore.dto.RegisterRequest;
import com.bookstore.dto.LoginRequest;
import com.bookstore.model.User;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public String register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email is already registered!";
        }

        User user = new User(request.getName(), request.getEmail(), request.getPassword());
        userRepository.save(user);
        return "User registered successfully!";
    }

    public boolean authenticate(LoginRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            return user.getPassword().equals(request.getPassword());
        }
        return false;
    }
}
