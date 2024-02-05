function diaplayPrice(event){
    const veg=event.target.value
    switch (veg) {
        case "carrot":
        case "potato":
            alert("£5 /kg")
        break;
        case "brocolli":
            alert("£6 /kg")
        break;
        case "cabbage":
            alert("£4 /kg")
        break;
        case "asparagus":
            alert("£10 /kg")
        break;
    }
}