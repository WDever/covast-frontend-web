export const numberWithCommas = (num: string | number): string => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
