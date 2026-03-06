package com.example.demo.objects;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;
import com.example.demo.objects.User;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity @Getter @Setter
public class Task implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long tid;

    int priority;

    @NonNull
    boolean completed;
    @NonNull
    @ManyToOne(fetch = FetchType.LAZY)           // ← changed to ManyToOne (more natural)
    @JoinColumn(name = "owner", nullable = false)
    private User owner;

        // optional assigned user
    String description;
    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
            @JoinColumn(name="parentid")
    private Task parent;

    @NonNull
    String title;
    @JsonManagedReference
    @OneToMany(mappedBy = "parent",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    List<Task> subtasks = new ArrayList<>();

    /*
    public Task(String title,int pri, String stage, User o)
    {
        
        this.priority=pri;
        this.owner=o;
        this.stage=stage;
        this.title=title;
        this.createDate=LocalDateTime.now();
    }
*/

    

}