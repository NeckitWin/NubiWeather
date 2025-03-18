import { Router } from 'express';
import weatherRouter from './v1/weatherRouter';
import searchRouter from './v1/searchRouter';

const api = Router();

api.use('/weather', weatherRouter);

api.use('/search', searchRouter);

export default api;
