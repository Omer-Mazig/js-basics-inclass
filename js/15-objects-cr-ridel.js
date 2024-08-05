"use strict";

const person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city = newCity;
}

// updateCity(person, "Los Angeles");
// console.log("Updated Person:", person);

/////////////////////////////////////////////////////

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// TODO: Write a function to return a new array of student names
function getStudentNames(students) {
  const res = [];
  for (let i = 0; i < students.length; i++) {
    res.push(students[i].name);
  }
  return res;
}

// let names = getStudentNames(students);
// console.log("Student Names:", names);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
  for (let i = 0; i < student.length; i++)
    if (students[i].id === id) return students[i];
  return null;
}

// let student1 = getStudentById(students, 2);
// console.log("Found Student:", student1);

// TODO: Write a function to find a student by ID
// OMER'S SOLUTION
// function getStudentById(students, id) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].id === id) {
//       return students[i];
//     }
//   }
//   return null;
// }

// let student1 = getStudentById(students, 2);
// console.log("Found Student:", student1);

// TODO: Write a function to add a new student to the array
function addStudent(students, newStudent) {
  students.push(newStudent);
}

// addStudent(students, { id: 4, name: "baba", age: 19 });
// console.log("Updated Students:", students);

/////////////////////////////////////////////////////

const product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
  product.isAvailable = !product.isAvailable;
}

// toggleAvailability(product);
// console.log("Updated Product:", product);

// TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  product.price = newPrice;
}

// updatePrice(product, 1500);
// console.log("Updated Product:", product);

// TODO: Write a function to remove a category from the product
function removeCategory(product, category) {
  for (let i = 0; i < product.categories.length; i++) {
    const currentCategory = product.categories[i];
    if (currentCategory === category) {
      return product.categories.splice(i, 1);
    }
  }
}

// let removedItems = removeCategory(product, "tech");
// console.log("Updated Product:", product);
// console.log("removedItems:", removedItems);

// splice
// let arr = ["babi", "mami", "sassssssonn", "ruby", "baba"];
// let removedItems = arr.splice(1, 2, "yohai", "nani");
// console.log("arr", arr);
// console.log("removedItems", removedItems);

/////////////////////////////////////////////////////

// TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
  // in this case (prices) we can use 0 for "maxPrice"
  let maxPrice = products[0].price;
  let maxIndex = 0;

  for (let i = 1; i < products.length; i++) {
    const currentPrice = products[i].price;
    if (currentPrice > maxPrice) {
      maxPrice = currentPrice;
      maxIndex = i;
    }
  }
  return products[maxIndex];
}

// let expensiveProduct = findMostExpensiveProduct(products);
// console.log("Most Expensive Product:", expensiveProduct);

const products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

// TODO: Write a function to return an array of sizes of only  available product
function getAvailableSizes(products) {
  const sizes = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].isAvailable) {
      for (let j = 0; j < products[i].sizes.length; j++) {
        if (!sizes.includes(products[i].sizes[j])) {
          sizes.push(products[i].sizes[j]);
        }
      }
    }
  }

  return sizes;
}

const sizes = getAvailableSizes(products);
console.log("Available Sizes:", sizes); // ["M" , "L" , "XL"]

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/////////////////////////////////////////////////////

const student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
  student[key] = value;
}

// addProperty(student, "grade", "A");
// console.log("Updated Student:", student);

/////////////////////////////////////////////////////

const school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
  const studArr = school.students;
  for (let i = 0; i < studArr.length; i++)
    if (studArr[i].id === studentId) {
      studArr[i].grades[subject] = newGrade;
      return;
    }
}

// updateStudentGrade(school, 1, "math", 90);
// console.log("Updated School:", school);

/////////////////////////////////////////////////////

const orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
  const res = [];
  for (let i = 0; i < orders.length; i++)
    if (orders[i].status === "delivered") res.push(orders[i]);
  return res;
}

// let deliveredOrders = getDeliveredOrders(orders);
// console.log("Delivered Orders:", deliveredOrders);

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
  const count = {};
  for (let i = 0; i < orders.length; i++) {
    if (!count[orders[i].product])
      //If not exists yet
      count[orders[i].product] = 1; //create first time
    else count[orders[i].product]++; //Increment
  }
  return count;
}

// let productCounts = countProductOccurrences(orders);
// console.log("Product Counts:", productCounts);
/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */
