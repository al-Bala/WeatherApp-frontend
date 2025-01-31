import axios, {AxiosError} from "axios";
import {ForecastDay, Summary} from "../models/models.ts";
import {useState} from "react";

const axiosWeather = axios.create({
    baseURL: import.meta.env.VITE_BASE_SERVER_URL
});

export const useApi = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const getWeatherForecast = async (latitude: number | null, longitude: number | null): Promise<ForecastDay[] | undefined> => {
        try {
            const response =
                await axiosWeather.get(`/weather-forecast`, {
                    params: {latitude: latitude, longitude: longitude}
                });
            setError(null);
            return response.data;
        }
        catch (error) {
            if(error instanceof AxiosError){
                if(error.status == 400){
                    setError("400: BAD REQUEST");
                }
                if(error.status == 404){
                    setError("404: NOT FOUND");
                }
            }
        } finally {
            setLoading(false);
        }
    }

    const getWeekSummary = async (latitude: number | null, longitude: number | null): Promise<Summary | undefined> => {
        try{
            const response =
                await axiosWeather.get(`/week-summary`, {
                    params: {latitude: latitude, longitude: longitude}
                });
            setError(null);
            return response.data;
        }
        catch (error) {
            if(error instanceof AxiosError){
                if(error.status == 400){
                    setError("400: BAD REQUEST");
                }
                if(error.status == 404){
                    setError("404: NOT FOUND");
                }
            }
        }
    }

    return {
        error,
        loading,
        getWeatherForecast,
        getWeekSummary
    }
}