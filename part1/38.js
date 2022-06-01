// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

There are 2 ways to iterate objects:
//  1. using for-in loop
//  2. using Object.keys 

//  1. using for-in loop ===> using for-in loop for object will store the 'keys' of the object in the variable 'key' or whatever var is used.
    // for(let key in person){
        // console.log(key); ===> this will print all the keys.
        // }

    // for(let key in person){
        // console.log(`${key} : ${person[key]}`);
        //  console.log(key," : " ,person[key]);
        // }

//  2. using Object.keys    
    // console.log(typeof (Object.keys(person)));
    // const val = Array.isArray((Object.keys(person)));
    // console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }
