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
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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
            System.out.println("logging in: " + u);
            if (u != null){

                return ResponseEntity.ok(u);
            }
            else
            {
                System.out.println("Error: User not found");
                return  ResponseEntity.notFound().build();
            }

        }
        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @PostMapping("/register" )
    public ResponseEntity<Map<String,String>> register(@RequestParam String username, @RequestParam String password, @RequestParam String email,
                                                       @RequestParam(required = false) String first, @RequestParam(required = false) String last,
                                                       @RequestParam(required = false) String phone, @RequestParam(required = false) LocalDate dob ) {
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
        Map<String,String> response = new HashMap<>();


        try {
            userService.addUser(user);
            response.put("status", "success");
            response.put("message", "Message from backend: User registered successfully!");
            return  ResponseEntity.ok(response);

        }
        catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Error registering user: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }


    }

    @GetMapping("/getusers")
    public ResponseEntity<Map<String, Long>> getUsernames()
    {
        List<Object[]> users = userService.findAllUsers();
        Map<String,Long> response = new HashMap<>();
        for (Object[] user : users)
        {
            String username = (String) user[0];
            Long password = (Long) user[1];
            response.put(username, password);

        }
        System.out.println("getting usernames: " + response);
        return  ResponseEntity.ok(response);
    }
    @GetMapping("/finduser")
    public ResponseEntity<User> findUser(@RequestParam Long uid)
    {
        User u = userService.findUser(uid);
        if (u != null)
        {
            return ResponseEntity.ok(u);
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }
}
