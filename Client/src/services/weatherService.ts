const BASE_URL:string = 'https://api.weatherapi.com/v1';
const WEATHER_API_KEY:string = import.meta.env.VITE_WEATHER_API_KEY;

const fetchWeatherData = async (city: string) => {
    if (!WEATHER_API_KEY) {
        throw new Error('API key is missing');
    }

    const response = await fetch(`${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=5&lang=pl`);
    const data = await response.json();
    return data;
}

export { fetchWeatherData };