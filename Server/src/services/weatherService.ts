import dotenv from 'dotenv';
dotenv.config();
const BASE_URL = 'https://api.weatherapi.com/v1';
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const lang = 'pl';
const days = '5';

export const fetchWeatherData = async (city: string) => {
  if (!WEATHER_API_KEY) {
    throw new Error('Brak klucza API dla WeatherAPI');
  }

  const response = await fetch(`${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&lang=${lang}&days=${days}`);
  if (!response.ok) {
    throw new Error('Błąd pobierania danych pogodowych');
  }
  return response.json();
};
