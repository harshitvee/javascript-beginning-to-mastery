// object destructuring


const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

Suppose we want to declare a variable with the same name as that of the keys(or the variable name could be different from the key name) of the object and its value also same as that of the value in the object
One way:

  const bandName = band.bandName;
  const famousSong= "stairway to heaven";
          OR
  const var1= band.bandName;
 
Another way by Object Destructuring:

  const {object_key_names seperated by commas} = object name;
  Eg: const {bandName, famousSong)= band;
  ==> this will make variable of the same name as that of the keys in the object.
  
  To make the variable of your own choice but the values should come from object only
      const {object_key_names:vaiable_name_of_your_own_choice seperated by commas} = object name;
      Eg: const {bandName: var1, famousSong: var2)= band;
  ==> now var1 will have the value of bandNamem and var2 will have the value of famousSong

let { bandName, famousSong, ...restProps } = band;
    ==> all the other key-value pair of the object band will store in restProps

console.log(bandName); ==> error beacause no variable of this name exist.

console.log(restProps); 
  o/p ==> { year : 1968, anotherSong : "kashmir" }
