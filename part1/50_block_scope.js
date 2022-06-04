// block scope vs function scope 


WHAT IS A BLOCK SCOPE?
    1{
            This is one block(from 1 to 2).
            Any var declared here can be accesed here only in case of let and const because let and const are block scope. 
            B ut a variable can be accessed outside the block if declared using var becasue var is a function scope.
            let and const var will be accesse from 1 to 2 only            
    2}   
    
    3{
            This is another block(from 3 to 4)
            
    4}

    But any var declared using var can be accesse between and beyond 1 and 4.



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
