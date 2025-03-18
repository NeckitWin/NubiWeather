import dotenv from 'dotenv';
dotenv.config();
const BASE_URL = 'https://api.weatherapi.com/v1';
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const lang = 'pl';
const days = '5';

export const fetchWeatherData = async (city: string) => {
  if (!WEATHER_API_KEY) {
    throw new Error('Nie znaleziono klucza API w pliku Server/.env');
  }
  const response = await fetch(`${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&lang=${lang}&days=${days}`);
  const data = await response.json();

  if (!response.ok) {
    switch (data.error.code) {
      case 1002:
        throw new Error('Nie znaleziono klucza API w pliku Server/.env');
      case 1003:
        throw new Error('Nie podano nazwy miasta');
      case 1005:
        throw new Error('Nieprawidłowy URL zapytania API');
      case 1006:
        throw new Error('Nie znaleziono miasta');
      case 2006:
        throw new Error('Podany klucz API jest nieprawidłowy');
      case 2007:
        throw new Error('Klucz API przekroczył limit połączeń na miesiąc');
      case 2008:
        throw new Error('Klucz API został wyłączony');
      case 2009:
        throw new Error('Klucz API nie ma dostępu do zasobu');
      case 9000:
        throw new Error('Nieprawidłowe dane JSON w zapytaniu');
      case 9001:
        throw new Error('Zbyt wiele lokalizacji w jednym zapytaniu');
      case 9999:
        throw new Error('Wewnętrzny błąd aplikacji.');
      default:
        throw new Error('Błąd podczas pobierania danych pogodowych.');
    }
  }

  return data;
};
