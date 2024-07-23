// JS Conditionals
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_if_else.asp

// if & else statement with hard-coded boolean value

// (not really useful, but you get the idea)
if (true) {
  console.log("This will always run");
} else {
  console.log("This will never run");
}

// The oposite of the above
if (false) {
  console.log("This will never run");
} else {
  console.log("This will always run");
}

// Somtimes we dont need else. else is optional.
if (10 < 100) {
  console.log("hello from if statement");
}

// if & else statement with a variable condition
const age = 25;
if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// if & else statement with a && logical operator
// Reminder: && means both conditions must be true
if (age > 18 && age < 30) {
  console.log("You are a young adult");
} else {
  console.log("You are not a young adult");
}

// if & else statement with a || logical operator
// Reminder: || means either condition must be true
if (age < 2 || age > 100) {
  console.log("you need diapers...");
} else {
  console.log("you dont need diapers...");
}

// We can omit the {} and write the if statement in one line.
// usful for simple and short code.
const isHappy = true;
if (isHappy) console.log("I am happy");
else console.log("I am not happy");

console.log("end of script!");
