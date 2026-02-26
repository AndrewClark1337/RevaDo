package com.example.demo.services;

//import org.example.objects.User;
import com.example.demo.repo.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public String addUser(String user){
        System.out.println("adding to database");
        //return userRepository.saveAndFlush(user);
        return "";
    }
}
