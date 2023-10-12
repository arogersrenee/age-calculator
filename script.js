// month = input - 1 for index purposes
// Sample: 33 years, 4 months and 26 days.

// Formulas
// Get Birthday & vaiables
let userBirthdate = new Date(1990, 4, 16); // insert variables for this function

let birthYear = userBirthdate.getFullYear(); // user input convert to number! 
let birthDay = userBirthdate.getDate(); // user input convert to number!
let birthMonth = userBirthdate.getMonth() + 1; // user input convert to number!, zero based index so need to add 1

// console.log(userBirthdate);
// console.log(birthYear);
// console.log(birthDay);
// console.log(birthMonth); // zero based index so need to add 1



// Get Current Year
const todayDate = new Date(); // gets current date (2023, 9 (oct), )

let currentYear = todayDate.getFullYear(); // user input convert to number! 
let currentDay = todayDate.getDate(); // user input convert to number!
let currentMonth = todayDate.getMonth() + 1; // user input convert to number!, zero based index so need to add 1

// Age in months (minus current year) + plus added months from birth
let ageMonths = (((currentYear - 1) - birthYear) * 12) + birthMonth;
let ageYears = Math.trunc(ageMonths / 12); // trunc to drop the remainder, calculate remainder and add below

// Calulate left over months, if over 12, add year to ageYears
let remainingMonths = ageMonths % 12;
let addMonths = Math.trunc((remainingMonths + currentMonth) / 12); // trunc to drop the remainder
let outputYears = (ageYears + addMonths);

console.log(ageMonths);
console.log(ageYears);
console.log(remainingMonths);
console.log(addMonths);
console.log(outputYears);

// Get Months 

const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// if month february [index 2], calculate leap year

let outputMonths = ((remainingMonths + currentMonth) % 12) + 1 // not correct, will need to account for days left ... account for zero index with +1 ... 
// calculate days alive (account for leap years!)
