package com.example.demo.cont;

import lombok.RequiredArgsConstructor;
//import com.example.demo.services.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {

    //private final UserService userService;

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
    public String register() {
        System.out.println("register");
     /*   System.out.println("registering user: " + user.toString());

        try {
            userService.addUser(user);
            return ResponseEntity.ok("User registered successfully!");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error registering user: " + e.getMessage());
        }
       */

        return "User registered successfully";
    }
    
}
