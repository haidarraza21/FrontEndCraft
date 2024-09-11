/**In JavaScript, arrays are used to store multiple values in a single variable. They are one of the most commonly used data structures, allowing you to work with lists of data efficiently.

Creating an Array:
Literal notation: */

let student = ['Haidar', 'Farid', 'Arzoo', 'Quaiser', 'Ejaj'];
console.log(student);

/**Accessing Array Elements:
Array elements are accessed by their index (starting from 0). */
console.log(student[3]); //Quaiser
console.log(student[0]); //Haidar

//You can also modify elements by assigning new values:
student[0] = 'Mohammad';
console.log(student); //Changes Haidar to Mohammad

/**Common Array Methods:
push(): Adds one or more elements to the end of an array. */
student.push('Pintu');
console.log(student); //[ 'Mohammad', 'Farid', 'Arzoo', 'Quaiser', 'Ejaj', 'Pintu' ]

//pop(): Removes the last element of an array and returns it.
student.pop();
console.log(student); //[ 'Mohammad', 'Farid', 'Arzoo', 'Quaiser', 'Ejaj' ]

//shift(): Removes the first element from an array and returns it.
student.shift();
console.log(student); //[  'Farid', 'Arzoo', 'Quaiser', 'Ejaj' ]

//unshift(): Adds one or more elements to the beginning of an array.
student.unshift ('Arshad');
console.log(student); //[ 'Ashad', 'Farid', 'Arzoo', 'Quaiser', 'Ejaj' ]

/**splice(): Adds/removes items from an array.

To add elements: */
student.splice(0, 0, 'Amzad');
console.log(student); //[ 'Amzad', 'Arshad', 'Farid', 'Arzoo', 'Quaiser', 'Ejaj' ]

//To remove elements:
student.splice(4, 1);
console.log(student); //[ 'Amzad', 'Arshad', 'Farid', 'Arzoo', 'Ejaj' ]