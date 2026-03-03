package com.example.demo.services;

import com.example.demo.objects.User;
import com.example.demo.repo.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserRepository userRepository;


    @Autowired
    public UserService(UserRepository userRepository)
    {

        this.userRepository = userRepository;
    }
    public User loginUser(String username, String password)
    {
        return userRepository.findByUsernameAndPassword(username, password);

    }
    public void addUser(User user){
        System.out.println("adding to database");
        userRepository.saveAndFlush(user);

    }
}
