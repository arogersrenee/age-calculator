// month = input - 1 for index purposes
// Sample: 33 years, 4 months and 26 days.

// Formulas
// Get Birthday & variables
let userBirthdate = new Date(1990, 4, 16); // insert variables for this function

let birthYear = userBirthdate.getFullYear(); // user input convert to number! 
let birthDay = userBirthdate.getDate(); // user input convert to number!
let birthMonth = userBirthdate.getMonth() + 1; // user input convert to number!, zero based index so need to add 1

console.log("user Birthdate: " + userBirthdate);
console.log("user birth Year: " + birthYear);
console.log("user birthday: " + birthDay);
console.log("user birth month: " + birthMonth); // zero based index so need to add 1



// Get Current Year
const todayDate = new Date(); // gets current date (2023, 9 (oct), )

let currentYear = todayDate.getFullYear(); // user input convert to number! 
let currentDay = todayDate.getDate(); // user input convert to number!
let currentMonth = todayDate.getMonth() + 1; // user input convert to number!, zero based index so need to add 1

// Age in months (minus current year) + plus added months from birth
let ageMonths = (((currentYear - 1) - birthYear) * 12) + birthMonth;
let ageYears = Math.trunc(ageMonths / 12); // trunc to drop the remainder, calculate remainder and add below

// Calulate left over months, if over 12, add extra year to ageYears
let leadingBirthMonths = ageMonths % 12;
let addExtraYear = Math.trunc((leadingBirthMonths + currentMonth) / 12); // trunc to drop the remainder
let outputYears = (ageYears + addExtraYear);

console.log("user age in Months (minus current year): " + ageMonths);
console.log("user age in years: " + ageYears);
console.log("Leading birth months: " + leadingBirthMonths);
console.log(`add ${addExtraYear} year if 12+ months remain`);
console.log("user total years: " + outputYears);

// Get Days for outputYears 





// array for length of each month
const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // account for leap year
    if ((currentYear % 4 == 0) || (currentYear % 100 == 0 && currentYear % 400 == 0)){
        monthLengths[1] = 29;
    }
let daysInYear = calculateDaysInYear(monthLengths);

function calculateDaysInYear(array){
    let days = 0;
    for(let i = 0; i < array.length; i++){
        days += array[i];
    }
    return days
}

console.log("days in a year: " + daysInYear)

let totalDaysAlive = calculateTotalDaysAlive();

function calculateTotalDaysAlive() { 
    // calculate days alive (account for leap years!) -- This doen't include remainder days
    let ageInDays = calculateAgeInDays()
    let remainderDays = calculateRemainderDays();

    function calculateAgeInDays() {
        let days = 0;
        let leapDays = 0;

        for (let i = 0; i < outputYears ; i++ ){
            if (((birthYear + i) % 4 == 0) || ((birthYear + i) % 100 == 0 && (birthYear + i) % 400 == 0)){
                birthYear + i;
                days += 365;
                leapDays++;
            } else {
                birthYear + i;
                days += 365;
            }
        }
        return days + leapDays
    }

    // (caluculate remaining days from birthday minus remaining days from current date) - 1
    function calculateRemainderDays() {

        let remainCurrentYearDays = monthLengths[currentMonth - 1] - currentDay;
        let remainDaysFromBirthDay = monthLengths[birthMonth - 1] - birthDay;
        
        for (let i = currentMonth; i < monthLengths.length; i++)
        {
            remainCurrentYearDays += monthLengths[i];
        }
        
        for (let i = birthMonth; i < monthLengths.length; i++)
        {
            remainDaysFromBirthDay += monthLengths[i];
        }    

        let remainderDays = (remainDaysFromBirthDay - remainCurrentYearDays);
        console.log("current remaining days in year: " + remainCurrentYearDays);
        console.log("current remaining days in after birthday: " + remainDaysFromBirthDay);
        console.log("current remaining days in year: " + remainderDays);

        return (remainDaysFromBirthDay - remainCurrentYearDays);
    }

    return ageInDays + remainderDays
}


let outputMonths = ((leadingBirthMonths + currentMonth) % 12) + 1 // not correct, will need to account for days left ... account for zero index with +1 ... 

console.log("user age in days: " + totalDaysAlive)
