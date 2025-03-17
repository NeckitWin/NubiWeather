const BASE_URL:string = 'http://api.weatherapi.com/v1';
const WEATHER_API_KEY:string = '2d66ee53d45a4316a83181203251703'; // This is a free API key

const fetchWeatherData = async (city: string) => {
    if (!WEATHER_API_KEY) {
        throw new Error('API key is missing');
    }

    const response = await fetch(`${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=5&lang=pl`);
    const data = await response.json();
    return data;
}

export { fetchWeatherData };