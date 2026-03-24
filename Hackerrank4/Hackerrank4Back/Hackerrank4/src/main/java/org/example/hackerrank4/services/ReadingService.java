package org.example.hackerrank4.services;

import org.example.hackerrank4.objects.Reading;
import org.example.hackerrank4.objects.ReadingDTO;
import org.example.hackerrank4.repositories.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReadingService {

    @Autowired
    private ReadingRepository readingRepository;


    public void createReading(ReadingDTO reading) {
        Reading r = new Reading();
        r.setStatus(reading.getStatus());
        r.setSectorName(reading.getSectorName());
        r.setUsageKwh(reading.getUsageKwh());
        r.setMeterId(reading.getMeterId());
        r.setTimestamp(reading.getTimestamp());
        r.setVoltage(reading.getVoltage());
        readingRepository.saveAndFlush(r);
    }

    public Reading getReading(int id) {
        return readingRepository.findById(id);
    }

    public List<Reading> getReadings(String sectorName,String status) {
        if(sectorName!=null && status!=null)
        {
            return readingRepository.findBySectorNameAndStatus(sectorName,status);
        }
        else if(sectorName==null&&status!=null){
            return readingRepository.findByStatus(status);
        }
        else if(sectorName!=null&&status==null){
            return readingRepository.findBySectorName(sectorName);
        }
        else{
            return readingRepository.findAll();
        }

    }
}
