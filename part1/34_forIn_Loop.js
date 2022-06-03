// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){   ===> for-in loop stores the index in the index variable, or any other variable which is used. The index
                                 will be stored one by one per iteration and this index can be used to retrieve the elements and print them.
        console.log(index) ===> will print indexes only.
        console.log(fruits[index]; ===> will print the elements of the fruits
        fruits2.push(fruits); to push the numbers i.e indexes only into fruits2 and not the elements of fruits.
        fruits2.push(fruits[index]); ===> will push the elements of fruits into fruits2
        fruits2.push(fruits[index].toUpperCase()); will first convert the elements of fruits to uppercase and then push into fruits2.
        }
console.log(fruits2);
