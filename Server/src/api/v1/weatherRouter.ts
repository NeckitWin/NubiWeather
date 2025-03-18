import express from 'express';
import { getWeather } from '../../controllers/weatherController';

const router = express.Router();

router.get('/:city', getWeather);

export default router;
