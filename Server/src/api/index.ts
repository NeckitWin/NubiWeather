import { Router } from 'express';
import weatherRouter from './v1/weatherRouter';

const api = Router();

api.use('/weather', weatherRouter);

export default api;
