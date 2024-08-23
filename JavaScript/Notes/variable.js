//Variable In JavaScript
/**In JavaScript, a variable is used to store data that can be referenced and manipulated throughout your code. Variables can hold different types of data, such as numbers, strings, objects, arrays, and more. */

//Example of Variables

x = 5;
y = 6;
z = x + y; //11

console.log(z)

//Declaring Variables
/**var (older syntax):

var is function-scoped or globally scoped if declared outside a function.
It allows redeclaration within the same scope.
Hoisted to the top of their scope, meaning they can be used before declaration (but with undefined). */

//Example of var variable
var name = "Haidar";
var age = 25;

console.log(`My name is ${ name} amd my age is ${age} year old`)

/**let (ES6, preferred for block-scoped variables):

let is block-scoped, meaning it only exists within the {} block in which it was declared.
Cannot be redeclared in the same scope but can be updated */
//Example of let 

let num1 = 23;
let num2 = 22;
let sum = num1 + num2;

console.log(sum);


/**const (ES6, preferred for constants):

const is also block-scoped like let.
It must be initialized during declaration and cannot be reassigned. */
//Example of const

const pi =2.3432;
const radius = 20;
const result = pi * radius * radius;


//Example of Variables 

let greeting = "Hello,";
const myName = "Haidar";
var myAge = 25;

greeting = greeting + " " + myNameame + "!";
console.log(greeting); // Outputs: Hello, Haidar!
console.log("Age: " + myAge); // Outputs: Age: 25

/**Key Points:
Use let for variables whose values may change.
Use const for variables that should remain constant.
Avoid var in modern JavaScript development due to its quirks and potential for bugs. */