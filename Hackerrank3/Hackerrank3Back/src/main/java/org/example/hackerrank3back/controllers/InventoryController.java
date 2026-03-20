package org.example.hackerrank3back.controllers;

import org.example.hackerrank3back.objects.Inventory;
import org.example.hackerrank3back.objects.InventoryDTO;
import org.example.hackerrank3back.services.InventoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class InventoryController {
    private final InventoryService inventoryService;
    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }
    @PostMapping("/inventory")
    public ResponseEntity<Map<String,String>> newInventory(@RequestBody InventoryDTO inv){
        try {
            System.out.println(inv.toString());
            this.inventoryService.createInventory(inv);
            return ResponseEntity.ok().build();
        }
        catch(Exception e){
            System.err.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }
    @GetMapping("/inventory/{id}")
    public ResponseEntity<Inventory> getInventory(@PathVariable Integer id){
        Inventory i =inventoryService.findInventory(id);
        if(i==null){
            return ResponseEntity.notFound().build();
        }
        else
        {
            return ResponseEntity.ok().body(i);
        }
    }
    @GetMapping("/inventory")
    public ResponseEntity<List<Inventory>> getInventories (@RequestParam (required = false) String name, @RequestParam(required = false) String category){
        List<Inventory> iList= inventoryService.searchInventory(name,category);
        if(iList==null){
            return ResponseEntity.notFound().build();
        }
        else
        {
            return ResponseEntity.ok().body(iList);
        }

    }
    @GetMapping("/category")
    public ResponseEntity<List<String>> getCategories(){
        return ResponseEntity.ok(inventoryService.getCategories());
    }
    @DeleteMapping("/inventory/{id}")
    @PutMapping("/inventory/{id}")
    @PatchMapping("/inventory/{id}")
    public ResponseEntity<Map<String,String>> notAllowed( @PathVariable Integer id){
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).build();
    }

}
