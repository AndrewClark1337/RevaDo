package com.example.demo.cont;

import com.example.demo.objects.Task;
import com.example.demo.services.TaskService;
import com.example.demo.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@RestController
public class TaskController {
    private final TaskService taskService;
    private final UserService userService;
    public TaskController(TaskService taskService, UserService userService) {
        this.taskService = taskService;
        this.userService = userService;
    }
    @GetMapping("/gettasks")
    public ResponseEntity<List<Task>> getTasks() {
        return ResponseEntity.ok(taskService.getAll());
    }
    @PostMapping("/newtask")
    public ResponseEntity<Task> newTask(@RequestParam String title,
                                        @RequestParam(required = false) String description,
                        @RequestParam int priority,
                                        @RequestParam int stage,
                        @RequestParam(required = false) LocalDate dueDate,
                                        @RequestParam Long owner,
                        @RequestParam(required= false) Long assigned) {
        System.out.println("Creating task");
        Task t = new Task();
        t.setTitle(title);
        t.setDescription(description);
        t.setPriority(priority);
        t.setStage(stage);
        t.setCreateDate(LocalDate.now());
        t.setDueDate(dueDate);
        t.setUpdateDate(LocalDate.now());
        t.setOwner(this.userService.findUser(owner));
        if (assigned != 0)
        {
            t.setAssigned(this.userService.findUser(assigned));
        }
        else {
            t.setAssigned(null);
        }

        return ResponseEntity.ok(taskService.createTask(t));
    }

}
