// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

There are 2 ways to iterate objects:
//  1. using for-in loop
//  2. using Object.keys 

//  1. using for-in loop ===> using for-in loop for object will store the 'keys' of the object in the loop variable just like the for-in loop stores indexes in case of iterating and array.
    // for(let key in person){
        // console.log(key); ===> this will print all the keys.
        // }

    // To print all the values of all the keys----> by using square brackets:
        // for(let abc in person){
            // console.log(person[abc]); 
         }   ===> [] gives the value { '.' will also give the value but here 
                     in this case we will have to use dot against a particular key to print the 
                     value of that key Eg: person.name will print the value of name key inside the object person.
                    Stepwise evaluation of this square bracket:
                                      person[abc] => {abc has all the keys given by the for-in loop}
                                                  => person["name"] => "gaurav"
                         
    // for(let key in person){
        // console.log(`${key} : ${person[key]}`);
        //  console.log(key," : " ,person[key]);
        // }

//  2. using Object.keys    
    // console.log(Object.keys(person)); ===> this will print all the keys in the form of an array.
    // console.log(typeof (Object.keys(person))); ===> this will give output as OBJECT as is given for an array.
    // const val = Array.isArray((Object.keys(person))); ===> this will print TRUE which  means it is an array.
    // console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }
