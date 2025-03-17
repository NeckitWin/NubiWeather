import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useEffect, useState} from "react";
import {fetchWeatherData} from "./services/weatherService.ts";

const App = ()=> {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [city, setCity] = useState<string>('Gliwice');

    useEffect(() => {
        if (city) {
            const getWeatherData = async () => {
                try {
                    const data = await fetchWeatherData(city);
                    setWeatherData(data);
                } catch (err) {
                    console.error(err);
                }
            }

            getWeatherData();
        }

    }, [city])
  return (
    <div className='container mx-auto max-w-5xl rounded-md'>
        <Navbar setCity={setCity} />
        <Main weatherData={weatherData} />
        <Footer />
    </div>
  );
}

export default App;
