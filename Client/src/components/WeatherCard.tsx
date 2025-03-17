const WeatherCard = () => {
    return (
        <li className='flex flex-col justify-center items-center gap-4 rounded-lg shadow shadow-primary bg-white/40 p-4 duration-200 hover:-translate-y-0.5'>
            <h5 className='font-medium text-primary'>Dzień tygodnia</h5>
            <img src="icon/sun.png" alt="sun"/>
            <span className='text-primary'>-2°/10°</span>
        </li>
    );
}

export default WeatherCard;
