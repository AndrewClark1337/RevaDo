package com.example.demo.objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.stereotype.Component;


import java.util.Date;

 @Getter @Setter @NoArgsConstructor @Component @Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long uid;
 
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
