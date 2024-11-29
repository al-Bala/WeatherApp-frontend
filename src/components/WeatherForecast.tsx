import "../assets/css/WeatherForecast.css"
import "../assets/css/Common.css"
import {Location} from "./Location.tsx";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";

export const WeatherForecast = () => {

    const [weatherForWeek, setWeatherForWeek] = useState([
        {
            date: "26.11.2024",
            icon: "",
            dayMaxTempC: 8,
            dayMinTempC: -1,
            energyKWH: 20
        },
        {
            date: "27.11.2024",
            icon: "",
            dayMaxTempC: 10,
            dayMinTempC: 2,
            energyKWH: 23
        },
        {
            date: "28.11.2024",
            icon: "",
            dayMaxTempC: 5,
            dayMinTempC: -3,
            energyKWH: 10
        },
        {
            date: "29.11.2024",
            icon: "",
            dayMaxTempC: 8,
            dayMinTempC: -1,
            energyKWH: 20
        },
        {
            date: "30.11.2024",
            icon: "",
            dayMaxTempC: 10,
            dayMinTempC: 2,
            energyKWH: 23
        },
        {
            date: "01.12.2024",
            icon: "",
            dayMaxTempC: 5,
            dayMinTempC: -3,
            energyKWH: 10
        },
        {
            date: "02.12.2024",
            icon: "",
            dayMaxTempC: 5,
            dayMinTempC: -3,
            energyKWH: 10
        }
    ]);

    return (
        <div className="forecast-section">
            <div>
                <h1>Weather Forecast</h1>
                <Location/>
            </div>
            <div className="forecast-flex-table">
                <ul className="description-col">
                    <li className="date"><span>Date</span></li>
                    <li className="icon"><p>Icon</p></li>
                    <li><p>Max Temp</p></li>
                    <li><p>Min Temp</p></li>
                    <li className="last-element"><p>Generated energy</p></li>
                </ul>
                {weatherForWeek.map(day => (
                    <ul key={day.date} className="day-col">
                        <li className="date">
                            <span>{day.date}</span>
                        </li>
                        <li className="icon">
                            <span><FontAwesomeIcon icon={faSun}/></span>
                        </li>
                        <div className="forecast-temp">
                            <div className="des mobile-des">Temperature</div>
                            <div className="forecast-temp-box">
                                <li className="temp-val">
                                    <div className="des mobile-des">Max:</div>
                                    <span>{day.dayMaxTempC}°C</span>
                                </li>
                                <li className="temp-val">
                                    <div className="des mobile-des">Min:</div>
                                    <span>{day.dayMinTempC}°C</span>
                                </li>
                            </div>
                        </div>
                        <li className="energy">
                            <div className="des mobile-des">Generated energy</div>
                            <span>{day.energyKWH} kWh</span>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}