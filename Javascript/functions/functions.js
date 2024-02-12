//named function

function calculatePerimeterOfRectangle(length, breadth){
    let perimeter = 2*(length+breadth);
    return perimeter;
}

//function expression

const calculatePerimeter= function(length, breadth){
    let perimeter = 2*(length+breadth);
    return perimeter;
}

//arrow function

const calculateRectanglePerimeter = (length, breadth) => {
    return 2*(length+breadth);
}

console.log(calculateRectanglePerimeter(2,1));

const calculateAreaOfCircle = (radius) => {
    console.log(Math.PI*radius*radius);
}

calculateAreaOfCircle(2);

const calculateCircumferenceOfCircle = (radius) => {
    console.log(2*Math.PI*radius);
}

calculateCircumferenceOfCircle(2);