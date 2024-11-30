import {useEffect, useState} from "react";

interface Location {
    latitude: number | null;
    longitude: number | null;
}

const useLocation = () => {
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
                    setError(err.message);
                }
            );
            console.log();
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };

    return {
        location,
        error
    }
}

export default useLocation;