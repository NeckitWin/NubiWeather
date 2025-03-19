import { WeatherData } from '../types/weatherData';
import { SearchData } from '../types/searchData';

const BASE_URL = 'http://localhost:5000/api/v1';
const REPO_URL = 'https://github.com/NeckitWin/NubiWeather';


const fetchData = async <T>(endpoint: string): Promise<T> => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        return await response.json();
    } catch (err) {
        const { message } = err as Error;
        throw new Error(`Serwer nie odpowiada, pobierz i odpal go ${REPO_URL}. Szczegóły: ${message}`);
    }
};

export const fetchWeatherData = (city: string): Promise<WeatherData> =>
    fetchData<WeatherData>(`/weather/${city}`);

export const fetchSearchWeatherData = (city: string): Promise<SearchData[]> =>
    fetchData<SearchData[]>(`/search/${city}`);