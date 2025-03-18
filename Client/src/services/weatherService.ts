const url = 'http://localhost:5000/api/v1/weather/'

const fetchWeatherData = async (city: string) => {
    try {
        const response = await fetch(`${url}${city}`);

        return await response.json();
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export {fetchWeatherData};