let coaches=["dave","sam", "andy"];
const pets = ["cat", "dog", "parrot"];

coaches[2]="mary";
coaches[3]="andy";

pets[2] = "hamster";
pets[4]= "parrot";
console.log(coaches);
console.log(coaches[1]);

console.log(pets);

for(let index=0; index<coaches.length; index++){
    console.log(`Coach number ${index+1} is ${coaches[index]}`);
}