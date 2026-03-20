package org.example.hackerrank3back.objects;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity @Getter
@Setter
public class Inventory {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    @Column(name="product_name")
    private String productName;
    private String category;
    @Column(name="shelf_location")
    private String shelfLocation;
    @Column(name="stock_level")
    private int stockLevel;
    private int capacity;

    @Column(name="last_updated")
    private long lastUpdated;
}
