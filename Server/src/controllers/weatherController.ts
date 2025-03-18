import { Request, Response } from 'express';
import { fetchSearchWeatherData, fetchWeatherData } from '../services/weatherService';

const getWeather = async (req: Request, res: Response) => {
  const { city } = req.params;

  try {
    const data = await fetchWeatherData(city);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const searchWeather = async (req: Request, res: Response) => {
  const { city } = req.params;

  try {
    const data = await fetchSearchWeatherData(city);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { getWeather, searchWeather };