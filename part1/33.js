// for of loop in array //

const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for(let fruit of fruits){ --------->>> the loop will iterate for as many times as the no. of elements in the fruitS array, and copy those elements in fruit array.
//     fruits2.push(fruit.toUpperCase());--------> console.log(fruit.toUpperCase()) will make the elements in CAPITAL LETTERS and then PRINT it;
// and fruit2.push will push the capital letter elements in the fruit2 array.
// }
// console.log(fruits2);

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
