#!/bin/bash

API_URL="http://localhost:8083/fleet"

echo "Deploying Fleet..."

# Data: ID|Model|Battery|Status|Lat|Long
bikes=(
  "BIKE-001|Cruiser-V2|95|AVAILABLE|34.05|-118.24"
  "BIKE-002|Cruiser-V2|8|OUT_OF_ORDER|34.06|-118.25"
  "BIKE-003|Speedster|45|RENTED|34.04|-118.26"
  "BIKE-004|Speedster|12|AVAILABLE|34.07|-118.23"
  "BIKE-005|Cruiser-V1|60|MAINTENANCE|34.08|-118.22"
  "BIKE-006|Cruiser-V2|5|MAINTENANCE|34.09|-118.21"
)

for b in "${bikes[@]}"; do
  IFS="|" read -r id model bat stat lat long <<< "$b"

  curl --location "$API_URL" \
    --header 'Content-Type: application/json' \
    --data "{
        \"id\": \"$id\",
        \"modelType\": \"$model\",
        \"batteryLevel\": $bat,
        \"status\": \"$stat\",
        \"latitude\": $lat,
        \"longitude\": $long
    }"
  echo -e "\nDeployed $id"
done
