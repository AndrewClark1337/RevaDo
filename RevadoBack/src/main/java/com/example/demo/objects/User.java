package com.example.demo.objects;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.stereotype.Component;

//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
import java.util.Date;

@Component  @Getter @Setter
public class User {
    //@Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private long uId;
 
    @NonNull
    String password;
    @NonNull
    String email;
    @NonNull
    String username;

    String phone; 
    Date dob;   
    String first; 
    String last;


}
