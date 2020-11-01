export const increaseWeek = (date) => {
    const newDate = { ...date };
    let numberOfDays = 30;
    if (date.mth === '01' || date.mth === '03' || date.mth === '05'
        || date.mth === '07' || date.mth === '08' || date.mth === '10'
        || date.mth === '12') {
        numberOfDays = 31;
    }
    // Februari
    if (date.mth === '02') { numberOfDays = 29; }

    if (date.day <= numberOfDays - 7) {
        newDate.day = (Number(date.day) + 7).toString();
        return newDate;
    }

    newDate.day = 7 - (numberOfDays - date.day);
    if (date.mth === '12') {
        newDate.mth = '01';
    } else {
        newDate.mth = (Number(date.mth) + 1).toString();
    }
    return newDate;
};

export const isBetween = (dateToCheck, minDate, maxDate) => {
    const dayToCheck = Number(dateToCheck.substr(0, 2));
    const monthToCheck = dateToCheck.substr(3, 2);
    if (monthToCheck === minDate.mth && minDate.mth === maxDate.mth) {
        if (dayToCheck >= Number(minDate.day) && dayToCheck <= Number(maxDate.day)) {
            return true;
        }
    }
    if (monthToCheck === minDate.mth && minDate.mth !== maxDate.mth) {
        if (dayToCheck >= Number(minDate.day)) {
            return true;
        }
    }
    if (monthToCheck === maxDate.mth && minDate.mth !== maxDate.mth) {
        if (dayToCheck <= Number(maxDate.day)) {
            return true;
        }
    }
    return false;
};

export const orderDate = (date1, date2) => {
    const day1 = Number(date1.substr(0, 2));
    const month1 = Number(date1.substr(3, 2));
    const day2 = Number(date2.substr(0, 2));
    const month2 = Number(date2.substr(3, 2));

    if (month2 < month1) { return 1; }
    if (month2 > month1) { return -1; }
    if (day2 < day1) { return 1; }
    if (day2 > day1) { return -1; }

    return -1;
};

// export {
//     increaseWeek,
//     isBetween,
//     orderDate,
// };
