import WeatherCard from "./WeatherCard.tsx";
import {WeatherData} from "../types/weatherData";
import {formatDate} from "../utils/dates.ts";

interface MainProps {
    weatherData: WeatherData | null;
    loading: boolean;
    error: string;
}

const Main = ({weatherData, loading, error}: MainProps) => {
    if (loading) {
        return (
            <main
                className="bg-background h-96 md:rounded-2xl flex items-center justify-center shadow-md shadow-primary mt-6 p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="animate-spin">
                    <path d="M12 2v4"/>
                    <path d="m16.2 7.8 2.9-2.9"/>
                    <path d="M18 12h4"/>
                    <path d="m16.2 16.2 2.9 2.9"/>
                    <path d="M12 18v4"/>
                    <path d="m4.9 19.1 2.9-2.9"/>
                    <path d="M2 12h4"/>
                    <path d="m4.9 4.9 2.9 2.9"/>
                </svg>
            </main>
        )
    }

    if (error) {
        return (
            <main
                className="bg-background h-96 md:rounded-2xl flex items-center justify-center shadow-md shadow-primary mt-6 p-6">
                <h1 className='text-center text-black/90 text-4xl font-bold'>{error}</h1>
            </main>
        )
    }

    if (!weatherData?.location) {
        return (
            <main
                className="bg-background h-96 md:rounded-2xl flex items-center justify-center shadow-md shadow-primary mt-6 p-6">
                <h1 className='text-center text-black/90 text-4xl font-bold'>Nie znaleziono miasta</h1>
            </main>
        )
    }

    const {location, current} = weatherData;
    const {name: cityName, country: countryName, localtime_epoch} = location;
    const {temp_c, feelslike_c, wind_kph, humidity, condition} = current;
    const now = formatDate(localtime_epoch);

    const weatherDetails = [
        {
            icon: "icon/temperature.png",
            alt: "feels like",
            label: `Odczuwalna ${feelslike_c}°C`
        },
        {
            icon: "icon/windy.png",
            alt: "wind speed",
            label: `Prędkość wiatru ${wind_kph} km/h`
        },
        {
            icon: "icon/humidity.png",
            alt: "humidity",
            label: `Wilgotność ${humidity}%`
        }
    ];

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
                    {weatherDetails.map((detail, index) => (
                        <div key={index} className='flex flex-col items-center gap-2'>
                            <img src={detail.icon} alt={detail.alt}/>
                            <span>{detail.label}</span>
                        </div>
                    ))}
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
