//! ====METHODS====
// * 1. toFixed

let amount = 19.393;

let results = amount.toFixed(2);

//* isNaN

let qty1 = "50";

//* ParseFloat/ParseInt

let convertedNum = parseFloat(qty1);
// console.log(convertedNum);
// console.log(typeof qty);

// ! ====ARITHMETIC OPERATORS====
// !Addition

let apples = 10;
let oranges = 5;
let totalFruits = apples + oranges;

//! Subtraction
let initialBalance = 1000;
let withdrawal = 200;
let remainBalance = initialBalance - withdrawal;

//! multiplication
let costPerItem = 20;
let quantity = 4;
let totalCost = costPerItem * quantity;

//! Division
let totalDistance = 120;
let hours = 2;
let speed = totalDistance / hours;

// console.log("Average speed is", speed);

//! Modulus
let totalStudents = 53;
let groupSize = 5;
let remainingStudents = totalStudents % groupSize;

//!Exponentiation (**): Raises one number to the power of another
let base = 2;
let power = 3;
let result = base ** power; //2*2*2

//! Increment

let currentAge = 25;
currentAge++; //+1
// let myAge = currentAge + 1;

//! Decrement
let countDown = 10;
countDown--;
// let countDownLeft = countDown - 1;

// ! --Case Study: Budget Management for a Monthly Expense Tracker--
//A user wants to track their monthly expenses and savings using a simple JavaScript program. The user has an income and several expenses like rent, groceries, utilities, and entertainment. The program needs to calculate how much is spent, how much is saved, and what percentage of the income has been spent.
/*
Scenario:
 * Monthly income: $3000
 * Monthly expenses:
 * Rent: $1200
 * Groceries: $600
 * Utilities: $300
 * Entertainment: $200

! Operations to be performed:

1. Calculate the total expenses.
2. Calculate the remaining savings after expenses.
3. Calculate the percentage of income spent.
*/

//Step1: Define the monthly income
let monthlyIncome = 3000;

//Step2: Expenses
let rent = 1200;
let groceries = 600;
let utilities = 300;
let entertainment = 200;

//Step3: calculate the total expenses
let totalExpenses = rent + groceries + utilities + entertainment;

//Step 4: Calculate the remaining savings using the Subtraction (-) operator
let remainingSavings = monthlyIncome - totalExpenses;

//Step 5: Calculate the percentage of income spent using the Division (/) and Multiplication (*) operators

let percentageSpent = ((totalExpenses / monthlyIncome) * 100).toFixed(2);
