import useLocation from "../hooks/useLocation.ts";
import "../assets/css/Location.css"

export const Location = () => {
    const {location, error} = useLocation();
    return (
        <div className="location-message">
            {error && <p>{error}</p>}
            {location.latitude && location.longitude &&
                <p>Latitude: {location.latitude} -- Longitude: {location.longitude}</p>
            }
        </div>
    )
}