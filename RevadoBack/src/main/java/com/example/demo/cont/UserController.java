package com.example.demo.cont;

import com.example.demo.objects.User;
import lombok.RequiredArgsConstructor;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@RestController
public class UserController {

    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping
    public boolean login(@RequestParam String pass, @RequestParam String uname)
    {
        /*
        String[] passwords = {"password"};
        for (String password : passwords) {
            if (pass.equals(password)) {
                return true;
            }
        }
        */
         System.out.println("login");
        return true;
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User newUser) {
        System.out.println("register");
       System.out.println("registering user: " + newUser.toString());

        try {
            userService.addUser(newUser);
            return ResponseEntity.ok("User registered successfully!");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error registering user: " + e.getMessage());
        }


    }
    
}
