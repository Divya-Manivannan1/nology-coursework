function checkIfNumber(){

}


function checkIfPositiveOrNegative(event){
    num=event.target.value
    if(num>0){
        alert("It is a positive number")
    }
    else if(num==0){
        alert("It is zero")
    }
    else{
        alert("It is a negative number")
    }
}