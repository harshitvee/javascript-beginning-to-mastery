// functions inside function 

function app(){                                 // parent function
    const myFunc = () =>{                       // child function 
        console.log("hello from myFunc")
    }
    
    const addTwo = (num1, num2) =>{             // child function
        return num1 + num2;
    }

    const mul = (num1, num2) => num1* num2;     // child function

    console.log("inside app");                  // this is to be performed by the main function call.
    
    myFunc();                                   // child function can be called only inside a parent function, and this would get activated only when the main fucntion is called.
    console.log(addTwo(2,3));                   // same
    console.log(mul(2,3));                      // same
}
app();                                          // only main function can be called from outside
