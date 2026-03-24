import React, { useEffect } from 'react'
import type { Reading } from '../App';
import MeterCard from './MeterCard';
import ReadingSearch from './ReadingSearch';

function MeterDisplay() {
    const [readings, setReadings] = React.useState<Reading[]>([]);
    async function getReadings(){
        const response = await fetch('http://localhost:8083/meters',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        setReadings(data);
        console.log(readings);
    }
    useEffect(() => {
        getReadings();
    }, []);
  return (
    <div className="meter-display">
        <section className="search-section">
            <ReadingSearch setReadings={setReadings} />
        </section>
        <br></br>
      {(readings.length > 0) ? (
        <section className="meter-list">
            {readings.map((reading, index) => (
                
                <MeterCard reading={reading} />
                
            ) )}

        </section>
      ): (
        <p>No readings available</p>
      )}
      
    </div>
  )
}

export default MeterDisplay
