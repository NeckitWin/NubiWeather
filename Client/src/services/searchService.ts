const url = 'http://localhost:5000/api/v1/search/'

const fetchSearchWeatherData = async (city: string) => {
    try {
        const response = await fetch(`${url}${city}`);

        return await response.json();
    } catch (err) {
        const {message} = err as Error;
        throw new Error(`Serwer nie odpowiada,pobierz i odpal go https://github.com/NeckitWin/NubiWeather Szczegóły: ${message}`);
    }
}

export {fetchSearchWeatherData};