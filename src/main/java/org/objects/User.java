package org.objects;

import java.lang.annotation.Inherited;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import jakarta.annotation.Generated;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Component  @Getter @Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long uId;
    String first; 
    String last;
    @NonNull
    String password;
    Date dob;
    String phone; 
    @NonNull
    String email;
    @NonNull
    String username;

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
