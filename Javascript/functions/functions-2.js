function getDescription(amountOfChildren, partnerName, location, jobTitle){
    const description = `I am currently a ${jobTitle} living in ${location}, married to ${partnerName} with ${amountOfChildren} kids.`;
    console.log(description);
}

getDescription(4, "sam", "london", "software engineer"); 

function calculateSupply(currentAge, amountPerDay){
    const maxAge = 90;
    let amountOfSnickersPerLifetime=(maxAge-currentAge)*amountPerDay*365;
    amountOfSnickersPerLifetime=Math.ceil(amountOfSnickersPerLifetime);
    console.log(amountOfSnickersPerLifetime);
}

calculateSupply(89, 1.5)

const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`The temperature is ${fahrenheit}F`)
}

convertCelsiusToFahrenheit(0);
convertCelsiusToFahrenheit(100);

function calculateDogYears(humanYears){
    let dogYears=0;
    if(humanYears<=1){
        dogYears=humanYears*15;
    }else if(humanYears<2){
        dogYears = 15 + 9 * (humanYears-1);
    }
    else{
        dogYears = 24 + 5 * (humanYears-2);
    }
    console.log(`Your ${humanYears} old dog is actually ${dogYears} dog years old`)
}

calculateDogYears(1);
calculateDogYears(0.5);
calculateDogYears(1.5);
calculateDogYears(2);
calculateDogYears(2.5);

