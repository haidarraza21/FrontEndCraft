/**Date in JavaScript:
JavaScript provides the Date object to handle dates and times. You can create, modify, and retrieve date and time values using various methods.

Common Date methods:
Creating a Date object: */

let now = new Date()

//Getting date values:

let year = now.getFullYear(); // current year
let month = now.getMonth(); // current month (0-indexed, so 0 = January)
let day = now.getDate(); // current day of the month
let hours = now.getHours(); // current hour
let minutes = now.getMinutes(); // current minutes
let seconds = now.getSeconds(); // current seconds


console.log(now)
console.log(year)
console.log(month)
console.log(day)
console.log(hours)
console.log(minutes)
console.log(seconds)

//Comparing dates:
let date1 = new Date('2024-09-10');
let date2 = new Date('2024-12-25');

console.log(date1 > date2); // false
console.log(date1 < date2); // true

