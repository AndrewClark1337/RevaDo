import React from 'react'
import type { Reading } from '../App'

function MeterCard({reading}: {reading: Reading}) {
    function surge(){
        if(reading.usageKwh! > 500){
            if(reading.sectorName?.includes('Industrial')){
                return 'critical-surge';
            }
            else if(reading.sectorName?.includes('Residential')){
                return 'warning-surge';
            }
        }
        return '';
    }
    if(reading.status=="Active"){
    return (
        <div className={`meter-card active ${surge()}`}>
        <h3>{reading.sectorName} - {reading.meterId}</h3>
        <p>Usage: {reading.usageKwh} kWh</p>
        <p>Voltage: {reading.voltage} V</p>
        <p>Status: {reading.status}</p>
        <p>Timestamp: {reading.timestamp}</p>
        </div>
    )
    }
    else if (reading.status=="Maintenance"){
        return(
            <div className="meter-card maintenance">
                <h3>{reading.sectorName} - {reading.meterId}</h3>
                <p> Service Required! </p>
            </div>
        )
    }
}
export default MeterCard
