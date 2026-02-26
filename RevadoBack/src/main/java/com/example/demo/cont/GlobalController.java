package com.example.demo.cont;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalController {

    @ExceptionHandler
    public ResponseEntity< String> handleAuthFail(Exception e) {

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error"+e.getMessage());
    }

}