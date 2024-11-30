import axios, {AxiosError} from "axios";
import {ForecastDay, Summary} from "../models/models.ts";
import {useState} from "react";

const BASE_URL = 'http://localhost:8080';

const axiosWeather = axios.create({
    baseURL: BASE_URL
});

export const useApi = () => {
    const [error, setError] = useState<string | null>(null);

    const getWeatherForecast = async (latitude: number | null, longitude: number | null): Promise<ForecastDay[] | undefined> => {
        try {
            const response =
                await axiosWeather.get(`/weather-forecast/${latitude}/${longitude}`);
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

    const getWeekSummary = async (latitude: number | null, longitude: number | null): Promise<Summary | undefined> => {
        try{
            const response =
                await axiosWeather.get(`/week-summary/${latitude}/${longitude}`)
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
        getWeatherForecast,
        getWeekSummary
    }
}