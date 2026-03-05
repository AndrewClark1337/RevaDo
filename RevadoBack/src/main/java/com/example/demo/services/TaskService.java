package com.example.demo.services;

import com.example.demo.objects.Task;
import com.example.demo.repo.TaskRepository;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
    public List<Task> getAll(){
        Sort sort = Sort.by(Sort.Direction.ASC, "priority");
        return  taskRepository.findAll(sort);
    }
    public Task createTask(Task task){
        taskRepository.saveAndFlush(task);
        System.out.println("Task created: " + task);
        return task;
    }
}
