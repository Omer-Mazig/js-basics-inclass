// JS Variables:
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_variables.asp

// This is how we print something in the console 👇
console.log(30);
console.log("IITC");

let number = 10;
console.log("number", number);

let anotherNumber;

anotherNumber = 17;
console.log("anotherNumber", anotherNumber);

anotherNumber = 3.14;
console.log("anotherNumber", anotherNumber);

// We can print multiple values in the console like this 👇
let firstName = "John";
let lastName = "Doe";
console.log("first name is -", firstName);
console.log("last name is -", lastName);

// We can create new variables by combining the values of other variables like this 👇
// Note: In this case we are adding a space (' ') between the first and last name
let fullName = firstName + " " + lastName;
console.log("full name is -", fullName);

let fullNameWithGreeting = "hello " + fullName;
console.log("fullNameWithGreeting is -", fullNameWithGreeting);

// not allowed!
let baba = "hi!";
// let baba = 18;

// const is used to declare a constant variable.
// The value of a constant variable cannot be changed!
const myId = "1234";
myId = "5678"; // ❌ This will throw an error because we are trying to change the value of a constant

// const name
