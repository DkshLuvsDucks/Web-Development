import "./Searchbox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from "react";

export default function Searchbox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const weatherCodes = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        56: "Light freezing drizzle",
        57: "Dense freezing drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Light freezing rain",
        67: "Heavy freezing rain",
        71: "Slight snow fall",
        73: "Moderate snow fall",
        75: "Heavy snow fall",
        77: "Snow grains",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        85: "Slight snow showers",
        86: "Heavy snow showers",
        95: "Thunderstorm",
        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with heavy hail"
    };

    const getWeatherInfo = async () => {
        try {
        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );
        
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found");
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
        );
        const data = await weatherResponse.json();

        const avgDailyTemp = (arrMax, arrMin) => {
            const total = arrMax.reduce((acc, val, i) => acc + (val + arrMin[i]) / 2, 0);
            return (total / arrMax.length).toFixed(1);
        };

        const weatherCardData = {
            city: name,
            country: country,
            latitude,
            longitude,
            temperature: data.current_weather.temperature,   // °C
            windSpeed: data.current_weather.windspeed,       // km/h
            windDirection: data.current_weather.winddirection, // °
            weather: weatherCodes[data.current_weather.weathercode] || "Unknown",
            dailyAvgTemp: avgDailyTemp(data.daily.temperature_2m_max, data.daily.temperature_2m_min)
        };


        console.log("Card-ready weather data:", weatherCardData);
        return weatherCardData;

        } catch (err) {
            throw err;
        }
    };

    let handleInputChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);

        try {
            const result = await getWeatherInfo();
            updateInfo(result);
            setCity("");
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };
    return (
        <div className='searchbox'>
            <form onSubmit={handleSubmit}>
                <Box display="flex" gap={1} alignItems="stretch">
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ height: '56px' }} // matches default TextField height
                >
                    Search
                </Button>
                </Box>
            </form>
            {error && <p style={{color: "red"}}>No such place exists!</p>}
        </div>
    );
}