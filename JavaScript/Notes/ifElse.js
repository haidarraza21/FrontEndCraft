/**
 if...else operator

 In JavaScript, the if...else statement is used to execute code blocks based on a condition. The basic syntax allows you to run one block of code if a condition is true, and another block if it is false.
 */

 //Basic syntax is 
//  if (condition) {
//     // Code to execute if condition is true
// } else {
//     // Code to execute if condition is false
// }

//Example

let age = 8;
let result;

if (age >= 18){  //use the graeter than equale to compare the age of voter
    result = "You are eligible to vote!"
} else{
    result = "You are not eligible to vote!"
}
console.log(result);

let num = 10;
if(num > 0){
    console.log('Positive')
}else if(num == 0){
    console.log('Zero')
} else{
    console.log('Negative')
}

let number = -11;
if(number > 0){
    if(number % 2 == 0){ //this is nested if else
        console.log(`${number} is Positive with Even Number`)
    } else{
        console.log(`${number} is Positive with Odd Number`)
    }
} else{
    console.log(`${number} is Negative Number`)
}

//For simple conditions, the ternary operator provides a shorthand syntax.
let num1 = 98;
let result1 = (num1 >0) ? "Positive" : "Negative";
console.log(result1);

/**Key Points:
Conditions: The if condition is evaluated as a boolean (true or false).
Code Execution: Only one block of code is executed based on the first true condition.
Nestable: You can nest multiple if...else statements for more complex logic.
This is a fundamental part of JavaScript programming, allowing you to control the flow of your code based on conditions.
node /workspaces/FrontEndCraft/JavaScript/Notes/ifElse.js */