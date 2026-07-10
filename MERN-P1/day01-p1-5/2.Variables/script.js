// keyword (let, var, const)
// //variable name(container)
// //value

// //Variable declaration and initialization

// //Declaration and initialization in one line:
// let age = 30;

// //Declaration first, then assignment
// let country;
// country = "Ghana";

// //Multiple declarations, then assignments:
// let firstName, lastName;
// firstName = "Emmanuel";
// lastName = "Tweneboah";

// //Multiple declarations in one line:
// let age1 = 30,
//   job = "Developer",
//   country1 = "Ghana";

//!-----Primitive data types-----
//*1. Numbers

let age = 28;
let price = 19.99;

//* 2.Strings
let greeting = "Good morning";

//* 3. Boolean
let isStudent = false;

//* 4.undefined

let futureGoal;

//* 5. Null

let currentJob = null;

//! -----Non-Primitives----

//* 1. Arrays

let fruits = ["Apple", "Banana", "Kiwi"];
let mixedData = [true, 30, 199.99, "Emmanuel", [1, 2, 3]];

//*2 Objects

let person = {
  firstName: "Emmanuel",
  lastName: "Tweneboah",
  age: 31,
};

let amount = 40;
amount = 100; //reassigned
amount = 0;

const carName = "Honda";
carName = "Benz";
console.log(carName);
