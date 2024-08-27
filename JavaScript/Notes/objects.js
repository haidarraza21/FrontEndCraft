/** Objects In JavaScripts
 In JavaScript, an object is a collection of properties, where a property is an association between a key (or name) and a value. Objects are fundamental to JavaScript and are used to store, manipulate, and transfer data. */

 //Using Object Literals:

 const person = {
    firstName : 'Md Haidar',
    lastName : 'Raza',
    age : 24,
    job : 'Engineer',
 }

 console.log(person);
 console.log(person.firstName);

 //Using the new Object() syntax:


const student = {};
student.firstName = 'Md Farid';
student.lastName = 'Ansari';
student.age =23;
student.SID =100477;
console.log(student)
console.log(student.firstName)

// //Using a constructor function:

// function teacher (firstName, lastName, age, job){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.job = job;
// }

// const samir  = new ('Samir', 'Ansari', 23 , 'DSA')

// console.log(teacher);

/**Methods in Objects
A method is a function stored as a property of an object. */

const  teacher = {
    firstName : 'Mr. Vivek',
    lastName : 'Kumar Panday',
    age : 32,
    subject : 'ML',
    fullName : function(){

        return this.firstName + " " + this.lastName;
    }
};

console.log(teacher.fullName());

/**JavaScript provides several built-in methods to work with objects:

Object.keys(obj): Returns an array of a given object’s property names.
Object.values(obj): Returns an array of a given object’s property values.
Object.entries(obj): Returns an array of a given object’s key-value pairs.*/

const car = {
    name : 'Toyoto',
    model : 'Camry',
    year : 2020,
    start : function (){
        console.log('Car Started')
    },
    stop : function(){
        console.log('Car Stoped!')
    }
}

// console.log(car);
console.log(car.model);
console.log(car.start());