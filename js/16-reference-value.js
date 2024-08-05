// Primitive (number , string , boolean , undefined , null)
let a = 17;
let b = 17;
let c = a;

a = 13;

c = 420;

// Objects (object , array , function and more...)

let person_1 = { skill: "Cooking" }; // 0x01
let person_2 = { skill: "Cooking" }; // 0x02
let person_3 = person_1; // 0x01

person_1.name = "baba";

let person_4 = { ...person_1 }; // 0x03

person_3 = { x: "2" }; // 0x04

let numbers = [1, 2, 3]; // 0x01
let anotherNumbers = numbers; // 0x01
anotherNumbers.push(4); // not really "anotherNumbers"

let copyNumbers = [...numbers]; // 0x02

copyNumbers.splice(1, 1);
copyNumbers.slice(0, 2);

// shallow vs deep copy
let cat_1 = {
  name: "Flufy",
  face: "😸",
  favFoods: ["salomon", "mouse"],
};

let cat_2 = { ...cat_1, favFoods: [...cat_1.favFoods] };
cat_2.face = "😻";
cat_2.favFoods.push("milk");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr2, ...arr1.reverse()];
