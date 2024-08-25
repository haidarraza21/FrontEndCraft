/** Function in JavaScript
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it). */


/**JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {} */

/** Function Declaration
A function can be declared using the function keyword, followed by a name, parameters, and the function body. */

function greet(name){
    console.log(`Hello ${name}!`)
}
greet("Haidar");
greet("Farid");
greet("Quaiser");
greet("Ejaj");
greet("Pintu");

/**Function Expression
Functions can also be defined as expressions and assigned to a variable. These are called function expressions. */

function salam(name){
    return (`Assalamualaikum ${name} Bhai`)
}
console.log(salam('Haidar'));
console.log(salam('Farid'));
console.log(salam('Quaiser'));
console.log(salam('Ejaj'));
console.log(salam('Arshad'));
console.log(salam('Amzad'));

/**Arrow Functions (ES6)
Arrow functions provide a shorter syntax for writing function expressions. They do not have their own this value and are often used for concise functions. */

const welcome = (name) => {
    return (`Mr. ${name} welcome to the my code!`)
}
console.log(welcome('Haidar'));
console.log(welcome('Farid'));
console.log(welcome('Quaiser'));
console.log(welcome('Tahmeed'));
console.log(welcome('Ejaj'));

const surName = (name) => `Mr. ${name} !`
console.log(surName('Haidar'));
console.log(surName('Farid'));
console.log(surName('Quaiser'));
console.log(surName('Tahmeed'));
console.log(surName('Ejaj'));


//Calculate the product of two numbers, and return the result:
let result;
function mul(num1, num2){
    return num1 * num2 ;
}
console.log(mul(12,13));
console.log(mul(4,5));

/**Key Points
Functions: Reusable blocks of code that can take inputs and return outputs.
Scopes: Variables inside functions are locally scoped.
Arrow Functions: Shorter syntax for function expressions, introduced in ES6.
Closures: Functions that retain access to their scope even when executed outside their scope.
Understanding functions is crucial for mastering JavaScript, as they are central to structuring and organizing code.
node /workspaces/FrontEndCraft/JavaScript/Notes/function.js */