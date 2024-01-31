function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value
    let yearsLeft = 65 - currentAge
    if(yearsLeft>1)
        alert("You have " + yearsLeft + " years left to retire")
    else if(yearsLeft==1)
        alert("You have 1 year left to retire")
    else if(yearsLeft==0)
        alert("You will be retiring this year")
    else
        alert("You should have already retired")
}

function returnGreeting(event) {
    const greeting=event.target.value
    if(greeting=="hello")
        alert("Bonjour")
    else if(greeting=="bye")
        alert("au revoir")
    else
        alert("Greeting not reconised")
}

function minuteToSecondCalculator(event){
    const minutes = Number(event.target.value)
    if(minutes==NaN)
        alert("please enter a valid input")
    else
        alert(minutes*60 + " seconds")
}