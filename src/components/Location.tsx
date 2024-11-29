import {useEffect, useState} from "react";

interface Location {
    latitude: number | null;
    longitude: number | null;
}

export const Location = () => {

    const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setError(null);
                },
                (err) => {
                    console.log(err.message);
                    // setError(err.message);
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };

    return (
        <>
            {location.latitude && location.longitude ? (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
            ) : (
                <p>Location not available.</p>
            )}
            {error && <p>Error: {error}</p>}
        </>
    )
}