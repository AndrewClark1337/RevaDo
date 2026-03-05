package com.example.demo.objects;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;


import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
 @Getter @Setter @NoArgsConstructor  @ToString
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public Long uid;
     @NonNull
     public String username;
    @NonNull
    private String password;
    @NonNull
    private String email;

     private LocalDate dob;
     private String first;
     private String last;
     private String phone;


}
