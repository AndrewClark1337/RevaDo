#!/bin/bash

API_URL="http://localhost:8083/meters"

echo "Initializing Grid Data..."

# Data: MeterID|Sector|Usage|Voltage|Status
meters=(
  "MTR-1001|Residential-A|120.5|230|Active"
  "MTR-1002|Residential-A|650.2|228|Active"
  "MTR-2001|Industrial-Alpha|1200.0|440|Active"
  "MTR-2002|Industrial-Alpha|0.0|0|Maintenance"
  "MTR-3001|Commercial-B|340.8|230|Active"
  "MTR-1003|Residential-A|15.2|230|Active"
  "MTR-4001|Hospital-Main|890.5|230|Active"
  "MTR-2003|Industrial-Alpha|1150.0|445|Active"
)

for m in "${meters[@]}"; do
  TIMESTAMP=$(date +%s000)
  IFS="|" read -r mid sector usage volt status <<< "$m"

  curl --location "$API_URL" \
    --header 'Content-Type: application/json' \
    --data "{
        \"meterId\": \"$mid\",
        \"sectorName\": \"$sector\",
        \"usageKwh\": $usage,
        \"voltage\": $volt,
        \"status\": \"$status\",
        \"timestamp\": $TIMESTAMP
    }"
  echo -e "\nRegistered $mid"
done