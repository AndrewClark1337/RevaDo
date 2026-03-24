package org.example.hackerrank5back.objects;

import jakarta.persistence.Column;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class BikeDTO {
    private String modelType;

    private int batteryLevel;

    private String status;

    private float latitude;
    private float longitude;

    private Date lastServiceDate;
}
