package com.example.demo.objects;


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


@Entity @Getter @Setter
public class Task implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long tid;

    int priority;

    @NonNull
    int stage;

    @NonNull
    @ManyToOne(fetch = FetchType.LAZY)           // ← changed to ManyToOne (more natural)
    @JoinColumn(name = "owner", nullable = false)
    private User owner;

    @ManyToOne(fetch = FetchType.LAZY)           // optional assigned user
    @JoinColumn(name = "assigned", nullable = true)
    private User assigned;
    String description;
    
    @NonNull
    String title;
    @Column(name = "create_date")
    LocalDate createDate;
    @Column(name="due_date")
    LocalDate dueDate;
    @Column(name="update_date")
    LocalDate updateDate;
    @PrePersist
    protected void onCreate() {

            this.createDate = LocalDate.now();

    }
    @PreUpdate
    protected void onUpdate() {
        this.updateDate = LocalDate.now();
    }
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