"use strict";

// 1. Write a for loop that prints the numbers from (n) to (n).
//    Hint: Use a for loop with a counter that starts at 1 and ends at 20. (edited by omer 😈)

function countToFrom(from, to) {
  for (let i = from; i <= to; i++) {
    console.log(`i: ${i}`);
  }
}

// countToFrom(17, 35);

// 4. Write a for loop that calculates the sum of all numbers from (n) to (n).
//    Hint: Initialize a sum variable to 0 and add each number in the loop.
// (edited by omer 😈)

function calc(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  console.log("sum", sum);
}

calc(1, 3);
calc(1, 4);
calc(3, 5);
