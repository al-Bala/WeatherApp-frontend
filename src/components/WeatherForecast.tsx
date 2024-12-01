import "../assets/css/WeatherForecast.css"
import "../assets/css/Common.css"
import {Location} from "./Location.tsx";
import {useEffect, useState} from "react";
import {ForecastDay} from "../models/models.ts";
import {useApi} from "../api/useApi.ts";
import useLocation from "../hooks/useLocation.ts";
import {DynamicIcon} from "./DynamicIcon.tsx";

export const WeatherForecast = () => {
    const {location} = useLocation();
    const {getWeatherForecast, error, loading} = useApi();
    const [weatherForWeek, setWeatherForWeek] = useState<ForecastDay[] >([]);

    useEffect(() => {
        getWeatherForecast(location.latitude, location.longitude)
            .then(forecast => {
                if(forecast){
                    setWeatherForWeek(forecast)
                }
            });
    }, [location.latitude, location.longitude]);

    return (
        <div className="forecast-section">
            <div>
                <h1>Weather Forecast</h1>
                <Location/>
                {error && <p>{error}</p>}
            </div>
            {loading && <p className="loading">Loading...</p>}
            <div className="forecast-flex-table">
                {weatherForWeek.length != 0 &&
                    <ul className="description-col">
                        <li className="date"><span>Date</span></li>
                        <li className="icon"><p>Icon</p></li>
                        <li><p>Max Temp</p></li>
                        <li><p>Min Temp</p></li>
                        <li className="last-element"><p>Generated energy</p></li>
                    </ul>
                }
                {weatherForWeek.map(day => (
                    <ul key={day.date} className="day-col">
                        <li className="date">
                            <span>{day.date}</span>
                        </li>
                        <li className="icon">
                            <span><DynamicIcon code={day.code}/></span>
                        </li>
                        <div className="forecast-temp">
                            <div className="des mobile-des">Temperature</div>
                            <div className="forecast-temp-box">
                                <li className="temp-val">
                                    <div className="des mobile-des">Max:</div>
                                    <span>{day.maxDayTempC}°C</span>
                                </li>
                                <li className="temp-val">
                                    <div className="des mobile-des">Min:</div>
                                    <span>{day.minDayTempC}°C</span>
                                </li>
                            </div>
                        </div>
                        <li className="energy">
                            <div className="des mobile-des">Generated energy</div>
                            <span>{day.generatedPVEnergyKWH} kWh</span>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}