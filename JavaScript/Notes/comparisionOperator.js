//For run the file use this command node /workspaces/FrontEndCraft/JavaScript/Notes/comparisionOperator.js
/**comparison operations
 
   In JavaScript, comparison operations are used to compare two values. The result of these operations is a boolean value: true or false. Here are the main comparison operators: */
//	equal to or ==
console.log('equal to or ==');
let x = 5;
console.log(x == 5) //true
console.log(x == 10); //false
console.log(x == "5") //true

//equal value and equal type ===
console.log('equal value and equal type ===');
let y = 7;
console.log(y === 7); //true
console.log(y === "7"); //false

//	not equal !=
console.log('not equal !=');
let a = 5;
console.log(a != 6); //true
console.log(a != 5); //false

//not equal value or not equal type !==
console.log(`not equal value or not equal type !==`);
let b = 3;
console.log(b !== "3"); //true
console.log(b !== 3); //false

//	greater than >
console.log('greater than')

let c = 6;
console.log(c > 7); //false
console.log(c > 4); //true

//	less than < 
console.log('less than');
let d = 7;
console.log(d < 13); //true
console.log(d < 2); //false

//	greater than or equal to >=
console.log('greater than or equal to');
let e = 5
console.log(e >= 5); //true
console.log(e >= 7); //false
console.log(e >= 3); //true

// less than or equle to <=
console.log('less than or equle to');
let f = 2;
console.log(f <= 1); //false
console.log(f <= 2); //true
console.log(f <= 6); //true

/**How Can it be Used
Comparison operators can be used in conditional statements to compare values and take action depending on the result: */

let age = 8;
let result;

if (age >= 18){  //use the graeter than equale to compare the age of voter
    result = "You are eligible to vote!"
} else{
    result = "You are not eligible to vote!"
}
console.log(result);


  