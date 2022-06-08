// use const for creating array --> we can perform array methods like push/pop even if the array is declared CONST. This is because array elements are stored 
// in the HEAP. Error would occur when there is a change in the address or the stack where the address of the stack is stored.


// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]
// fruits = ["apple", "pineapple"]; //  ---> this is not valid in CONST, but valid in LET.
// fruits.push("banana"); ----> this is VALID in const and let both.
// console.log(fruits);
