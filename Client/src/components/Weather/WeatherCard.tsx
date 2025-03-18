import {formatDayOfWeek} from "../../utils/dates.ts";

interface WeatherDay {
    date: string;
    day: {
        mintemp_c: number;
        maxtemp_c: number;
        condition: {
            text: string;
            icon: string;
        }
    }
}

interface WeatherCardProps {
    day: WeatherDay;
}

const WeatherCard = ({day}: WeatherCardProps) => {
    const { condition, mintemp_c, maxtemp_c } = day.day;
    const dayOfWeek = formatDayOfWeek(day.date);

    return (
        <li className='flex flex-col justify-center items-center gap-3 rounded-lg shadow shadow-primary w-32 bg-white/40 p-4 duration-200 hover:-translate-y-0.5'>
            <h5 className='font-bold text-primary'>{dayOfWeek}</h5>
            <img src={condition.icon} alt={condition.text}/>
            <span className='text-primary font-medium'>{Math.round(mintemp_c)}° / {Math.round(maxtemp_c)}°</span>
        </li>
    );
}

export default WeatherCard;
