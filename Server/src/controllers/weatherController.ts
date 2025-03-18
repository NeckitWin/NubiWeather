import { Request, Response } from 'express';
import { fetchWeatherData } from '../services/weatherService';

export const getWeather = async (req: Request, res: Response) => {
  const { city } = req.params;

  try {
    const data = await fetchWeatherData(city);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};