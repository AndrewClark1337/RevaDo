package org.example.hackerrank5back.objects;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.sql.Date;

@Entity @Getter
@Setter @ToString @NoArgsConstructor @AllArgsConstructor
public class Bike implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="model_type")
    private String modelType;

    @Column(name="battery_level")
    private int batteryLevel;

    private String status;

    private float latitude;
    private float longitude;

    @Column(name="last_service_date")
    private Date lastServiceDate;

}
