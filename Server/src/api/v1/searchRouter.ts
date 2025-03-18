import express from 'express';
import { searchWeather } from '../../controllers/weatherController';

const router = express.Router();

router.get('/:city', searchWeather);

export default router;
