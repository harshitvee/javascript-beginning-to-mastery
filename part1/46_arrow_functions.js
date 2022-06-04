// arrow functions

this is an expression function:
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

this is an arrow function of the same expression function: 
const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}

singHappyBirthday();

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2,3,4);
console.log(ans);

// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = number => {
    return number % 2 === 0;
}                           // when there is just one function parameter, then we can put it without paranthesis.

const isEven = (number) => number % 2 === 0; // in case when there is just one line of code in the body of a funtion then we can remove the curly braces, and we can even remove the 'return'.


console.log(isEven(4));

const firstChar = anyString => anyString[0];

console.log(firstChar("harshit"));


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
