//For run the file use this command node /workspaces/FrontEndCraft/JavaScript/Notes/boolean.js
//Boolean In JavaScript
/**In JavaScript, a Boolean is a primitive data type that can hold one of two values: true or false. Booleans are often used in conditional statements to control the flow of a program.

Boolean Values
true: Represents a truthy value.
false: Represents a falsy value. */

let isAdult = true;
let isStudent = false;

console.log(typeof(isAdult));  //boolean
console.log(typeof(isStudent)); //boolean

console.log(6>7);  //false
console.log(10<19);  //true

let a = 5;
let b = 10;
console.log(a > b); // false
console.log(a < b); // true

//Uses of booleans in JAvaScript 
//1. Booleans are frequently used in if, else if, and else statements:
//2. Booleans are used in loop conditions (e.g., while, for, do...while) to control the repetition of code blocks.
//3. Booleans are crucial in performing logical operations with && (AND), || (OR), and ! (NOT). These operations are used to combine or invert Boolean expressions.
//4. Functions often return Boolean values to indicate success, failure, or the presence of a specific condition.
//5. Booleans are used in form validation to check whether the input meets certain criteria before submission.
//6. In more advanced scenarios, Boolean values can be used to determine if an error has occurred, allowing the program to respond accordingly.