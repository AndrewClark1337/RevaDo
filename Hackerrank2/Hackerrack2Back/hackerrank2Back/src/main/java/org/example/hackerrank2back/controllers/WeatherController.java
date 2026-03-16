package org.example.hackerrank2back.controllers;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.example.hackerrank2back.objects.Weather;
import org.example.hackerrank2back.objects.WeatherDTO;
import org.example.hackerrank2back.services.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class WeatherController {

    private final WeatherService wServ;


    public WeatherController(WeatherService wServ) {
        this.wServ = wServ;
    }
    @PostMapping("/weather")
    ResponseEntity<Map<String, String>> newWeather(@RequestBody WeatherDTO weatherData)
    {
        Map<String,String> response = new HashMap<>();
        try {
            wServ.createWeather(weatherData);

            response.put("message","Weather created successfully");
            return ResponseEntity.ok(response);
        }
        catch(Exception e) {
            response.put("error", "Error creating weather");
            return ResponseEntity.badRequest().body(response);
        }

    }
    @GetMapping("/weather")
    ResponseEntity<List<Weather>> getWeather(@RequestParam(required = false) String cityName,@RequestParam(required = false) String region)
    {
        List<Weather> weather;
        System.out.println("Finding weather");
        try
        {
            weather=wServ.getWeather(cityName,region);
            return ResponseEntity.ok(weather);
        } catch (Exception e) {
            System.out.println("Error getting weather: "+e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/weather/{id}")
    ResponseEntity<Weather> getWeather(@PathVariable int id)
    {
        Weather weather;
        weather = wServ.findWeather(id);
        return ResponseEntity.ok(weather);
    }
}
