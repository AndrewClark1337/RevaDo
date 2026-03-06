package com.example.demo.cont;

import com.example.demo.objects.Task;
import com.example.demo.objects.User;
import com.example.demo.services.TaskService;
import com.example.demo.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class TaskController {
    private final TaskService taskService;
    private final UserService userService;
    public TaskController(TaskService taskService, UserService userService) {
        this.taskService = taskService;
        this.userService = userService;
    }
    @GetMapping("/gettasks")
    public ResponseEntity<List<Task>> getTasks(@RequestParam Long id)
    {
        List<Task> tasks = taskService.getAll(id);
        if (tasks.isEmpty()) {
            return ResponseEntity.ok(null);
        }
        else {
            return ResponseEntity.ok(tasks);
        }
    }

    @GetMapping("/getsubtasks")
    public ResponseEntity<List<Task>> getSubTasks(Long id)
    {
        return ResponseEntity.ok(taskService.findSubtasks(id));
    }

    @PostMapping("/newtask")
    public ResponseEntity<Task> newTask(@RequestParam String title, @RequestParam(required = false) String description,
                        @RequestParam int priority, @RequestParam boolean completed, @RequestParam Long owner, @RequestParam(required = false) Long parent) {

        Task t = new Task();
        t.setTitle(title);
        t.setDescription(description);
        t.setPriority(priority);
        t.setCompleted(completed);
        if(parent!=null) {
            t.setParent(this.taskService.getById(parent));
            System.out.println(t.getParent());
        }
        t.setOwner(this.userService.findUser(owner));
        System.out.println("Creating task: "+t);
        return ResponseEntity.ok(taskService.createTask(t));
    }
    @PutMapping("/editTask")
    public ResponseEntity<Map<String,String>>  editTask(@RequestParam String title, @RequestParam(required = false) String description,
                                        @RequestParam int priority, @RequestParam boolean completed,@RequestParam Long owner, @RequestParam(required = false) Long parent) {
        Map<String,String> response = new HashMap<>();

        System.out.println("Editing task");
        try {
            Task t = new Task();
            t.setTitle(title);
            t.setDescription(description);
            if (parent != null) {
                t.setParent(this.taskService.getById(parent));
            }
            t.setPriority(priority);
            t.setCompleted(completed);
            t.setOwner(this.userService.findUser(owner));
            taskService.updateTask(t);
            response.put("message", "Task updated successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping("/complete")
    public ResponseEntity<Map<String,String>> complete(@RequestParam Long id)
    {
        Map<String,String> response = new HashMap<>();
        try{
            taskService.completeTask(id);
            response.put("message", "Task completed");

            return ResponseEntity.ok(response);
        }
        catch(Exception e){
            response.put("status", "error");
            response.put("message", "Error registering user: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    @PostMapping("/updatetask")
   public ResponseEntity<Map<String,String>> updateTask(@RequestParam Long tid,@RequestParam String title, @RequestParam(required = false) String description,
                                                        @RequestParam int priority, @RequestParam boolean completed,@RequestParam Long owner,
                                                        @RequestParam(required = false) Long parent)
    {
        Map<String,String> response = new HashMap<>();
        Task task = new Task();
        task.setTid(tid);
        task.setTitle(title);
        task.setDescription(description);
        task.setPriority(priority);
        task.setCompleted(completed);
        task.setOwner(this.userService.findUser(owner));
        if(parent != null) {
            task.setParent(this.taskService.getById(parent));
            System.out.println("Parent: "+task.getParent());
        }
        try
        {
            taskService.updateTask(task);
            response.put("message", "Task updated successfully");
            return ResponseEntity.ok(response);
        }
        catch(Exception e){
            response.put("status", "error");
            response.put("message", "Error registering user: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }

    }
    @GetMapping("/findtask")
    public ResponseEntity<Task> findUser(@RequestParam Long tid)
    {
        Task u = taskService.getById(tid);
        if (u != null)
        {
            return ResponseEntity.ok(u);
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/deletetask")
    public ResponseEntity<Map<String,String>> delete(@RequestParam Long id)
    {
        Map<String,String> response = new HashMap<>();
        taskService.delete(id);
        response.put("message", "Task deleted");
        return ResponseEntity.ok(response);
    }


}
