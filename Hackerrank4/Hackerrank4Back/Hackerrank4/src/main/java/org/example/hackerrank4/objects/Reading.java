package org.example.hackerrank4.objects;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter
@Setter @NoArgsConstructor
public class Reading {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="meter_id")
    private String meterId;

    @Column(name="sector_name")
    String sectorName;

    @Column(name="usage_kwh")
    float usageKwh;

    int voltage;
    String status;
    long timestamp;
}