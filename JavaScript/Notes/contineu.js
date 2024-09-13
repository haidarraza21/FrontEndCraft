/**The continue statement in JavaScript is used within loops to skip the current iteration and proceed to the next one. It doesn't stop the loop entirely like the break statement does, but instead, it skips the rest of the code for the current iteration and moves to the next iteration.

Example of continue in a for loop: */

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skips the iteration if the number is even
    }
    console.log(i); // This will only log odd numbers (1, 3, 5, 7, 9)
}

//Example of continue in a while loop:

let i = 0;
while (i < 10) {
    i++;
    if (i === 5) {
        continue; // Skips the current iteration when i equals 5
    }
    console.log(i); // Logs numbers from 1 to 10, except 5
}


//In both examples, whenever the condition for continue is met, the loop skips that iteration and continues with the next one.