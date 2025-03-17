import {useState} from "react";

interface NavbarProps {
    setCity: (city: string) => void;
}

const buttons = [
    {label: "Gliwice", value: "Gliwice"},
    {label: "Hamburg", value: "Hamburg"}
]

const Navbar = ({setCity}: NavbarProps) => {
    const [search, setSearch] = useState<string>('');
    const handleSearch = () => {
        setCity(search);
        setSearch('');
    }

    return (
        <header className='bg-background md:rounded-2xl shadow-md md:mt-4 shadow-black/70'>
            <nav className="flex flex-row items-center justify-around p-4 flex-wrap gap-2">
                <ul className='flex gap-4 items-center'>
                    <li><img src="svg/nubisoft.svg" alt="nubiweather" height='32' width='32'/></li>
                    {buttons.map((button, index) => (
                        <li key={index}>
                            <button className='cursor-pointer font-medium text-primary' onClick={() => setCity(button.value)}>{button.label}</button>
                        </li>
                    ))}
                </ul>
                <div className='flex flex-row gap-2.5'>
                    <input onChange={(e) => setSearch(e.target.value)} value={search}
                        className='text-sm rounded-md px-4 py-2 duration-300 border border-slate-300 hover:border-slate-400'
                        placeholder='Wyszukaj miasto'
                    />
                    <button onClick={handleSearch}
                        className='bg-blue-500 rounded-md shadow shadow-secondary duration-300 hover:-translate-y-0.5 text-white flex items-center justify-center gap-2 py-2 px-4 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             className="h-5 w-5 fill-white">
                            <path
                                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
