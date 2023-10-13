// month = input - 1 for index purposes
// Sample: 33 years, 4 months and 26 days.

// Get Birthday & variables
let userBirthdate = new Date(1990, 4, 16); // insert variables for this function

// let userBirthdate = new Date(1990, 0, 15); // insert variables for this function


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

let outputYears = calcYearsAlive();

function calcYearsAlive() {
    let ageYears = ((currentYear - 1) - birthYear); 
    let ageMonths = ageYears * 12;

    // Calulate left over months, if over 12, add extra year to ageYears
    let remainingMonthsFromBirth = 12 - (birthMonth);
    let addExtraYear = Math.trunc((12 - (birthMonth) + currentMonth) / 12); // trunc to drop the remainder
    
    console.log("user age in Months (minus current year): " + ageMonths);
    console.log("user age in years: " + ageYears);
    console.log("remaining birth months: " + remainingMonthsFromBirth);
    console.log(`add ${addExtraYear} year if 12+ months remain`);
    return ageYears + addExtraYear;
}


console.log("user total years: " + outputYears);

let outputMonths = calcMonthsRemaining();
console.log("user total months: " + outputMonths);

function calcMonthsRemaining() {
    // Get months lived and return remainder 
    let monthsLived = (((currentYear - 1) - birthYear) * 12)  + (12 - birthMonth) + (currentMonth - 1);
    console.log("monthsLived: " + monthsLived);
    return monthsLived % 12;
}

// array for length of each month
const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // account for leap year
    if ((currentYear % 4 == 0) || (currentYear % 100 == 0 && currentYear % 400 == 0)){
        monthLengths[1] = 29;
    }

let daysInYear = calcDaysInYear(monthLengths);

function calcDaysInYear(array){
    let days = 0;
    for(let i = 0; i < array.length; i++){
        days += array[i];
    }
    return days
}

console.log("days in a year: " + daysInYear)

let totalDaysAlive = calcTotalDaysAlive();

function calcTotalDaysAlive() { 
    // calculate days alive (account for leap years!) -- This doen't include remainder days (( days left in the year, for year born and current year))
    let ageInDays = calCAgeInDays()
    let remainderDays = calcRemainderDays();

    function calCAgeInDays() {
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

    // (caluculate remaining days in year from birthday minus remaining days in year from current date) - 1
    function calcRemainderDays() {

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

        console.log("current remaining days in year: " + remainCurrentYearDays);
        console.log("remaining days in year after birthday: " + remainDaysFromBirthDay);

        return (remainDaysFromBirthDay - remainCurrentYearDays);
    }
    console.log("remainder days: " + remainderDays);
    return ageInDays + remainderDays
}


// let outputMonths = ((remainingMonthsFromBirth + currentMonth) % 12) + 1 // not correct, will need to account for days left ... account for zero index with +1 ... 

console.log("user age in days: " + totalDaysAlive)
