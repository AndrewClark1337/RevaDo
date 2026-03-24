package org.example.hackerrank4.controllers;

import org.example.hackerrank4.objects.Reading;
import org.example.hackerrank4.objects.ReadingDTO;
import org.example.hackerrank4.services.ReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ReadingController {

    @Autowired
    private ReadingService readingService;

    @PostMapping("/meters")
    public ResponseEntity<Map<String,String>> newReading(@RequestBody ReadingDTO reading) {
        try {
            readingService.createReading(reading);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/meters")
    public ResponseEntity<List<Reading>> getReadings(@RequestParam(required = false) String sectorName, @RequestParam(required = false) String status)
    {
        List<Reading> results = readingService.getReadings(sectorName,status);
        System.out.println(results.toString());
        if(!results.isEmpty())
        {
            return new ResponseEntity<>(results, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/meters/{id}")
    public ResponseEntity<Reading> findReading(@PathVariable int id)
    {
        Reading r =readingService.getReading(id);
        if(r!=null) {
            return new ResponseEntity<Reading>(r, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
}
