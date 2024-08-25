/** scope in JavaScript
In JavaScript, "scope" refers to the accessibility or visibility of variables and functions in different parts of the code. Understanding scope is crucial for writing clean, bug-free code. JavaScript has two main types of scope: global scope and local scope. Additionally, there are block-level and function-level scopes, which are determined by how and where variables are declared. */

/**Global Scope
Variables declared outside of any function or block are in the global scope.
These variables are accessible from anywhere in the code. */

let globalScope = 'i am globel scope'
function exampleGlobel(num3,num4){
    console.log(globalScope)
    let sum =num3 +num4;
    return sum;
    
} 

console.log(exampleGlobel(2, 4));

/**Local Scope
Variables declared inside a function are in the local scope of that function.
These variables are accessible only within that function. */

function exampleLocal(){
    let localScope = 'i am local scope'
    console.log(localScope);
}
exampleLocal();

/**Block Scope
Introduced with ES6, variables declared with let or const inside a block ({}) are block-scoped.
These variables are accessible only within that block. */
let num5 =20;
if(num5 > 18){
    let result5 ='you are eligible to vote';
    console.log(result5);
}

/**Key Takeaways
Global scope is accessible everywhere.
Local (function) scope restricts access to within functions.
Block scope with let and const restricts access to within blocks.
node /workspaces/FrontEndCraft/JavaScript/Notes/scope.js */


