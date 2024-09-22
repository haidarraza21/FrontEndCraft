/**JavaScript operators are symbols used to perform operations on values and variables. JavaScript supports various types of operators, which are categorized based on their functionality.


Types of JavaScript Operators:
Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Bitwise Operators
String Operators
Conditional (Ternary) Operator
Type Operators
Comma Operator
 */

/**1. Arithmetic Operators
These are used for basic mathematical operations: */

let a = 10;
let b = 3;

// Addition
let sum = a + b;
console.log(sum); // Outputs: 13

// Subtraction
let difference = a - b;
console.log(difference); // Outputs: 7

// Multiplication
let product = a * b;
console.log(product); // Outputs: 30

// Division
let quotient = a / b;
console.log(quotient); // Outputs: 3.3333333333333335

// Modulus (remainder)
let remainder = a % b;
console.log(remainder); // Outputs: 1

// Exponentiation
let power = a ** b;
console.log(power); // Outputs: 1000


/**2. Assignment Operators
Assignment operators assign values to variables and can perform arithmetic while doing so. */
let x = 5;

// Simple assignment
x = 10;
console.log(x); // Outputs: 10

// Add and assign
x += 2;
console.log(x); // Outputs: 12

// Subtract and assign
x -= 3;
console.log(x); // Outputs: 9

// Multiply and assign
x *= 4;
console.log(x); // Outputs: 36

// Divide and assign
x /= 2;
console.log(x); // Outputs: 18

// Modulus and assign
x %= 5;
console.log(x); // Outputs: 3


/**3. Comparison Operators
Comparison operators are used to compare two values and return a boolean (true or false). */
let p = 10;
let q = 5;

// Equal to
console.log(p == q); // Outputs: false

// Not equal to
console.log(p != q); // Outputs: true

// Strict equal to (checks both value and type)
console.log(p === 10); // Outputs: true

// Strict not equal to (checks both value and type)
console.log(p !== "10"); // Outputs: true

// Greater than
console.log(p > q); // Outputs: true

// Less than
console.log(p < q); // Outputs: false

// Greater than or equal to
console.log(p >= 10); // Outputs: true

// Less than or equal to
console.log(q <= 5); // Outputs: true


/**4. Logical Operators
Logical operators are used to combine multiple conditions. */
let isAdult = true;
let hasLicense = false;

// Logical AND
console.log(isAdult && hasLicense); // Outputs: false

// Logical OR
console.log(isAdult || hasLicense); // Outputs: true

// Logical NOT
console.log(!isAdult); // Outputs: false


/**5. Bitwise Operators
These operators work on the binary representations of numbers. */
let mm = 5;  // (binary: 101)
let nn = 3;  // (binary: 011)

// Bitwise AND
console.log(m & n); // Outputs: 1 (binary: 001)

// Bitwise OR
console.log(m | n); // Outputs: 7 (binary: 111)

// Bitwise XOR
console.log(m ^ n); // Outputs: 6 (binary: 110)

// Bitwise NOT
console.log(~m); // Outputs: -6 (inverts bits)

// Left shift
console.log(m << 1); // Outputs: 10 (binary: 1010)

// Right shift
console.log(m >> 1); // Outputs: 2 (binary: 10)


/**5. Bitwise Operators
These operators work on the binary representations of numbers. */
let m = 5;  // (binary: 101)
let n = 3;  // (binary: 011)

// Bitwise AND
console.log(m & n); // Outputs: 1 (binary: 001)

// Bitwise OR
console.log(m | n); // Outputs: 7 (binary: 111)

// Bitwise XOR
console.log(m ^ n); // Outputs: 6 (binary: 110)

// Bitwise NOT
console.log(~m); // Outputs: -6 (inverts bits)

// Left shift
console.log(m << 1); // Outputs: 10 (binary: 1010)

// Right shift
console.log(m >> 1); // Outputs: 2 (binary: 10)


/**6. String Operators
JavaScript uses the + operator to concatenate strings. */
let firstName = "Haidar";
let lastName = "Raza";

// String concatenation
let fullName = firstName + " " + lastName;
console.log(fullName); // Outputs: Haidar Raza


/**7. Conditional (Ternary) Operator
This operator assigns a value based on a condition. */
let age = 18;

// Conditional (ternary) operator
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Outputs: Yes


/**8. Type Operators
These are used to check the type of variables or instances */
let value = "Hello";

// typeof operator
console.log(typeof value); // Outputs: string

// instanceof operator
console.log(value instanceof String); // Outputs: false

/**9. Comma Operator
The comma operator allows multiple expressions to be evaluated, and it returns the result of the last expression. */
let result = (1 + 2, 3 + 4);
console.log(result); // Outputs: 7 (result of the last expression)
