package org.example.hackerrank3back.objects;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class InventoryDTO {


        private String productName;
        private String category;
        private String shelfLocation;
        private int stockLevel;
        private int capacity;

        private long lastUpdated;

}
