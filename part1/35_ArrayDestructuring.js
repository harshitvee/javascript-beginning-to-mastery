// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];

// One way to assign the variables the values of the items in the myArray:
  // let myvar1 = myArray[0];
  // let myvar2 = myArray[1];
  // console.log("value of myvar1", myvar1);
  // console.log("value of myvar2", myvar2);

// Other way of doing this by array destructuting:
// let [var1, var2] = myArray; ------> this will assign var1= 'value1' and var2 = ' value2'.

// to skip an item to be assigned:
  // let [var1, , var2] = myArray; ---> this will assign var1= 'value1' and var2 = ' value3'. value2 will be skipped.

// Way to create a new array with the elements fof myArray:
  // let newArray[]= myArray.slice(2); 

  // let [myvar1, myvar2, ...myNewArray] = myArray;
  // console.log("value of myvar1", myvar1);
  // console.log("value of myvar2", myvar2);
  // console.log(myNewArray);
