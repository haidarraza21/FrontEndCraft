/*In JavaScript, an anonymous function is a function without a name. It is often used in situations where a function is needed as a one-time, throwaway action, such as when passing functions as arguments to other functions or assigning them to variables.

Anonymous functions can be declared in multiple ways, but they always lack an identifier (function name).

Examples:
1. Anonymous Function Assigned to a Variable:*/

let add = function (a, b){
    return (a+b);
}

console.log(add(3, 5));
//In this example, an anonymous function is assigned to the variable add, and it can then be called using add().

/** Anonymous Function as a Callback:
Anonymous functions are often used as callback functions, passed to other functions as arguments. This is common with array methods like forEach, map, and filter. */

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number * 2);
});
// Outputs: 2, 4, 6, 8, 10
//Here, the anonymous function is passed as a callback to the forEach method, which runs the function for each element in the array.

/**Key Characteristics of Anonymous Functions:
No name: They don’t have a function name, unlike named functions.
Usage in callbacks: Frequently used as arguments in higher-order functions.
Assigned to variables: Often stored in variables for reuse.
Arrow functions: Provide a shorter syntax for writing anonymous functions. */