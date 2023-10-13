// Get form inputs
let birthYear = Number("1990"); // user input convert to number! 
let birthDay = Number("16"); // user input convert to number!
let birthMonth = Number("05"); // user input convert to number!

// Get form & submit button

// Get 

function getBirthdateInfo() {
    const birthdate = new Date(birthYear, birthMonth - 1, birthDay); // YYYY, MM, DD format
    const age = calculateAge(birthdate);

    return {
        birthdate: {
            year: birthYear,
            month: birthMonth,
            day: birthDay
        },
        age: age
    };
}

function calculateAge(birthdate) {
    // const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const difference = currentDate - birthdate;

    const years = Math.floor(difference / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((difference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((difference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    return { years, months, days };
}

const userInfo = getBirthdateInfo();

console.log(userInfo.birthdate.year, userInfo.birthdate.month, userInfo.birthdate.day);
console.log(userInfo.age.years, userInfo.age.months, userInfo.age.days);

// Output userInfo to innerText placeholders