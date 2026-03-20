package org.example.hackerrank3back.repositories;

import org.example.hackerrank3back.objects.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory,Integer> {
    <S extends Inventory> S saveAndFlush(S entity);

    Inventory findById(int id);
    List<Inventory> findByProductName(String productName);
    List<Inventory> findByCategory(String category);
    List<Inventory> findByProductNameAndCategory(String productName, String category);
    @Query("SELECT DISTINCT i.category FROM Inventory i")
    List<String> findAllCategories();
}
