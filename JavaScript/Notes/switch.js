/**The switch statement in JavaScript is used to execute one block of code out of many based on the value of an expression. It's an alternative to using multiple if...else if statements, making the code more readable when there are multiple possible conditions to check. */

switch (expression) {
    case value1:
      // code block to execute if expression === value1
      break;
    case value2:
      // code block to execute if expression === value2
      break;
    // Add more cases as needed
    default:
      // code block to execute if no case matches
  }
/**expression: This is evaluated once and compared with each case value.
case value: If the expression matches value, the associated code block is executed.
break: This stops the switch from continuing to check the other cases. Without break, execution will continue to the next case, even if it doesn't match.
default: This is optional and executes if none of the case values match the expression.


Example 1: Basic Switch Statement */  
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("It's the weekend!");
}

/**In this example:

If day is 3, it will print "Wednesday", then break to stop the switch statement.
If day doesn't match any of the cases, the default block will execute.


Example 2: Using switch Without break (fall-through behavior)
If you omit the break statement, the code will continue executing the next cases until a break is encountered or the switch ends. */
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red.");
  case "banana":
    console.log("Bananas are yellow.");
  case "grape":
    console.log("Grapes are purple.");
    break;
  default:
    console.log("Unknown fruit.");
}

/**Here, all three case blocks run because there's no break after "apple". This is called fall-through behavior.
 

Example 3: Grouping Cases
You can group multiple cases together if they should execute the same code. */
let animal = "dog";

switch (animal) {
  case "dog":
  case "cat":
    console.log("Domestic animal");
    break;
  case "lion":
  case "tiger":
    console.log("Wild animal");
    break;
  default:
    console.log("Unknown animal");
}


/**In this example, both "dog" and "cat" share the same code block since they are both domestic animals.

Example 4: Using default
The default case runs when no other case matches. */
let color = "purple";

switch (color) {
  case "red":
    console.log("The color is red");
    break;
  case "blue":
    console.log("The color is blue");
    break;
  default:
    console.log("Color not recognized");
}

/**Here, the default block is executed because "purple" doesn't match any case.

Important Notes:
switch performs strict equality (===) checks, so both the value and type must match for a case to be executed.
Use break to prevent fall-through unless you explicitly want multiple cases to execute in sequence. */