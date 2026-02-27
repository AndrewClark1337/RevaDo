package com.example.demo.repo;

//import org.example.objects.User;
//import org.springframework.stereotype.Repository;

import com.example.demo.objects.User;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepository extends JpaRepository<User,Long> {
 
}
