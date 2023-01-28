// while loop in array 
const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
// let i = 0;

// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);
let i = 0;
while(i<fruits.length){
    
    console.log(fruits[i]);
    fruits2.push(fruits[i]);
    i++;
}
console.log("fruits" , fruits);
console.log("fruits2" , fruits2);