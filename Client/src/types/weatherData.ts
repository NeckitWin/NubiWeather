export type WeatherData = {
    location: {
        name: string;
        region: string;
        country: string;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    current: {
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        wind_kph: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        feelslike_f: number;
    };
    forecast: {
        forecastday: Array<{
            date: string;
            day: {
                maxtemp_c: number;
                mintemp_c: number;
                condition: {
                    text: string;
                    icon: string;
                };
            };
        }>;
    }
};