export const formatDate = (timestap: number, locale: string = 'pl-PL'): string => {
    const date = new Date(timestap * 1000);
    return new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
};
