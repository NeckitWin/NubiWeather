import { useEffect, useState } from "react";
import { fetchSearchWeatherData } from "../services/searchService.ts";
import { SearchData } from "../types/searchData.ts";

export const useSearchWeather = () => {
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchData[]>([]);
    const [searchVisible, setSearchVisible] = useState<boolean>(false);

    useEffect(() => {
        if (search.length < 2) {
            setSearchVisible(false);
            setSearchResults([]);
            return;
        }

        const fetchData = async () => {
            try {
                const data = await fetchSearchWeatherData(search);
                if (data.length <= 0) {
                    setSearchVisible(false);
                    return;
                }
                setSearchResults(data || []);
                setSearchVisible(true);
            } catch (error) {
                console.error("Błąd podczas pobierania danych:", error);
            }
        };

        const timeoutId = setTimeout(fetchData, 500);
        return () => clearTimeout(timeoutId);
    }, [search]);

    return { search, setSearch, searchResults, searchVisible, setSearchVisible };
};