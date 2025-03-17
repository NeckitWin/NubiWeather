import WeatherCard from "./WeatherCard.tsx";
import {WeatherData} from "../types/weatherData";
import {formatDate} from "../utils/formatDate.ts";

interface MainProps {
    weatherData: WeatherData | null;
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
    const {name: cityName, country: countryName, localtime_epoch} = location;
    const {temp_c, feelslike_c, wind_kph, humidity, condition} = current;
    const now = formatDate(localtime_epoch);

    return (
        <main className="bg-background md:rounded-2xl shadow-md shadow-primary mt-6 p-6">
            <h1 className='text-center text-black/90 text-4xl font-bold'>{cityName} | {countryName}</h1>
            <h3 className='text-center text-primary text-lg mt-2 font-bold'>{now}</h3>
            <h2 className='text-center text-primary text-2xl mt-4 font-bold'>{condition.text}</h2>

            <section>
                
                <div className="relative font-bold mt-4 text-black/90 flex items-center justify-center">
                    <img src={condition.icon} alt={condition.text} className='w-24 h-24'/>
                    <span className='text-5xl'>{Math.round(temp_c)}°C</span>
                </div>


                <div className='mt-10 flex flex-row justify-center gap-12 text-primary'>
                    <div className='flex flex-col items-center gap-2'>
                        <img src="icon/temperature.png" alt="feels like"/>
                        <span>Odczuwalna {feelslike_c}°C</span>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <img src="icon/windy.png" alt="wind speed"/>
                        <span>Prędkość wiatru {wind_kph} km/h</span>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <img src="icon/humidity.png" alt="humidity"/>
                        <span>Wilgotność {humidity}%</span>
                    </div>
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
