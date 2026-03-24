package org.example.hackerrank4.repositories;

import org.example.hackerrank4.objects.Reading;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReadingRepository extends JpaRepository<Reading, Integer> {
    <S extends Reading> S saveAndFlush(S s);

    Reading findById(int id);
    List<Reading> findBySectorName(String sectorName);
    List<Reading> findByStatus(String status);
    List<Reading> findBySectorNameAndStatus(String sectorName, String status);
}

