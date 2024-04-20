
let myDate = new Date()

console.log(myDate.toString());
/// Output: Wed Dec 06 2023 19:12:58 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());
/// Output: Wed Dec 06 2023
console.log(myDate.toISOString());
/// Output: 2023-12-06T13:42:58.394Z
console.log(myDate.toJSON());
/// Output: 2023-12-06T13:42:58.394Z
console.log(myDate.toLocaleDateString());
/// Output: 6/12/2023
console.log(myDate.toTimeString());
/// Output: 19:12:58 GMT+0530 (India Standard Time)


//* Getting Date and Time Components
const now = new Date();
//@ Get the current Year
console.log(`Year: ${now.getFullYear()}`); /// Year: 2024

//@ Get the current month
console.log(`Month: ${now.getMonth()}`); /// Month: 3 note: (0-indexed, 0 for January)

//@ Get the day of the month
console.log(`Day of the month: ${now.getDate()}`); /// Day of the month: 20

//@ Get the hours 
console.log(`Hours: ${now.getHours()}`); /// Hours: 11 note:(0-23)


//@ Get the mintues 
console.log(`Minutes: ${now.getMinutes()}`); /// Minutes: 51

//@ Get the seconds 
console.log(`Seconds: ${now.getSeconds()}`); /// Seconds: 2



//* Setting the date and time components

now.setFullYear(2025);
now.setMonth(1); // January
now.setDate(15);
now.setHours(0);
now.setMinutes(0);
now.setSeconds(0);
console.log('Year: ',now); ///Year:  2025-02-14T18:30:00.097Z


//* Formatting Dates and Times:
//@ Full date and time string: 
let fullDate = now.toString()  
console.log(fullDate); /// Sat Feb 15 2025 00:00:00 GMT+0530 (India Standard Time)

//@ Date part only
let dateOnly = now.toDateString()
console.log(dateOnly); // Sat Feb 15 2025

//@ Time part only
let timeOnly = now.toTimeString()
console.log(timeOnly); /// 00:00:00 GMT+0530 (India Standard Time)

//@ Locale-specific representation 
console.log(now.toLocaleString()); /// 15/2/2025, 12:00:00 am