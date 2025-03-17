import WeatherCard from "./WeatherCard.tsx";
import {WeatherData} from "../types/weatherData";

interface MainProps {
    weatherData: WeatherData;
}

const Main = ({weatherData}: MainProps) => {
    if (!weatherData?.location) {
        return (
            <main className="bg-background md:rounded-2xl shadow-md shadow-primary mt-6 p-6">
                <h1 className='text-center text-black/90 text-4xl font-bold'>Nie znaleziono miasta</h1>
            </main>
        )
    }

    const {location, current} = weatherData;
    const {name: cityName, country: countryName, localtime} = location;
    const {temp_c, feelslike_c, wind_kph, humidity, condition} = current;

    return (
        <main className="bg-background md:rounded-2xl shadow-md shadow-primary mt-6 p-6">
            <h1 className='text-center text-black/90 text-4xl font-bold'>{cityName} | {countryName}</h1>
            <h3 className='text-center text-primary text-lg mt-2 font-bold'>{localtime}</h3>
            <h2 className='text-center text-primary text-2xl mt-4 font-bold'>{condition.text}</h2>

            <section>
                <h3 className='text-5xl text-center font-bold mt-4 text-black/90'>
                    <span>{temp_c}</span>°C
                </h3>

                <div className='mt-10 flex flex-row justify-center gap-8 text-primary'>
                    <div>Odczuwalna: {feelslike_c}°C</div>
                    <div>Prędkość wiatru {wind_kph} km/h</div>
                    <div>Wilgotność {humidity}%</div>
                </div>
            </section>

            <section>
                <h3 className='md:text-3xl text-2xl text-center font-bold mt-8 md:mt-12 mb-8 text-primary'>Prognoza
                    pogody na 5 dni</h3>
                <ul className='flex justify-center flex-wrap gap-10'>
                    {weatherData.forecast.forecastday.map((day) => (
                        <WeatherCard day={day} key={day.date}/>
                    ))}
                </ul>
            </section>

        </main>
    );
}

export default Main;
