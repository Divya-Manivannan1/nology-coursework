function calculateDaysUntilWeekend(){
    const today=day.value.toUpperCase()
    let outputValue
    switch(today){
        case "MONDAY":
            outputValue = "Only 4 more days until the weekend"
            break
        case "TUESDAY":
            outputValue = "Only 3 more days until the weekend"
            break   
        case "WEDNESDAY":
            outputValue = "Only 2 more days until the weekend"
        break
        case "THURSDAY":
            outputValue = "Only 1 more days until the weekend"
            break 
        case "FRIDAY":
            outputValue = "Your weekend starts tomorrow!!"
            break
        case "SATURDAY" || "SUNDAY":
            outputValue = "It's the weekend"
            break
        default:
            outputValue = "Sorry we didn't recognize that day"
        break
    }
    daysLeft.value=outputValue
}