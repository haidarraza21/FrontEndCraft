/*Create a method to check if a number is odd 
  Create a method to return larger number of the two numbers.
  Create a method to convert Celsius to Fahrenheit F =(9/5)*C + 32
  node /workspaces/FrontEndCraft/JavaScript/PracticeSet/Level3/function.js */

function isOdd (number){
    let rem = number % 2 ;
    let isOdd = rem == 1;
    return isOdd;
  }
  console.log(isOdd(67)); //true
  console.log(isOdd(68)); //false
  console.log(isOdd(69)); //true

function numberLarge(num1 , num2){
    if(num1 > num2){
        return num1 ;
    } else{
        return num2;
    }
}
console.log(numberLarge(12,23));
console.log(numberLarge(233,23));
console.log(numberLarge(0,23));
console.log(numberLarge(12,43));
console.log(numberLarge(2222,23));
console.log(numberLarge(46,23));
console.log(numberLarge(12,122));

function convertCelsiusToFahrenheit(celsius){
    let fahrenheit = ((9 / 5) * celsius ) + 32;
    return fahrenheit
}

console.log(convertCelsiusToFahrenheit(34));
console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(12));
console.log(convertCelsiusToFahrenheit(65));
console.log(convertCelsiusToFahrenheit(24));
console.log(convertCelsiusToFahrenheit(234));

