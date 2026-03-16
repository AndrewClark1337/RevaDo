package org.example.hackerrank2back.services;

import org.example.hackerrank2back.objects.Weather;
import org.example.hackerrank2back.objects.WeatherDTO;
import org.example.hackerrank2back.repositories.WeatherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WeatherService {

    private final WeatherRepository wRepo;

     WeatherService(WeatherRepository weatherRepository) {
        this.wRepo = weatherRepository;
    }

    public void createWeather (WeatherDTO weather){
        Weather newWeather = DTOtoWeather(weather);
        this.wRepo.saveAndFlush(newWeather);
    }

    public List<Weather> getWeather(String cityName, String region)
    {
        if(cityName==null && region ==null)
        {
            return this.wRepo.findAll();
        }
        else if(cityName==null)
        {
            return this.wRepo.findByRegion(region);
        }
        else if(region==null)
        {
            return this.wRepo.findByCityName(cityName);
        }
        else
        {
            return this.wRepo.findByCityNameAndRegion(cityName, region);
        }
    }
    public Weather findWeather(int id)
    {
        return this.wRepo.findById(id);
    }
    Weather DTOtoWeather (WeatherDTO weather){
        Weather newWeather = new Weather();
        newWeather.setLatitude(weather.getLatitude());
        newWeather.setLongitude(weather.getLongitude());
        newWeather.setTemperature(weather.getTemperature());
        newWeather.setRegion(weather.getRegion());
        newWeather.setCityName(weather.getCityName());
        return newWeather;
    }
}
