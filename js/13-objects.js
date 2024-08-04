"use strict";

// JS Objects
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_objects.asp

// - Objects are variables too, but they can contain many values.
// - The values are written as key-value pairs ('key' and 'value' separated by a colon).

let person = {
  name: "John", // key: name, value: "John"
  age: 17, // key: age, value: 17
  isMarried: false, // key: isMarried, value: false
};

// we can access the object properties using the dot notation
// console.log("person.name", person.name);
// console.log("person.age", person.age);
// console.log("person.isMarried", person.isMarried);

// console.log("person.isMarriedushy", person.isMarriedushy); // undefined
// console.log("person", person);

// we can access the object properties using the bracket notation
// console.log("person['name']", person["name"]);
// console.log("person['age']", person["age"]);
// console.log("person['isMarried']", person["isMarried"]);
// console.log("person['isMarriedushy']", person["isMarriedushy"]); // undefined

// this is useful when the key is a variable
// let key = "name";
// console.log("person[key]", person[key]);

// key = "age";
// console.log("person[key]", person[key]);

function getPersonValueByKey() {
  let key = prompt("key?");
  let value = person[key];

  if (value === undefined) {
    alert("no found");
    return;
  }

  alert(value);
}

// getPersonValueByKey();

// we can modify the object properties
// console.log("person (before increment)", person);
// person.age = person.age + 1;
// console.log("person (after increment)", person);

// we can add new properties to the object
// console.log("person (before adding city)", person);
// person.city = "Gaza";
// console.log("person (after adding city)", person);
// delete person.city;
// console.log("person (after deleting city)", person);

// Complex object 👇
let myProduct = {
  name: "laptop",
  price: 1000,
  isAvailable: true,
  categories: [
    { id: "1", label: "electronics" },
    { id: "2", label: "computers" },
    { id: "3", label: "tech" },
  ],
  info: {
    color: "#fff",
    sizes: ["L", "MD"],
  },
};

// TODO: Write a function that takes a product and a categoryId and return the category.label
function getCategoryLabel(product, categoryId) {
  for (let i = 0; i < product.categories.length; i++) {
    let currentCategory = product.categories[i];

    if (currentCategory.id === categoryId) {
      return currentCategory.label;
    }
  }
}

let mylabel = getCategoryLabel(myProduct, "2");
// console.log("mylabel: ", mylabel);

// TODO: Write a function that takes a product and return array of categories label and upperCase it
function getCategoriesLabels(product) {
  let categoriesLabels = [];
  for (let i = 0; i < product.categories.length; i++) {
    let label = product.categories[i].label.toUpperCase();
    categoriesLabels.push(label);
  }

  return categoriesLabels;
}

let myCategoriesLabels = getCategoriesLabels(myProduct);
// console.log("myCategoriesLabels", myCategoriesLabels);

/* 
[
 "electronics", 
  "computers",
  "tech"
]
*/

let myProducts = [
  {
    id: "p1",
    name: "laptop",
    price: 1000,
    isAvailable: true,

    info: {
      color: "#fff",
      sizes: ["MD", "L"],
    },
  },
  {
    id: "p2",
    name: "mouse",
    price: 400,
    isAvailable: false,
    info: {
      color: "#000",
      sizes: ["S", "MD"],
    },
  },
  {
    id: "p3",
    name: "desk",
    price: 600,
    isAvailable: true,
    info: {
      color: "#000",
      sizes: ["L", "XL"],
    },
  },
];

function getSizesCount(products) {
  let sizesMap = {};

  for (let i = 0; i < products.length; i++) {
    let currentSizes = products[i].info.sizes;
    for (let j = 0; j < currentSizes.length; j++) {
      let currentSize = currentSizes[j];
      console.log("sizesMap", sizesMap);

      // if (sizesMap[currentSize] === undefined) {
      //   sizesMap[currentSize] = 1;
      // } else {
      //   sizesMap[currentSize]++;
      // }

      if (sizesMap[currentSize] === undefined) {
        sizesMap[currentSize] = 0;
      }
      sizesMap[currentSize]++;
    }
  }

  return sizesMap;
}

// let sizes = getSizesCount(myProducts);
// console.log("sizes", sizes);

/*
{
  S: 1,
  MD: 2,
  L: 2,
  XL: 1
}
*/

let students = [
  { id: "1", name: "omer", grade: 100 },
  { id: "2", name: "avi", grade: 40 },
  { id: "3", name: "gaga", grade: 80 },
];

/*
TODO:
  1. Write a function that takes an array of students
  2. return a new array with only students with grade greater than (n)
*/

function getPassStudents(array, minGrade) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].grade > minGrade) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

// console.log(getPassStudents(students, 70));
// console.log(getPassStudents(students, 90));

/*
TODO:
  1. Write a function that takes an array of objects and a key
  2. return a new array with the values of the given key
*/

function getValuesFromKey(array, key) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let currentItem = array[i];
    let currentValue = currentItem[key];

    // newArray.push(currentValue);
    newArray[i] = currentValue;
  }

  return newArray;
}

// console.log(getValuesFromKey(students, "id")); // => ["1" , "2" , "3"]
// console.log(getValuesFromKey(students, "name")); // => ["omer" , "avi" , "gaga"]

/*
TODO:
1. Write a function that takes an array of names
2. return a new array with objects that have a "name" key and a value
3. bonus: add "id" to each object (use "i" for this)
*/

function createPersons(names) {
  let persons = [];

  for (let i = 0; i < names.length; i++) {
    let newPerson = { id: i, name: names[i] };

    persons.push(newPerson);
  }

  return persons;
}

// console.log(createPersons(["yossi", "liraz", "baba"]));

// => [{id: 0, name: "yossi"} , {id: 1, name: "liraz"}, {id: 2, name: "baba"}]

/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
let employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

console.log(groupBy(employees, "department"));

function groupBy(array, key) {
  let group = {};

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let groupKey = item[key];

    if (group[groupKey] === undefined) {
      group[groupKey] = [];
    }

    // always wanna push... 😎
    group[groupKey].push(item);
  }

  return group;
}

/*
{
  Engineering: [
    { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
  ],
  Marketing: [
    { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
    { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
    { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
  ]
}
*/
