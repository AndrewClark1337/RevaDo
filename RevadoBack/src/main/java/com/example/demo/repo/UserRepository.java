package com.example.demo.repo;

//import org.example.objects.User;
//import org.springframework.stereotype.Repository;

import com.example.demo.objects.User;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface UserRepository extends JpaRepository<User,Long> {
    @Override
    <S extends User> S saveAndFlush(S entity);
    public User findByUsernameAndPassword(String username, String password);
}
