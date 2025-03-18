import {WeatherData} from "../types/weatherData";
import WeatherInfo from "./Weather/WeatherInfo.tsx";
import Loading from "./Loading.tsx";

interface MainProps {
    weatherData: WeatherData | null;
    loading: boolean;
    error: string;
}

const Main = ({weatherData, loading, error}: MainProps) => {
    return (
        <main className="bg-background md:rounded-2xl shadow-md shadow-primary mt-6 p-6">
            {loading ? (
                <Loading />
            ) : error || !weatherData ? (
                <h1 className='text-center text-red-900 text-xl md:text-4xl py-32 font-bold break-words'>{error}</h1>
            ) : (
                <WeatherInfo weatherData={weatherData}/>
            )}
        </main>
    );
}

export default Main;
