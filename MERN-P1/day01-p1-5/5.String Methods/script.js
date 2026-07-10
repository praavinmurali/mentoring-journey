//! ways of creating strings

//single
let singleQuoteString = "Hello, this is a string with single quotes";
//double
let doubleQuoteString = "Hello, this is a string with double quotes.";
//template
let templateLiteralString = `
Hello, this is a string with template literals.
`;

//str.length
let strLength = doubleQuoteString.length;

//Accessing characters

let firstChar = doubleQuoteString[1];

//ToLowerCase()

let toLowerCaseStr = doubleQuoteString.toLowerCase();
//ToUpperCase()

let toUpperCaseStr = doubleQuoteString.toUpperCase();

//indexOf
let positionOfSubstring = doubleQuoteString.indexOf("double");

//slice
let slicedString = singleQuoteString.slice(7, 11);

//replace
let replacedStr = singleQuoteString.replace("Hello", "Welcome");

//concat
let firstName = "Emmanuel";
let lastName = "Tweneboah";

// let fullName = firstName.concat(" ", lastName);

let fullName = firstName + " " + lastName;

//template literals
let name = "John";
let age = 20;

let greeting = `Hello, ${name}, your age is ${age} years, good morning `;
