// JS Switch Statement
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_switch.asp

// General rules:
// The switch statement is used to perform different actions based on different conditions.
// Use the switch statement to select one of many code blocks to be executed.
// The switch expression is evaluated once. The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed. If there is no match, the default code block is executed.

// breack & default:
// The switch statement is often used together with a break or a default keyword (or both).
// The break keyword breaks out of the switch block. This will stop the execution of more code and case testing inside the block.
// If break is omitted, the next code block in the switch statement is executed.
// The default keyword specifies some code to run if there is no case match.
// There can only be one default keyword in a switch.
// Although this is optional, it is recommended that you use it, as it takes care of unexpected cases.

let day = "Monday";
let day_2 = "Tuesday";

switch (day || day_2) {
  case "Monday":
    console.log("Today is Monday");
  // break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

let balance = 1000;
const withdrawAmount = 100;

switch (withdrawAmount) {
  case 100:
    console.log("You have withdrawn $100");
    balance -= 100;
    break;
  case 200:
    console.log("You have withdrawn $200");
    balance -= 200;
    break;
  case 300:
    console.log("You have withdrawn $300");
    balance -= 300;
    break;
  default:
    console.log("Invalid amount");
}
