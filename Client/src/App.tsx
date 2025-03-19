import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useEffect, useState} from "react";
import {fetchWeatherData} from "./services/apiService.ts";
import {WeatherData} from "./types/weatherData.ts";

const App = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>('');
    const [city, setCity] = useState<string>(
        localStorage.getItem("nubiweather-city") || "Gliwice"
    );

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (weatherData) {
            setLoading(false);
        }
    }, [weatherData]);

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const data = await fetchWeatherData(city);
                if (data.error) {
                    setError(data.error);
                    return;
                }
                setWeatherData(data);
                setError('');
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        getWeatherData();

        if (localStorage.getItem("nubiweather-city") !== city) {
            localStorage.setItem("nubiweather-city", city);
        }
    }, [city])
    return (
        <div className='container mx-auto max-w-5xl rounded-md'>
            <Navbar setLoading={setLoading} setCity={setCity}/>
            <Main error={error} loading={loading} weatherData={weatherData}/>
            <Footer/>
        </div>
    );
}

export default App;
