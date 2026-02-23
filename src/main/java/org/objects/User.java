package org.objects;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Component  @Getter @Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    public User(String first, String last, String password, Date dob, String phone, String email, String username) {
        this.first = first;
        this.last = last;
        this.password = password;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
        this.username = username;
    }
}
