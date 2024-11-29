import "../assets/css/WeekFooter.css"
import "../assets/css/Common.css"

export const WeekFooter = () => {
    return (
        <footer>
            <h2>Week summary</h2>
            <div className="footer-container">
                <div className="summary-flex-table">
                    <div className="summary-temp-rows">
                        <div className="des mobile-des">Temperature</div>
                        <div className="summary-temp-box">
                            <div className="grid-row temp-val">
                                <div className="des desktop-des">Max Temp</div>
                                <div className="des mobile-des">Max:</div>
                                <div className="value">8°C</div>
                            </div>
                            <div className="grid-row temp-val">
                                <div className="des desktop-des">Min Temp</div>
                                <div className="des mobile-des">Min:</div>
                                <div className="value">-1°C</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-row summary-grid-row">
                        <div className="des">Avg pressure</div>
                        <div className="value">1024 hPa</div>
                    </div>
                    <div className="grid-row summary-grid-row">
                        <div className="des">Avg time of sun exposure</div>
                        <div className="value">3h</div>
                    </div>
                </div>
                <div className="week-des-box">
                    <div className="des">Description</div>
                    <div>
                        <p>[des]</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}