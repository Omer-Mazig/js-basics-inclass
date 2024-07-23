// JS FUNCTIONS
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_functions.asp

// Functions are a block of code that can be reused. They can take in parameters and return a value.
// Functions are defined using the function keyword followed by the function name and parentheses ().
// The code to be executed is placed inside curly brackets {}.
// The function can be called by using the function name followed by parentheses ().

// 01 Function with no Parameters
// Function Declaration

function greet() {
  console.log("Hello, World!");
}

// Function Call
// greet(); // Hello, World!

// 02 Function with Parameters
// Function Declaration
function greetUser(name, msg) {
  console.log(name + ", " + msg);
}

// greetUser("omer", "welcome");
// greetUser("elchanan", "good to see you");

// 03 Function with Return Value
function add(a, b) {
  console.log("start");
  let result = a + b;
  return result;
  console.log("end");
}

let sum = add(5, 3); // the value of 'sum' is assigned to the return value of the function
console.log("sum:", sum); // 8

if (sum < 90) {
  console.log("hey!");
}

function getNothing() {
  let a = 5;
  let b = 10;
  // no return statement
}

let nothing = getNothing();
console.log("nothing:", nothing); // undefined

// TODO: create a function that take a number and check if its a positive number or negative or zero

function checkNumber(num) {
  if (num > 0) return "positive";
  else if (num < 0) return "negative";
  else return "zero";
}

let result = checkNumber(17);
console.log("result", result);
