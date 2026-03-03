package com.example.demo.objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import org.springframework.stereotype.Component;


import java.io.Serializable;
import java.util.Date;
@Entity
 @Getter @Setter @NoArgsConstructor @Component  @ToString
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long uid;
     @NonNull
     private String username;
    @NonNull
    private String password;
    @NonNull
    private String email;

     private String dob;


     private String first;
     private String last;
     private String phone;


}
