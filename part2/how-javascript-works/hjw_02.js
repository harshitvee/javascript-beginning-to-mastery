// hoisting
console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);