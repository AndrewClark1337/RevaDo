package org.example.hackerrank2back.objects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class WeatherDTO {
     String cityName;
     String region;
     float latitude;
     float longitude;
     float temperature;
     long timestamp;
}
