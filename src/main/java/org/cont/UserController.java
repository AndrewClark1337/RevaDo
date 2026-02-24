package org.cont;

import org.objects.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
@RequestMapping("/users")
public class UserController {

    private final services.UserService userService;

    public UserController(services.UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public boolean login(@RequestParam String pass, @RequestParam String uname)
    {
        String[] passwords = {"password"};
        for (String password : passwords) {
            if (pass.equals(password)) {
                return true;
            }
        }
        return false;
    }
    @PostMapping("/register")
    public String register(@RequestParam User user) {
        System.out.println("registering user: " + user.toString());
        try {
            userService.addUser(user);
            return "User registered successfully";

        } catch (Exception e) {
            return "Error registering user: " + e.getMessage();
        }
       
        
        
    }
    
}
