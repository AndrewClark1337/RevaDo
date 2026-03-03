package com.example.demo.cont;

import com.example.demo.objects.User;
import lombok.RequiredArgsConstructor;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;


@RestController
public class UserController {

    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/login")
    public ResponseEntity<User> login(@RequestParam String username, @RequestParam String password)
    {
        try {
            User u = this.userService.loginUser(username, password);
            if (u != null){
                System.out.println("logging in: " + u);
                return ResponseEntity.ok(u);
            }
            else
            {
                System.out.println("Error: User not found");
                return ResponseEntity.ok(null);
            }

        }
        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @PostMapping("/register" )
    public ResponseEntity<String> register(@RequestParam String username,@RequestParam String password,  @RequestParam String email,
                                           @RequestParam(required = false) String first,@RequestParam(required = false) String last,
                                           @RequestParam(required = false) String phone,@RequestParam(required = false) String dob ) {
        System.out.println("register");
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setDob(dob);
        user.setEmail(email);
        user.setFirst(first);
        user.setLast(last);
        user.setPhone(phone);
       System.out.println("registering user: " + user);


        try {
            userService.addUser(user);
            return  ResponseEntity.ok("Message from backend: User registered successfully!");

        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error registering user: " + e.getMessage());
        }


    }
    
}
