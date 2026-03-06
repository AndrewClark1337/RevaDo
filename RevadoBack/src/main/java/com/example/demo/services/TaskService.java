package com.example.demo.services;

import com.example.demo.objects.Task;
import com.example.demo.repo.TaskRepository;
import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service @Transactional
public class TaskService {
    private final TaskRepository taskRepository;

    TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAll(Long id){
        Sort sort = Sort.by(Sort.Direction.ASC, "priority");
        return  taskRepository.findAllTasksByOwner(sort,id );
    }
    public Task createTask(Task task){
        taskRepository.saveAndFlush(task);
        System.out.println("Task created: " + task);
        return task;
    }
    public Task getById(Long id){
        return taskRepository.findByTid(id);
    }
    public void completeTask(Long id){
        taskRepository.completeTask(id);
    }

    public void updateTask(Task task){
        System.out.println("Task updated: " + task);
        taskRepository.saveAndFlush(task);
    }
    public List<Task> findSubtasks(Long id){
        Sort sort = Sort.by(Sort.Direction.ASC, "priority");
        return  taskRepository.findAllTasksByOwner(sort, id);
    }
    public void delete(Long id){
        taskRepository.deleteById(id);
    }
}
