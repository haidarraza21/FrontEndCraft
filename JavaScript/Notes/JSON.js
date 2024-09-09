/** JSON in JavaScript
 In JavaScript, JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy to read and write for humans and machines. It’s commonly used to send and receive data from a web server or APIs. */

 /**Key Concepts of JSON in JavaScript:
Data Format: JSON is a text format that consists of key-value pairs, where keys are strings, and values can be strings, numbers, arrays, objects, or null.
Parsing JSON: You can convert JSON strings into JavaScript objects using JSON.parse().
Stringifying Objects: You can convert JavaScript objects into JSON strings using JSON.stringify(). */


/**1. Parsing JSON:
To convert a JSON string to a JavaScript object, use JSON.parse(). */
const jsonString = '{"name":"Haidar","age":24,"skills":["JavaScript", "React", "Node.js"], "isEmployed": true}';

const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.age);


/**2. Stringifying JavaScript Object:
To convert a JavaScript object to a JSON string, use JSON.stringify(). */
 const person = {
    firstName : 'Md Haidar',
    lastName : 'Raza',
    age : 24,
    job : 'Engineer',
 }
 const jasonPerson = JSON.stringify(person);
 console.log(jasonPerson)


/**Common Use Cases of JSON:
Sending Data to a Server:

When you send data to a server, you often send it as a JSON string using JSON.stringify(). */ 

const data = { username: "Haidar", password: "12345" };
fetch('https://api.example.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(json => console.log(json));


/**Receiving Data from a Server:

When receiving data from a server, you usually parse the JSON response using JSON.parse() or directly work with the JSON returned by response.json(). */

fetch('https://api.example.com/profile')
  .then(response => response.json())
  .then(data => {
    console.log(data.name); // Outputs name from the JSON response
  });


/**Important Points:
JSON keys must be strings enclosed in double quotes.
JSON only supports specific data types: string, number, array, boolean, null, and objects (no functions, undefined, etc.).
JSON is language-independent, so it's widely used for data exchange between server and client. */