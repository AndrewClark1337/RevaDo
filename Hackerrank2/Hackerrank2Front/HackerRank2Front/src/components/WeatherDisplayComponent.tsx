import React from 'react'
import type { Weather } from '../App'

function WeatherDisplayComponent({weather}: {weather: Weather}) {
    const [detailed, setDetailed] = React.useState(false);
    function checkTemp(temp: number): string {
        if (temp >= 15) {
            return 'warm-theme';
        } else {
            return 'cold-theme';
        }
    }
    if (!detailed)
        return (
        <div className={checkTemp(weather.temperature)}>
            <h2>{weather.cityName}: {weather.temperature}°C</h2>
            <button onClick={() => setDetailed(true)}>Show Details</button>

        </div>
    )
    else{
        return (
            <div className={checkTemp(weather.temperature)}>
                <h2>{weather.cityName}: {weather.temperature}°C</h2>
                <p>Region: {weather.region}</p>
                <p>Latitude: {weather.latitude}</p>
                <p>Longitude: {weather.longitude}</p>
                <p>Timestamp: {weather.timestamp}</p>
                <button onClick={() => setDetailed(false)}>Hide Details</button>
            </div>
        )
    }
    
}

export default WeatherDisplayComponent
