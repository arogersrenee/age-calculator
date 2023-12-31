// Get form inputs
let birthYear = document.querySelector("#year-input"); // user input convert to number! 
let birthDay = document.querySelector("#day-input"); // user input convert to number!
let birthMonth = document.querySelector("#month-input"); // user input convert to number!

const inputs =  document.querySelectorAll("input");

// Get form button
const form = document.querySelector("form");

// Mobile error message (inner HTML)
const mobileErrMsg = document.querySelector("#error-msg-mobile");

// Get output placeholders
const outputYear = document.querySelector("#years-output");
const outputDay = document.querySelector("#days-output");
const outputMonth = document.querySelector("#months-output");

// validation error messages if:
//   - Any field is empty when the form is submitted
function checkEmptyInput() {
    if(birthYear.value.trim() == ""){
        showError(birthYear, "This field is required");
    }

    if(birthDay.value.trim() == ""){
        showError(birthDay, "This field is required");
    }

    if(birthMonth.value.trim() == ""){
        showError(birthMonth, "This field is required");
    }

    if(birthYear.value.trim() == "" || birthDay.value.trim() == "" || birthMonth.value.trim() == ""){
        console.log("Missing Input");
        return false;
    }

    console.log("Has value in all inputs");
    return true;
}

//   - Checks if the date is valid, considering the number of days in each month and the input year.   
function checkValidInput() {
    const today = new Date();
    const userDate = new Date(birthYear.value.trim(), 
    (birthMonth.value.trim() - 1), 
    birthDay.value.trim())
    
    // The day number is not between 1-31
    if((Number(birthDay.value.trim()) < 1 || 
    Number(birthDay.value.trim()) > 31) && birthDay.value.trim() != ""){
        showError(birthDay, "Must be a valid day");
        console.log("date greater than 31 days")
        return false;
    }

    // The day number is not between 1-30, Apr, June, Sep and Nov.
    if((Number(birthDay.value.trim()) < 1 || Number(birthDay.value.trim()) > 30) 
    && birthDay.value.trim() != ""
    && (Number(birthMonth.value.trim()) == 4 
    || Number(birthMonth.value.trim()) == 6 
    || Number(birthMonth.value.trim()) == 8 
    || Number(birthMonth.value.trim()) == 10 )){
        showError(birthDay, "Must be a valid day");
        console.log("date greater than 30 days")
        return false;
    }

    // if february, within 29 for leap days (%4, or %400 && %1000 for leap centurys), or 28 
    if((Number(birthDay.value.trim()) < 1 || Number(birthDay.value.trim()) > 29) 
    && birthDay.value.trim() != "" 
    && Number(birthMonth.value.trim()) == 2
    && (Number(birthYear.value.trim()) % 4 == 0 || (Number(birthYear.value.trim()) % 400 == 0 && Number(birthYear.value.trim()) % 1000 == 0))){
        showError(birthDay, "Must be a valid day");
        console.log("date greater than 29 days");
        return false;
    } else if((Number(birthDay.value.trim()) < 1 || Number(birthDay.value.trim()) > 28) 
    && birthDay.value.trim() != "" 
    && Number(birthMonth.value.trim()) == 2
    && Number(birthYear.value.trim()) % 4 != 0){
        showError(birthDay, "Must be a valid day");
        console.log("date greater than 28 days")
        return false;
    }

    // The month number is not between 1-12
    if((Number(birthMonth.value.trim()) < 1 || 
    Number(birthMonth.value.trim()) > 12) && birthMonth.value.trim() != ""){
        showError(birthMonth, "Must be a valid month");
        console.log("not valid month")
        return false;
    }

    // The date is not in the future
    if(userDate > today && birthYear.value.trim() != ""){
        showError(birthYear, "Must be in the past");
        console.log("in the past")
        return false;
    }
    
    console.log("all values are valid")
    return true;
}

function showError(element, msg)
{
    element.previousElementSibling.classList.add("error");
    element.nextElementSibling.classList.add("error");
    element.nextElementSibling.classList.remove("hidden");
    element.nextElementSibling.textContent = msg;
    element.style.border = "1px solid var(--clr-error)";
}

function removeError(element)
{
    element.previousElementSibling.classList.remove("error");
    element.nextElementSibling.classList.remove("error");
    element.nextElementSibling.classList.add("hidden");
    element.nextElementSibling.textContent = "";
    element.style.border = "1px solid var(--clr-accent)";
}

// addeventlistenter for submit

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmptyInput();
    checkValidInput();
    if(checkEmptyInput() && checkValidInput()){
        const userInfo = getBirthdateInfo();
        outputResults(userInfo.age.years, userInfo.age.months, userInfo.age.days);
    } else outputResults("--", "--", "--")
})

// funtions
function getBirthdateInfo() {
    const birthdate = new Date(birthYear.value.trim(), birthMonth.value.trim() - 1, birthDay.value.trim()); // YYYY, MM, DD format
    const age = calculateAge(birthdate);

    console.log(birthdate)

    return {
        birthdate: {
            year: birthdate.getFullYear(),
            month: birthdate.getMonth() + 1,
            day: birthdate.getDate()
        },
        age: age
    };
}

function calculateAge(date) {
    // const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const difference = currentDate - date;

    const years = Math.floor(difference / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((difference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((difference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    console.log(years, months, days);
    return { years, months, days };
}

// Output userInfo to innerText placeholders
function outputResults(years, months, days) {
    outputYear.textContent = years;
    outputDay.textContent = days;
    outputMonth.textContent = months;
}



// future refactor: https://youtu.be/iyngFd6f8ko?list=PLpc_YvcwbxaTAg0cGvqcDVmALsipqtJDY