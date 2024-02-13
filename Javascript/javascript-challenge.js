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

// 3.Write a function that takes three numbers and returns the largest of the three numbers.
const getLargestNumber = function(num1, num2, num3) {
    let largestNumber = num1;
    if(num2>num1){
        if(num3>num2){
            largestNumber=num3;
        }
        else{
            largestNumber=num2;
        }
    }else if(num3>num1){
        largestNumber=num3
    }
    return(largestNumber);
}

console.log(getLargestNumber(1,2,3));
console.log(getLargestNumber(2,1,4));
console.log(getLargestNumber(6,2,3));

// 4.Write a function that takes an array of names and returns the last name from the array of names.
const getLastName = (names) => {return(names[names.length-1])};
let listOfNames=["Charlie","Rob","Andy"];
console.log(getLastName(listOfNames));
console.log(getLastName(["sam", "Max"]));