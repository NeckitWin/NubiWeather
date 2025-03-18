import {FormEvent, useState} from "react";

interface NavbarProps {
    setCity: (city: string) => void;
    setLoading: (loading: boolean) => void;
}

const buttons = [
    {label: "Gliwice", value: "Gliwice"},
    {label: "Hamburg", value: "Hamburg"}
]

const Navbar = ({setCity, setLoading}: NavbarProps) => {
    const [search, setSearch] = useState<string>('');
    const currentCity = localStorage.getItem("nubiweather-city");

    const buttonHandler = (city: string) => {
        if (city === currentCity) return;
        setCity(city);
        setLoading(true);
    }

    const handleSearch = (event: FormEvent) => {
        if (event) event.preventDefault();
        if (search === currentCity) return;
        if (!search.trim()) return;
        setCity(search);
        setSearch('');
        setLoading(true);
    }

    return (
        <header className='bg-background md:rounded-2xl shadow-md md:mt-4 shadow-black/70'>
            <nav className="flex flex-row items-center justify-around p-4 flex-wrap gap-2">
                <ul className='flex gap-4 items-center'>
                    <li><img src="svg/nubisoft.svg" alt="nubiweather" height='32' width='32'/></li>
                    {buttons.map((button, index) => (
                        <li key={index}>
                            <button className='cursor-pointer font-medium text-primary' onClick={() => buttonHandler(button.value)}>{button.label}</button>
                        </li>
                    ))}
                </ul>
                <form onSubmit={(event)=>handleSearch(event)} className='flex flex-row gap-2.5'>
                    <input onChange={(e) => setSearch(e.target.value)} value={search}
                        className='text-sm rounded-md px-4 py-2 duration-300 border border-slate-300 hover:border-slate-400'
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
                </form>
            </nav>
        </header>
    );
}

export default Navbar;
