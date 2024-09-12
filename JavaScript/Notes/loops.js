/**Loops in JavaScript allow you to repeat a block of code multiple times. They are useful for iterating over arrays, objects, or repeating tasks until a condition is met.

Types of Loops in JavaScript:
for Loop
while Loop
do...while Loop */

/**for Loop
The for loop is the most commonly used loop. It is great for running a block of code a set number of times. */

for(let i=1; i <= 10; i++){
    console.log(i)
}

/**Initialization: Sets the loop variable (e.g., let i = 1).
Condition: Evaluates whether the loop should continue (i <= 10).
Increment/Decrement: Updates the loop variable (i++). */

/**while Loop
The while loop executes the code block as long as the specified condition is true. */

let num = 1;
while(num <= 10){
    console.log(num);
    num++
};
//The loop continues as long as the condition (i <= 10) remains true.

/**do...while Loop
The do...while loop is similar to the while loop, but it ensures that the code block is executed at least once, even if the condition is initially false. */

let number = 1;
do{
    console.log(number)
    number ++;
} while(number<=10);
//The code block is executed first, then the condition is checked (i <=10).

/**Summary of Use Cases:
for: When you know how many times the loop should run.
while: When the loop should run until a condition changes.
do...while: When you want the code block to run at least once. */