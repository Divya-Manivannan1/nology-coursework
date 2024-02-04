function checkIfPositiveOrNegative(event){
    const num=Number(event.target.value)
    alert(num)
    if(num != NaN){
        if(num>0){
            alert("It is a positive number")
        }
        else if(num<0){
            alert("It is a negative number")
        }
        else{
            alert("You have entered zero")
        }
    }else{
        alert("Please enter a valid number")
    }
}

function checkForGreatestNumber(event){
    const num1 = number1.value
    const num2 = number2.value
    const num3 = number3.value
    let gNum = num1
    if(num2>gNum){
        if(num3 > num2){
            gNum = num3
        }else{
            gNum = num2
        }
    }else{
        if(num3 > gNum){
            gNum = num3
        }
    }

    greatestNumber.value=gNum
}
