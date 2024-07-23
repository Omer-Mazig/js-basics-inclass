// JS Data Types:
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_datatypes.asp

// data type has two categories:
// 1. Primitive Data Types
// 2. Object / Reference Data Types

// PRIMARY DATA TYPES:

// String:
const firstName = "John";
const lastName = "Doe";

// we can get the length of a string using the length property
console.log(firstName.length); // 4
console.log(lastName.length); // 3

// we cat get a specific character using the index
console.log(firstName[0]); // J
console.log(lastName[1]); // o
console.log(lastName[5]); // undefined

// Number:
const age = 30;

// Boolean:
const isMarried = false;
const isSingle = true;

// Undefined:
let car;
const bike = undefined;

// Null:
const house = null;

///////////////////////////////////////////////////////////////////

// OBJECT / REFERENCE DATA TYPES: (more on this later)

// Object:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isMarried: false,
};

// Array:
const numbers = [1, 2, 3, 4, 5];
const fruits = ["Apple", "Banana", "Mango"];

// Function:
function sayHello() {
  console.log("Hello");
}
