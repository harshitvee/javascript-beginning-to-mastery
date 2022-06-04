// lexical scope 

** if a const var is declared with the same name but in different function then it wont give error for changing the value.
But if in the same function then it would give error. Eg. Line 7, line 13.


const myVar = "value1";

function myApp(){
     

    function myFunc(){
        const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();


NOTE: Whenever a function has to print the value of some variable, it will first search and print the value defined in itself(i.e the function).
If the value is not found then the function will search the value of that variable in its lexical environment. 
Lexical environment is the environment in which that particular funtion is defined.
It will go searching up and up till the global scope.
