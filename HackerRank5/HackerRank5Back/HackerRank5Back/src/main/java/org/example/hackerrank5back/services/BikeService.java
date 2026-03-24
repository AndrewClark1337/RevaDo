package org.example.hackerrank5back.services;

import org.example.hackerrank5back.objects.Bike;
import org.example.hackerrank5back.objects.BikeDTO;
import org.example.hackerrank5back.repositories.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BikeService {
    @Autowired
    private BikeRepository bikeRepository;

    public void createBike(BikeDTO bikeDTO) {
        Bike bike = new Bike();
        bike.setBatteryLevel(bikeDTO.getBatteryLevel());
        bike.setLongitude(bikeDTO.getLongitude());
        bike.setLatitude(bikeDTO.getLatitude());
        bike.setStatus(bikeDTO.getStatus());
        bike.setModelType(bikeDTO.getModelType());
        bike.setLastServiceDate(bikeDTO.getLastServiceDate());
        bikeRepository.saveAndFlush(bike);

    }
    public List<Bike> getBikes(boolean needsService){
        if(!needsService){
            return bikeRepository.findAll();
        }
        else
        {
            return bikeRepository.findNeedsService();
        }
    }
    public Bike findBike(int id){
        return this.bikeRepository.findById(id);
    }

    public void updateStatus(int id, String status){
        bikeRepository.updateStatus(id,status);
    }

    public void deleteById(int id){
        this.bikeRepository.deleteById(id);
    }
}
