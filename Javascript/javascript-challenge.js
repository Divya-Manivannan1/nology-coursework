// 1.Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
function isNumberPositive(number){
    let isPositive=true;
    if(number<0){
        isPositive=false;
    }
    return(isPositive);
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));

// 2.Write a function that takes a number of days and converts it into an age.
const convertDaysToAge = (amountOfDays) => {return(amountOfDays/365)};

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));