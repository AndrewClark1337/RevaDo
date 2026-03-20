#!/bin/bash

API_URL="http://localhost:8083/inventory"

echo "Seeding warehouse data to $API_URL..."

# Data: ProductName|Category|Shelf|Stock|Capacity
items=(
  "Wireless Mouse|Electronics|A-102|15|100"
  "Mechanical Keyboard|Electronics|A-102|5|50"
  "Office Chair|Furniture|B-201|45|50"
  "Desk Lamp|Electronics|A-105|80|100"
  "USB-C Cable|Electronics|A-102|200|250"
  "Standing Desk|Furniture|B-205|2|10"
  "Water Bottle|Lifestyle|C-301|50|50"
  "Yoga Mat|Fitness|C-305|12|40"
  "Monitor Stand|Electronics|A-105|3|20"
  "Coffee Mug|Lifestyle|C-301|25|100"
)

for item_info in "${items[@]}"; do
  TIMESTAMP=$(date +%s000) 
  IFS="|" read -r name cat shelf stock cap <<< "$item_info"

  echo "Seeding $name..."

  curl --location "$API_URL" \
    --header 'Content-Type: application/json' \
    --data "{
        \"productName\": \"$name\",
        \"category\": \"$cat\",
        \"shelfLocation\": \"$shelf\",
        \"stockLevel\": $stock,
        \"capacity\": $cap,
        \"lastUpdated\": $TIMESTAMP
    }"
  
  echo -e "\n"
done

echo "Seeding complete!"