import WeatherCard from "./WeatherCard.tsx";

const Main = () => {
    return (
        <main className="bg-background rounded-2xl shadow-md shadow-primary mt-6 p-6">
            <h1 className='text-center text-black/90 text-4xl font-bold'>Miasto</h1>

            <h2 className='text-center text-primary text-2xl mt-4 font-bold'>Data</h2>

            <section>
                <h3 className='text-5xl text-center font-bold mt-4 text-black/90'>
                    <span>0</span>°
                </h3>

                <div className='mt-10 flex flex-row justify-center gap-8 text-primary'>
                    <div>Prędkość wiatra</div>
                    <div>Wilgotność</div>
                </div>
            </section>

            <section>
                <h3 className='text-3xl text-center font-bold mt-6 text-primary'>5 dni pogody</h3>
                <div>
                    <WeatherCard/>
                </div>
            </section>

        </main>
    );
}

export default Main;
