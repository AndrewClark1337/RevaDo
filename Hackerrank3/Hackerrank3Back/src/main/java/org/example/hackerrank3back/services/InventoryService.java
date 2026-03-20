package org.example.hackerrank3back.services;

import org.example.hackerrank3back.objects.Inventory;
import org.example.hackerrank3back.objects.InventoryDTO;
import org.example.hackerrank3back.repositories.InventoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {
    private final InventoryRepository inventoryRepository;
    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    public void createInventory(InventoryDTO inv){
        Inventory inventory = new Inventory();
        inventory.setCapacity(inv.getCapacity());
        inventory.setCategory(inv.getCategory());
        inventory.setLastUpdated(inv.getLastUpdated());
        inventory.setShelfLocation(inv.getShelfLocation());
        inventory.setProductName(inv.getProductName());
        inventory.setStockLevel(inv.getStockLevel());
        inventoryRepository.saveAndFlush(inventory);

    }
    public Inventory findInventory(int id){
        return inventoryRepository.findById(id);
    }
    public List<Inventory> searchInventory(String name, String category){
        if(category == null && name == null){
            return inventoryRepository.findAll();
        }
        else if(category == null){
            return inventoryRepository.findByProductName(name);
        }
        else if (name == null){
            return inventoryRepository.findByCategory(category);
        }
        else{
            return inventoryRepository.findByProductNameAndCategory(name, category);
        }
    }
    public List<String> getCategories(){
        return inventoryRepository.findAllCategories();
    }
}
