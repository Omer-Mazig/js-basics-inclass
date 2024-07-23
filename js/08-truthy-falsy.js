// Truthy & Falsy Values

// - Every value in JavaScript is either truthy or falsy.
// - Falsy values: false, 0, "", null, undefined, NaN
// - Truthy values: everything else...

// Example 1
let example1 = false; // false
if (example1) console.log(example1, "is: truthy");
else console.log(example1, "is: falsy");

// Example 2
let example2 = true; // true
if (example2) console.log(example2, "is: truthy");
else console.log(example2, "is: falsy");

// Example 3
let example3 = 0; // number 0
if (example3) console.log(example3, "is: truthy");
else console.log(example3, "is: falsy");

// Example 4
let example4 = 20; // non-zero number
if (example4) console.log(example4, "is: truthy");
else console.log(example4, "is: falsy");

// Example 5
let example5 = -20; // non-zero number (negative)
if (example5) console.log(example5, "is: truthy");
else console.log(example5, "is: falsy");

// Example 6
let example6 = ""; // empty string
if (example6) console.log(example6, "is: truthy");
else console.log(example6, "is: falsy");

// Example 7
let example7 = " "; // non-empty string (also a space character)
if (example7) console.log(example7, "is: truthy");
else console.log(example7, "is: falsy");

// Example 8
let example8 = null; // null
if (example8) console.log(example8, "is: truthy");
else console.log(example8, "is: falsy");

// Example 9
let example9; // undefined
if (example9) console.log(example9, "is: truthy");
else console.log(example9, "is: falsy");

// Example 10
let example10 = NaN; // NaN
if (example10) console.log(example10, "is: truthy");
else console.log(example10, "is: falsy");

// Example 11
let example11 = "0"; // string "0"
if (example11) console.log(example11, "is: truthy (as a string)");
else console.log(example11, "is: falsy");

// Example 12
let example12 = "false"; // string "false"
if (example12) console.log(example12, "is: truthy (as a string)");
else console.log(example12, "is: falsy");

// Example 13
let example13 = []; // empty array
if (example13) console.log(example13, "is: truthy");
else console.log(example13, "is: falsy");

// Example 14
let example14 = {}; // empty object
if (example14) console.log(example14, "is: truthy");
else console.log(example14, "is: falsy");

// Example 15
let example15 = function () {}; // empty function
if (example15) console.log(example15, "is: truthy");
else console.log(example15, "is: falsy");

// THE ONE TAKEAWAY: EVERYTHING IS TRUTHY EXCEPT:
// - false
// - 0
// - ""
// - null
// - undefined
// - NaN

let input = "";

if (input) {
  console.log(input);
} else {
  console.log("no input provided");
}
