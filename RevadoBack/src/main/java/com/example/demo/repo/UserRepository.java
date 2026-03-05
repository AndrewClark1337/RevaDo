package com.example.demo.repo;

//import org.example.objects.User;
//import org.springframework.stereotype.Repository;

import com.example.demo.objects.User;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository

public interface UserRepository extends JpaRepository<User,Long> {
    @Override
    <S extends User> S saveAndFlush(S entity);
    User findByUsernameAndPassword(String username, String password);
    User findByUid(long id);

    @Query("SELECT u.username,u.uid FROM User u")
    List<Object[]> findAllUsernames();

    User findByUsername(String username);
}
