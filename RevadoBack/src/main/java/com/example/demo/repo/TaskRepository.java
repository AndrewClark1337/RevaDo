package com.example.demo.repo;

import com.example.demo.objects.Task;
import com.example.demo.objects.User;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {
    <S extends Task> S saveAndFlush(S entity);
    Task findByTid(long id);


    @Query("UPDATE Task t SET t.completed = true WHERE t.tid = :id") @Modifying
    void completeTask(Long id);

    @Query("SELECT t FROM Task t WHERE t.parent IS NULL")
    List<Task> findAllTasks(Sort sort);

    List<Task> findTasksByParent(Sort sort, Long id);
    void deleteTasksByTid(Long id);
}
