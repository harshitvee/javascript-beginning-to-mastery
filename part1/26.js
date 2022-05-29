// intro to arrays 
// reference type 
// all the reference types are known as OBJECTS in JS.
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj); // o/p is 'OBJECT'
console.log(Array.isArray(fruits)); // this is to know is this is an array because there are many elements which are OBJECTS. o/p will be TRUE.
console.log(Array.isArray(obj));


// array indexing 
