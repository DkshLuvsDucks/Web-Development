import { useState } from "react";
import Infobox from "./Infobox";
import Searchbox from "./Searchbox";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Tokyo",
        country: "Japan",
        temparature: 3.8,
        dailyAvgTemp: 2.9,
        windSpeed: 12.9,
        windDirection: 341,
        latitude: 35.6895,
        longitude: 139.69171,
        weather: "mainly clear"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        <>
            <div style={{textAlign: "center"}}>
                <h1>Weather App</h1>
                <p>~ by Duzz</p>
            </div>
            <hr/>
            <Searchbox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </>
    );
}