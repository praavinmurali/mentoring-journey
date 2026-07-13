// Creating objects
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

//Adding properties to object
//! Dot notation
person.isMarried = false;
person.country = "USA";
//! Bracket notation
person["hobby"] = "Coding";
person["courses"] = ["Javascript", "Nodejs", "HTML"];

//! Accessing object properties
//? Dot Notation
const personName = person.name;
const personAge = person.age;
const personCourses = person.courses;

//? Bracket notation
const personHobby = person["hobby"];

//! Object.keys
const keys = Object.keys(person);
// console.log(keys.length);

//! Object.values

const car = {
  brand: "Honda",
  model: "Accord",
  year: 2025,
};

const values = Object.values(car);
// console.log(values);

//! hasOwnProperties
const hasProperty = car.hasOwnProperty("make");

//! Object.assign
const targetObj = { name: "Thomas" };
const sourceObj = { age: 30, country: "USA" };
const results = Object.assign(targetObj, sourceObj);

//! Delete operator
// delete car.brand;

//! object.freeze
// Object.freeze(car);

//modify
car.make = "Nissan";
// console.log(car);

//! Nesting objects
const user = {
  name: "Prince",
  age: 30,
  address: {
    street: "123 Main street",
    city: "New York",
    country: {
      name: "USA",
      code: "US",
    },
  },
};

//Access nested object properties
const userName = user.name;
// const userAddress = user.address.street;
// const countryName = user.address.country.name;
const countryName = user["address"]["country"]["name"];

//! Objects in an array
const usersObj = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Sans" },
  { name: "Charlie", age: 26, city: "Chicago" },
];

//! Accessing properties
const firstUser = usersObj[0];
const secondUser = usersObj[1];

//! Add new user to userObject
// usersObj.unshift({ name: "David", age: 40, city: "Accra" });

//! Modify the arrays of object
//update user name  from Alice to Cici
usersObj[0].name = "Cici";
console.log(usersObj);
