/**The accumulator pattern in JavaScript is a common approach used when you need to iterate through a collection (like an array) and accumulate (or aggregate) values into a single result. This could involve summing numbers, concatenating strings, collecting values in a new array, or even performing more complex operations.

Common Use Cases of Accumulator Pattern:
Summing numbers in an array.
Counting occurrences of elements.
Concatenating strings.
Creating a new array based on a transformation. */

/**Examples:
1. Summing Numbers in an Array: */

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10];
let sum = 0;

for(let number of num ){
    sum = sum + number;
}
console.log(sum);


let numbers = [1, 2, 3, 2, 3, 2, 1, 3];
let count = 0;

for (let num of numbers) {
  if (num === 2) {
    count++; // Increment count for every occurrence of 2
  }
}

console.log(count); // Outputs: 3

/** Concatenating Strings:
You can use the accumulator pattern to concatenate strings in an array. */

let words = ['Hello', 'world', 'from', 'JavaScript'];
let sentence = '';

for (let word of words) {
  sentence += word + ' '; // Accumulate words into a sentence
}

console.log(sentence.trim()); // Outputs: "Hello world from JavaScript"


/** Transforming an Array (using Accumulation to Build a New Array):
You can create a new array by accumulating transformed values into an empty array. */

let numbers1 = [1, 2, 3, 4, 5];
let squaredNumbers = [];

for (let num of numbers1) {
  squaredNumbers.push(num * num); // Accumulate squared numbers
}

console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]


/**Using reduce() Method (Built-in Accumulator Pattern):
The reduce() method is a powerful tool in JavaScript, designed for applying the accumulator pattern in a more concise and functional way. It iterates through the array and applies the accumulation logic inside the callback function. */

let numbers3 = [1, 2, 3, 4, 5];
let sum1 = numbers3.reduce((acc, num) => acc + num, 0);

console.log(sum1); // Outputs: 15


/**Steps in Accumulator Pattern:
Initialize the accumulator: This could be a number, string, object, or array, depending on what you want to accumulate.
Iterate through the collection: This could be done using for, for...of, forEach, or reduce().
Apply the operation: During each iteration, update the accumulator with the result of the operation.
Return or output the accumulated value.
The accumulator pattern is widely applicable and can be customized for almost any task that involves combining multiple values into a single result. 
node /workspaces/FrontEndCraft/JavaScript/Notes/accumulatorPattern.js*/