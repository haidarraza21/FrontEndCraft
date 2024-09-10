/**DOM Properties:
The DOM represents the structure of an HTML document. JavaScript can interact with the DOM to dynamically modify content, attributes, styles, and events.

Common DOM Properties:
Accessing DOM elements: */


let element = document.getElementById('myElement'); // by ID
let elements = document.getElementsByClassName('myClass'); // by class name
let tags = document.getElementsByTagName('div'); // by tag name
let queryElement = document.querySelector('.myClass'); // CSS selector


//Modifying element properties:

element.innerHTML = "Hello, World!"; // change HTML content
element.textContent = "Hello, World!"; // change text content only
element.style.color = "red"; // change CSS style


//Attributes:

element.setAttribute('class', 'newClass'); // set attribute
let className = element.getAttribute('class'); // get attribute value
element.removeAttribute('class'); // remove attribute


//Events:

element.addEventListener('click', function() {
    alert('Element clicked!');
  });

  
//Creating and appending elements:

let newDiv = document.createElement('div'); // create a new div
newDiv.textContent = 'New Content';
document.body.appendChild(newDiv); // append to body


/**Using dates and DOM properties together can help you build dynamic web applications that handle time-sensitive data and modify the user interface in real-time.

Would you like more examples or clarification on any specific topic? */