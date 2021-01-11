export function dateOrIsoStrToMMDDYYYYStr(date) {
    if (date instanceof Date) {
        const month = date.getMonth();
        const day = date.getDay();
        const year = date.getYear();
        return month + '/' + day + '/' + year;
    } else if (typeof date === 'string') {
        const month = date.substr(5, 2);
        const day = date.substr(8, 2);
        const year = date.substr(0, 4);
        return month + '/' + day + '/' + year;
    } else {
        throw new Error("Only Dates and strings are allowed");
    }
}