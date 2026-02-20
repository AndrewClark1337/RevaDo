package org.cont;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping("/users")
public class UserController {

    

    @GetMapping("/login/{uname}")
    public boolean login(@RequestParam String pass, @PathVariable String uname)
    {
        String[] passwords = {"password"};
        for(int i = 0; i<passwords.length;i++)
        {
            if(pass == passwords[i])
            {
                return true;
            }
        }
        return false;
    }
}
