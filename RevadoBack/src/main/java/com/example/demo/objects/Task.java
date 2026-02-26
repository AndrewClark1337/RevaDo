package com.example.demo.objects;


import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.example.demo.objects.User;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
import java.time.LocalDateTime;


@Component  @Getter @Setter
public class Task {
  // @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private long tId;
    int priority;
    @NonNull
    String stage;

    @NonNull  @Getter @Setter
    User owner;


    String description;
    
 @NonNull
    String title;
    @NonNull
    LocalDateTime createDate;
 
    LocalDateTime dueDate;

    LocalDateTime updateDate;
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