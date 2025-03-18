import {FormEvent} from "react";
import {useSearchWeather} from "../hooks/useSearchWeather.ts";

interface NavbarProps {
    setCity: (city: string) => void;
    setLoading: (loading: boolean) => void;
}

const buttons = [
    {label: "Gliwice", value: "Gliwice"},
    {label: "Hamburg", value: "Hamburg"}
]

const Navbar = ({setCity, setLoading}: NavbarProps) => {
    const { search, setSearch, searchResults, searchVisible, setSearchVisible } = useSearchWeather();
    const currentCity = localStorage.getItem("nubiweather-city");

    const buttonHandler = (city: string) => {
        if (city === currentCity) return;
        setCity(city);
        setLoading(true);
    };

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        if (search === currentCity || !search.trim()) return;
        setCity(search);
        setSearch('');
        setSearchVisible(false);
        setLoading(true);
    };

    return (
        <header className='bg-background md:rounded-2xl shadow-md md:mt-4 shadow-black/70'>
            <nav className="flex flex-row items-center justify-around p-4 flex-wrap gap-2">
                <ul className='flex gap-4 items-center'>
                    <li><img src="svg/nubisoft.svg" alt="nubiweather" height='32' width='32'/></li>
                    {buttons.map((button, index) => (
                        <li key={index}>
                            <button className='cursor-pointer font-medium text-primary'
                                    onClick={() => buttonHandler(button.value)}>{button.label}</button>
                        </li>
                    ))}
                </ul>
                <form onSubmit={(event) => submitHandler(event)} className='flex flex-row gap-2.5 relative'>
                    <input onChange={(e) => setSearch(e.target.value)} value={search}
                           className='text-sm bg-white/50 rounded-md px-4 py-2 duration-300 border border-slate-300 hover:border-slate-400'
                           placeholder='Wyszukaj miasto'
                    />
                    <button type='submit'
                            className='bg-blue-500 rounded-md shadow shadow-secondary duration-300 hover:bg-blue-600 hover:-translate-y-0.5 text-white flex items-center justify-center gap-2 py-2 px-4 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-search">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                        </svg>
                    </button>

                    <ul className={`absolute max-h-32 overflow-y-auto top-12 left-0 w-full bg-white/95 border border-slate-300 rounded-md shadow-md duration-150 ${searchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 invisible pointer-events-none scale-0'}`}>
                        {
                            searchResults.map((result, index) => (
                                <li key={index} className='p-2.5 hover:bg-slate-300 cursor-pointer'
                                    onClick={() => {
                                        setCity(result.name);
                                        setLoading(true);
                                        setSearch('');
                                    }}>{result.name}</li>
                            ))
                        }
                    </ul>
                </form>
            </nav>
        </header>
    );
}

export default Navbar;
