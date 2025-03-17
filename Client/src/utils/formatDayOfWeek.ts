export const formatDayOfWeek = (dateString: string, locale: string = 'pl-PL'): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
};
