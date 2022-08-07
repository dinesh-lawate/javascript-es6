// The destructuring assignment syntax is a JavaScript expression that makes it possible 
// to unpack values from arrays, or properties from objects, into distinct variables.

//Array Destructuring
const numbers = [10, 20, 30, 40, 50];

const [a, b] = numbers;

console.log(a, b);

//Object Destructuring
const person = { firstName: "John", lastName: "Doe", Height: 5.9, Weight: 80 };
const { firstName, lastName } = person;

console.log(firstName, lastName);