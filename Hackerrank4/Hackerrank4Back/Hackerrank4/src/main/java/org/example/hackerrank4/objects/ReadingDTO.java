package org.example.hackerrank4.objects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class ReadingDTO {
    private String meterId;

    String sectorName;

    float usageKwh;

    int voltage;
    String status;
    long timestamp;
}

