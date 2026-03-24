package org.example.hackerrank5back.repositories;

import jakarta.transaction.Transactional;
import org.example.hackerrank5back.objects.Bike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BikeRepository extends JpaRepository<Bike, Integer> {
    <S extends Bike> S saveAndFlush(S entity);

    @Transactional
    @Query("SELECT b from Bike b where b.batteryLevel < 15 OR b.status='MAINTENANCE'")
    List<Bike> findNeedsService();

    Bike findById(int id);

    @Transactional
    @Modifying
    @Query("UPDATE Bike b SET b.status = :status  WHERE b.id = :id ")
    int updateStatus(@Param("id") int id, @Param("status") String status);

    void deleteById(int id);
}
