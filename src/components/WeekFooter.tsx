import "../assets/css/WeekFooter.css"
import "../assets/css/Common.css"
import {useEffect, useState} from "react";
import {useApi} from "../api/useApi.ts";
import {Summary} from "../models/models.ts";
import useLocation from "../hooks/useLocation.ts";

export const WeekFooter = () => {
    const {location} = useLocation();
    const {getWeekSummary, error} = useApi();
    const [weekSummary, setWeekSummary] = useState<Summary>();

    useEffect(() => {
        getWeekSummary(location.latitude, location.longitude)
            .then(summary => {
                if (summary) {
                    setWeekSummary(summary)
                }
            });
    }, [location.latitude, location.longitude]);

    return (
        <footer>
            <h2>Week summary</h2>
            {error ?
                <p className="summary-error">{error}</p>
                :
                <div className="footer-container">
                    <div className="summary-flex-table">
                        <div className="summary-temp-rows">
                            <div className="des mobile-des">Temperature</div>
                            <div className="summary-temp-box">
                                <div className="grid-row temp-val">
                                    <div className="des desktop-des">Max Temp</div>
                                    <div className="des mobile-des">Max:</div>
                                    <div className="value">{weekSummary?.maxWeekTempC}°C</div>
                                </div>
                                <div className="grid-row temp-val">
                                    <div className="des desktop-des">Min Temp</div>
                                    <div className="des mobile-des">Min:</div>
                                    <div className="value">{weekSummary?.minWeekTempC}°C</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-row summary-grid-row">
                            <div className="des">Avg pressure</div>
                            <div className="value">{weekSummary?.avgPressure} hPa</div>
                        </div>
                        <div className="grid-row summary-grid-row">
                            <div className="des">Avg sun time exposure</div>
                            <div className="value">{weekSummary?.avgSunTimeExposure} s</div>
                        </div>
                    </div>
                    <div className="week-des-box">
                        <div className="des">Description</div>
                        <div>
                            {weekSummary?.description != null &&
                                Object.entries(weekSummary?.description).map(([key, value]) => (
                                    <p key={key}>
                                        {value ? "with" : "without"} {key}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            }
        </footer>
    );
}