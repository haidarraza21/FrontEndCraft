/**
1. Create object to represnet a product from Myntra 
2. Create an object with two references and log changes to one object by chnaging the other one.
3. Use bracket notation to display delivery time.
4. Given an object {message: 'good job', status: 'complete'}, use de-structuring to create two veriable message ans status.
5. Add function inIdenticalProduct to compare two product objects.
 */


let myntraProduct = {
    id: 101,
    name: "Men's Regular Fit T-Shirt",
    brand: "Roadster",
    price: 799,
    size: ['S', 'M', 'L', 'XL'],
    color: "Black",
    inStock: true,
    discount: "20%",
    deliveryTime: "3-5 business days"
};


let product1 = myntraProduct; // Referencing the same object as myntraProduct
let product2 = product1; // Another reference to the same object

// Changing the price in product2
product2.price = 699;

console.log(product1.price); // Logs 699 because product1 and product2 refer to the same object


console.log(myntraProduct['deliveryTime']); // Logs "3-5 business days"



let orderStatus = {message: 'good job', status: 'complete'};

let { message, status } = orderStatus;

console.log(message); // Logs 'good job'
console.log(status);  // Logs 'complete'


function isIdenticalProduct(productA, productB) {
    return JSON.stringify(productA) === JSON.stringify(productB);
}

// Example usage:
let productA = {
    id: 101,
    name: "Men's Regular Fit T-Shirt",
    brand: "Roadster",
    price: 799,
    size: ['S', 'M', 'L', 'XL'],
    color: "Black",
    inStock: true,
    discount: "20%",
    deliveryTime: "3-5 business days"
};

let productB = {
    id: 101,
    name: "Men's Regular Fit T-Shirt",
    brand: "Roadster",
    price: 799,
    size: ['S', 'M', 'L', 'XL'],
    color: "Black",
    inStock: true,
    discount: "20%",
    deliveryTime: "3-5 business days"
};

console.log(isIdenticalProduct(productA, productB)); // Logs true
