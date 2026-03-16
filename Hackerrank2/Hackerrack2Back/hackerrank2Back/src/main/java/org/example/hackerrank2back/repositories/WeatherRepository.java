package org.example.hackerrank2back.repositories;

import org.example.hackerrank2back.objects.Weather;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WeatherRepository extends JpaRepository<Weather,Integer> {
    <S extends Weather> S saveAndFlush(S entity);
    Weather findById(int id);

    List<Weather> findAll();
    List<Weather> findByCityName(String cityName);
    List<Weather> findByRegion(String region);
    List<Weather> findByCityNameAndRegion(String cityName, String region);
}
