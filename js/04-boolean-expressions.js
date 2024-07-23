// JS Boolean Expressions:

let age = 40;
let minimumCrossingAge = 9;
let isSingle = false;
let isYomKippur = false;

// Check if a person is old enough to drink beer 👇
let isOldEnoughForBeer = age >= 18;
console.log("isOldEnoughForBeer is", isOldEnoughForBeer);

// Check if a person is old enough to have some wisdom 👇
let hasSomeWisdom = age > 70;
console.log("hasSomeWisdom is", hasSomeWisdom);

// Check if a person is not single *and* 30 years old or older 👇
let shouldBeMarried = age > 30 && isSingle !== true;
console.log("shouldBeMarried is", shouldBeMarried);

// Check if a person is old enough to cross the street alone *or* it's Yom Kippur 👇

const canCrossTheStreetAlone = age > minimumCrossingAge || isYomKippur;
console.log("canCrossTheStreetAlone is", canCrossTheStreetAlone);

// NOTE: Boolean values named using "is" / "has" / "should" / "can" are common in JavaScript.
