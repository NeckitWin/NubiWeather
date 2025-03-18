const formatDate = (timestap: number, locale: string = 'pl-PL'): string => {
    const date = new Date(timestap * 1000);
    return new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
};

const formatDayOfWeek = (dateString: string, locale: string = 'pl-PL'): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
};

export { formatDate, formatDayOfWeek };