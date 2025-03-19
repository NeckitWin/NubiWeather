import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useWeatherData} from "./hooks/useWeatherData.ts";

const App = () => {
    const { weatherData, error, setLoading, setCity, loading } = useWeatherData(
        localStorage.getItem("nubiweather-city") || "Gliwice"
    )

    return (
        <div className='container mx-auto max-w-5xl rounded-md'>
            <Navbar setLoading={setLoading} setCity={setCity}/>
            <Main error={error} loading={loading} weatherData={weatherData}/>
            <Footer/>
        </div>
    );
}

export default App;
