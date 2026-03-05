package com.example.demo.repo;

import com.example.demo.objects.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {
    <S extends Task> S saveAndFlush(S entity);



}
