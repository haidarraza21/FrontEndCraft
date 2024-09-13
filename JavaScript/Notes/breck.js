/**A break statement in JavaScript is used to exit a loop or switch statement prematurely, before the loop has finished its normal iteration. When a break is encountered, it immediately terminates the nearest enclosing loop (for, while, or do...while) or switch.

Example of break in a loop: */

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Loop will stop when i equals 5
    }
    console.log(i); // This will log numbers from 0 to 4
}


//Example of break in a switch statement:

let day = 3;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break; // Exits after this case
    default:
        console.log('Invalid day');
}


//In both cases, break helps you stop execution and exit early from the control structure.