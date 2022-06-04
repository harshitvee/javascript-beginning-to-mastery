// block scope vs function scope 


WHAT IS A BLOCK SCOPE?
    1{
       2{
            This is one block(from 2 to 3).
            Any var declared here can be accesed here only in case of let and const because let and const are block scope. 
            B ut a variable can be accessed outside the block if declared using var becasue var is a function scope.
            let and const var will be accesse from 1 to 2 only            
        3}   
    
        4{
            This is another block(from 4 to 5)            
        5}
    6}
    But any variable declared using var can be accesse between and beyond 1 and 6, but not beyond 6.



// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();
