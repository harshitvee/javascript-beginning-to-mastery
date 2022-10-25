// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 
// let k= true;
let winningNumber = 19;
// while(k){
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
    console.log("ok bye");
    // k=false;
    // break;
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}
