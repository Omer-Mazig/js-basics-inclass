// JS String Type
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_string_methods.asp

const firstStr = "Hello, ";
const secondStr = "World!";

// Concatenation
const message = firstStr + secondStr;
console.log("message:", message); // Hello, World!

// String Length
console.log("message length:", message.length); // 13

// Accessing a string
console.log("first character:", message[0]); // H
console.log("last character:", message[message.length - 1]); // !
console.log("second character:", message[1]); // e

// String Methods:
// String methods are functions built into JavaScript that can be used to manipulate strings.

// Converting to Upper and Lower Case
console.log("uppercase:", message.toUpperCase()); // HELLO, WORLD!
console.log("lowercase:", message.toLowerCase()); // hello, world!

// Replacing String Content
console.log("replace:", message.replace("World", "Universe")); // Hello, Universe!

// Finding a String in a String
console.log("index of World:", message.indexOf("World")); // 7
console.log("index of World:", message.indexOf("world")); // -1 (not found)

// Extracting String Parts
console.log("substring:", message.substring(7)); // World!
console.log("substring:", message.substring(7, 10)); // Wor

// Removing Whitespace
const messageWithWhitespace = "    Hello, World!    ";
console.log("whitespace:", messageWithWhitespace.trim()); // Hello, World!

// Splitting a String
console.log("split:", message.split(" ")); // ["Hello,", "World!"]  (returns an array , more on that later)

// String Template
const fName = "John";
const age = 30;
const job = "Web Developer";

const template = `Hello, my name is ${fName}, I'm ${age} years old and I'm a ${job}.`;
const withoutTemplate =
  "Hello, my name is " +
  fName +
  ", I'm " +
  age +
  " years old and I'm a " +
  job +
  ".";
console.log("template:", template); // Hello, my name is John, I'm 30 years old and I'm a Web Developer.
