import { useState, useEffect, useCallback } from "react";
import { fetchWeatherData } from "../services/apiService";
import { WeatherData } from "../types/weatherData";

export const useWeatherData = (initialCity: string) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>("");
    const [city, setCity] = useState<string>(initialCity);
    const [loading, setLoading] = useState<boolean>(true);

    const getWeatherData = useCallback(async (cityName: string) => {
        setLoading(true);
        try {
            const data = await fetchWeatherData(cityName);
            if (data.error) {
                setError(data.error);
                setWeatherData(null);
            } else {
                setWeatherData(data);
                setError("");
            }
        } catch (err) {
            setError((err as Error).message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getWeatherData(city);
        localStorage.setItem("nubiweather-city", city);
    }, [city, getWeatherData]);

    return { weatherData, error, setCity, loading, setLoading };
};