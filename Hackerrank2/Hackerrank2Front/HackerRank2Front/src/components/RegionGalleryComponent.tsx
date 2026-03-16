import React, { useEffect } from 'react'
import type { Weather } from '../App';

import WeatherDisplayComponent from './WeatherDisplayComponent';

function RegionGalleryComponent() {

    const [weatherData, setWeatherData] = React.useState<Weather[] | null>(null);
    async function fetchWeather(cityName?: string, region?: string) {
        let params = new URLSearchParams();
        var response; 
       
        if (!cityName && region) {
            params.set('region', region);
            response = await fetch(`http://localhost:8083/weather?${params.toString()}`, {
                method: 'GET',
            });
           
        }
        else if (cityName && !region) {
            params.set('cityName', cityName);
            response = await fetch(`http://localhost:8083/weather?${params.toString()}`, {
                method: 'GET',
            });
        }
        else if (cityName && region) {
            params.set('cityName', cityName);
            params.set('region', region);
            response = await fetch(`http://localhost:8083/weather?${params.toString()}`, {
                method: 'GET',
            });
        }
        else {
            response = await fetch(`http://localhost:8083/weather`, {
                method: 'GET',
            });
        }
        const result = await response.json();
        setWeatherData(result);
    }
    useEffect(() => {
        fetchWeather();
    }, [])
    if (weatherData)
    {
        return (
            <div>
                <h1>Region Gallery</h1>
                <button onClick={() => fetchWeather()}>Fetch Weather Data</button>
                
                    <ul>
                    {weatherData.map((weather: Weather, index: number) => (
                        <li key={index}>
                            <WeatherDisplayComponent weather={weather} />
                        </li>
                        
                    ))}
                    </ul>
                
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>Region Gallery</h1>
                <button onClick={() => fetchWeather()}>Fetch Weather Data</button>
                <p>Can't find weather data. Please click the button to fetch.</p>
            </div>
        )
    }
  
}

export default RegionGalleryComponent

