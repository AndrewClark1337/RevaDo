package org.example.hackerrank5back.controllers;

import org.example.hackerrank5back.objects.Bike;
import org.example.hackerrank5back.objects.BikeDTO;
import org.example.hackerrank5back.services.BikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class BikeController {
    @Autowired
    private BikeService bikeService;

    @PostMapping("/fleet")
    public ResponseEntity<Map<String,String>> newBike(@RequestBody BikeDTO bike){
        try{
            if(bike.getBatteryLevel()<20)
            {
                return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_CONTENT);

            }

            if(validate(bike))
            {
                return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_CONTENT);
            }
            else{
                bikeService.createBike(bike);
                return new ResponseEntity<>(HttpStatus.CREATED);
            }

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    private boolean validate(BikeDTO bike)
    {
        if(bike.getBatteryLevel()<0 || bike.getBatteryLevel()>100)
        {
            return false;
        }
        if(bike.getStatus()!="AVAILABLE"&& bike.getStatus()!="RENTED"
        && bike.getStatus()!="MAINTENANCE" && bike.getStatus()!="OUT_OF_ORDER")
        {
            return false;
        }
        return true;
    }
    @GetMapping("/fleet")
    public ResponseEntity<List<Bike>> getBikes(@RequestParam(required = false, defaultValue = "false") boolean needsService){
        List<Bike> bikes = this.bikeService.getBikes(needsService);
        if(bikes.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        else
        {
            return ResponseEntity.ok(bikes);
        }
    }
    @GetMapping("/fleet/{id}")
    public ResponseEntity<Bike> getBike(@PathVariable int id){
        Bike b = this.bikeService.findBike(id);
        if (b == null)
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok(b);
    }

    @PatchMapping("/fleet/{id}/status")
    public ResponseEntity<Map<String,String>> changeStatus(@PathVariable("id") int id, @RequestParam String status){
        Bike b = this.bikeService.findBike(id);
        if(status.equals("AVAILABLE") && b.getBatteryLevel() < 10){
            Map<String,String> map = new HashMap<>();
            map.put("message","Safety Protocol: Battery too low for deployment.");
            return  new ResponseEntity<>(map,HttpStatus.FORBIDDEN);
        }
        else{
            this.bikeService.updateStatus(id, status);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @DeleteMapping("/fleet/{id}")
    public ResponseEntity<Map<String,String>> deleteBike(@PathVariable int id){
        try
        {
            bikeService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

}
