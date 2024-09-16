/**In JavaScript, arrow functions were introduced in ES6 (ECMAScript 2015) as a more concise syntax for writing function expressions. They are always anonymous and provide a simpler way to write functions, especially for callbacks or simple operations. In addition to their syntactic simplicity, arrow functions also behave differently with respect to the this keyword, making them useful in certain scenarios.


Examples:
1. Arrow Function with Multiple Parameters:
 */

let sum = (a, b) =>  (a+b);
console.log(sum(3,5));

//When the function has only a single line, it can be simplified further by removing the return keyword and curly braces.

/** Arrow Function with a Single Parameter:
When there's only one parameter, you can omit the parentheses. */

let square = num => (num*num);
console.log(square(5)); 

/**Arrow Function with No Parameters:
If there are no parameters, you need to use an empty pair of parentheses. */

let sayHello = () => console.log('Hello');
console.log(sayHello());

/**Summary of Arrow Function Features:
Concise syntax: Shorter and easier to write.
No this or arguments binding: Inherits this from the surrounding context.
Cannot be used as constructors: Not suitable for creating objects with new.
Useful for callbacks: Ideal for passing functions to other functions (e.g., map, filter, event listeners).
Arrow functions are most beneficial when writing short, simple functions, especially in callbacks, or when you need to maintain the context of this. */