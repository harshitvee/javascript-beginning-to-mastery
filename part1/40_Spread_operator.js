spread operator in ARRAYS

  // const array1 = [1, 2, 3];
  // const array2 = [5, 6, 7];

  // // const newArray = [...array1, ...array2, 89, 69];
  // const newArray = [..."123456789"]; // using  spread operator on a string will make each single character as an element of the array.
  // const newArray = [...123456789]; // but this won't work on non- string the same way as that of a string because integers are not iterable.
  // console.log(newArray);

spread operator in objects

***an object can only have one same named key. In case of more than one same named key, the one declared in the last will override.
 
  // const obj1 = {
  //   key1: "value1",
  //   key2: "value2",
  // };
  // const obj2 = {
  //   key1: "valueUnique", 
  //   key3: "value3",
  //   key4: "value4",
  // };

// const newObject = { ...obj2, ...obj1, key69: "value69" };

const newObject = {..."abc"}; 
    o/p ==> spread operator used in string in an object  will make the index as the key(as the string is iterable hence it will become as if the elemnt of an array)
        ==> {0 : "a", 1 : "b", 2 : "c"}

// const newObject = { ...["item1", "item2"] }; 
    o/p ==> same way as above- index starting from 0, 1, 2....
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);
