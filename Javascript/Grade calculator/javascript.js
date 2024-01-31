function handleCalculateGrade(event){
    const grade = event.target.value.toUpperCase()
    let percentage
    if(!grade){
        return
    }
    switch (grade) {
        case "A":
            percentage="90% - 100%"
        break;
        case "B":
            percentage="85% - 90%"
        break;
        case "C":
            percentage = "70% - 85%"
        break;
        case "D":
            percentage = "60% - 70%"
        break;
        case "E":
            percentage = "40% - 60%"
        break;
        case "F":
            percentage = "0 - 40%"
        break;
        default:
            percentage = "not calculatable. Please enter a valid grade"
    }
    alert("Your percentage is " + percentage)
}