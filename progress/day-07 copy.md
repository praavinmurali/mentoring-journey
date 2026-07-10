# Daily Progress Log — Day 02
**Date:9 July 2026
**Epic & Task:** P1.4-D2 — Bootstrap 5 + Deploy Bootstrap Landing Page (S11)
**Day segment (if multi-day task):** Seg 2 of 2 · GitHub Issue #153 (OPEN by design)
###############################################################################
**course transcript:**
Section 12 — Getting Started with JavaScript


L1-L6: Linking JS, Variables, Primitive & Non-Primitive Data Types, let/var/const

Definition

JavaScript is the language used to add interactivity to HTML/CSS. It can create, modify, and style HTML elements. A variable is a named container used to store and reuse data. Data types define what kind of value a variable holds.

Key Concepts


Linking JavaScript to HTML — 3 methods:

Internal — <script> tag written inside HTML (usually in <head> or before </body>).
Inline — JS written directly in an HTML attribute, e.g. onclick="alert('hi')". Not recommended (no separation of concerns).
External — JS written in a separate .js file and linked via <script src="script.js"></script> placed at the bottom of <body>. Most recommended (follows DRY principle, keeps separation of concerns, easier debugging).



Debugging tools: alert() shows a popup; console.log() prints to the browser console (opened via right-click → Inspect → Console).
Variable declaration = keyword + name + value (e.g. let age = 30;).
Variable names should be descriptive and use camelCase (e.g. firstName).
You cannot redeclare the same variable name with let/const in the same scope.
Data types are grouped into:

Primitive (immutable, store a single value): Number, String, Boolean, Undefined, Null, Symbol.
Non-primitive / Reference types (store complex data): Array, Object, Function.
typeof operator checks a variable's data type. Note: typeof null returns "object" (a known JS quirk).



var vs let vs const:

var — old way, function-scoped, avoid using it (no block scope protection).
let — block-scoped, value can be reassigned.
const — block-scoped, value cannot be reassigned (throws "Assignment to constant variable" error).





Important Terms

TermMeaningVariableA container for storing and reusing dataDeclarationCreating a variable (before assigning a value)InitializationAssigning a value to a declared variablePrimitive typeImmutable data type holding a single valueNon-primitive typeReference type holding complex/multiple values (array, object, function)typeofOperator that returns the data type of a valueBlock scopeVariable accessible only within the {} block it's declared in

Workflow / Process


Link JavaScript to HTML (internal, inline, or external — external preferred).
Declare a variable using let/const + name.
Assign a value (initialization).
Use console.log() to verify output in the browser console.


Key Takeaways


Always prefer external JS files for real projects.
Use console.log() over alert() for debugging during development.
Use let when a value will change; use const when it should stay fixed. Avoid var.
Primitive = single, immutable value. Non-primitive = complex, mutable structure.


Quick Revision


3 ways to link JS: internal, inline, external (external = best practice).
Variable = keyword + name + value.
Primitive: number, string, boolean, undefined, null, symbol.
Non-primitive: array, object, function.
let = reassignable, const = not reassignable, var = avoid.



L7-L12: Number Methods, Arithmetic Operators, Comparison Operators, Strings

Definition

JavaScript provides built-in methods for numbers and strings, arithmetic operators for math operations, and comparison operators to compare values and return a boolean.

Key Concepts

Number Methods


.toFixed(n) — rounds a number to n decimal places (returns a string).
isNaN(value) — checks whether a value is "Not a Number."
parseFloat(str) / parseInt(str) — convert a string into a number (float/integer).


Arithmetic Operators


+ addition, - subtraction, * multiplication, / division, % modulus (remainder), ** exponentiation (power), ++ increment, -- decrement.
Shorthand: x++ same as x = x + 1; x-- same as x = x - 1.


Comparison Operators


== (loose equal) — compares value only, ignores type.
=== (strict equal) — compares value and type.
!= (loose not equal) — checks values only.
!== (strict not equal) — checks value and type.
> greater than, < less than, >= greater than or equal, <= less than or equal.
All comparison operators return a boolean (true/false).


Strings


Created using single quotes ' ', double quotes " ", or template literals (backticks ` `).
Template literals allow multi-line strings and variable injection using ${variable}.
Common string methods/properties:

.length — number of characters.
str[index] — access a character by index (0-based).
.toUpperCase() / .toLowerCase() — case conversion.
.indexOf(substring) — finds the position of a substring.
.slice(start, end) — extracts part of a string by index.
.replace(old, new) — replaces a substring.
.concat(str2) or + — joins strings together.





Important Terms

TermMeaningArithmetic operatorSymbol used to perform math operations (+, -, *, /, %, **)Comparison operatorSymbol used to compare two values, returns true/falseStrict equality (===)Compares both value and data typeLoose equality (==)Compares value only, ignores data typeTemplate literalString created with backticks, supports ${} injection.slice()Extracts a portion of a string using start/end indices

Workflow / Process


Perform calculations using arithmetic operators.
Use number methods (toFixed, parseFloat, parseInt) to clean/convert values.
Compare values using ==/=== etc. to get boolean results.
Build/manipulate strings using template literals and string methods.


Key Takeaways


Always prefer === over == to avoid unexpected type coercion bugs.
toFixed() is useful for formatting money/percentages.
Template literals (backticks) are the modern, preferred way to build dynamic strings.
String indexing starts at 0.


Quick Revision


toFixed(), isNaN(), parseFloat(), parseInt() = number methods.
== checks value only; === checks value + type.
Strings: single quote, double quote, or backtick (template literal).
.length, [index], .toUpperCase(), .slice(), .replace() = key string tools.



Section 13 — Advanced JavaScript — Functions


L2-L10: Function Types, Declaration, Parameters, Return, Expression, Arrow, IIFE, Default Params

Definition

A function is a reusable block of code that performs a specific task. Functions help avoid code duplication and make code modular and organized.

Key Concepts


Characteristics of functions: reusable, modular (breaks code into manageable chunks), accepts parameters (input), and can return a value.
Function Declaration — named function using the function keyword:


js  function addNumbers(a, b) {
    return a + b;
  }


Function Expression — function assigned to a variable (usually const):


js  const addNumbers = function (a, b) {
    return a + b;
  };


Arrow Function — concise syntax using =>:


js  const addNumbers = (a, b) => {
    return a + b;
  };
  // Shorter form (implicit return, no braces needed):
  const addNumbers = (a, b) => a + b;


Parameters vs Arguments:

Parameter = placeholder defined when declaring a function.
Argument = actual value passed when calling/invoking a function.



Return keyword — sends a value back from the function so it can be reused elsewhere in the code (instead of just logging/alerting inside the function).
Anonymous Function — a function without a name; commonly used as a callback function or inside an IIFE.
IIFE (Immediately Invoked Function Expression) — a function that runs immediately after being defined, wrapped in parentheses:


js  (function (a, b) {
    console.log(a + b);
  })(2, 3);


Default Parameters — assign a fallback value to a parameter in case no argument is provided, preventing NaN/undefined errors:


js  function multiply(a = 1, b = 2) {
    return a * b;
  }

Important Terms

TermMeaningFunction declarationNamed function created with the function keywordFunction expressionFunction defined and assigned to a variableArrow functionConcise function syntax using =>ParameterPlaceholder input defined at function creationArgumentActual value passed when calling the functionReturnKeyword that sends a result back out of the functionIIFEA function that executes immediately after being definedDefault parameterFallback value used when no argument is passedCallback functionA function passed as an argument to run later (often anonymous)

Workflow / Process


Define the function (declaration, expression, or arrow).
Write logic inside the function body.
Call/invoke the function with arguments.
Return the result if it needs to be reused elsewhere.


Key Takeaways


Function declarations are hoisted; expressions/arrow functions are not.
Arrow functions are the most concise but can look unfamiliar to beginners at first.
Always use return if a value is needed outside the function (don't rely only on console.log).
Default parameters prevent bugs when arguments are missing (avoids NaN).


Quick Revision


3 main function types: declaration, expression, arrow.
Parameter = defined at creation; Argument = passed at calling.
return sends data out; without it, the function outputs undefined.
IIFE = function that runs immediately, written as (function(){...})().
Default parameters = function(a = 1, b = 2) {}.



L11-L18: Projects — Calculator, Character Tool, BMI Calculator, Grading System, Color Changer, Music Player, Counter

Definition

Hands-on projects applying functions, operators, and DOM manipulation to build small, functional JavaScript applications.

Key Concepts

1. Simple Calculator


Four separate functions (addition, subtraction, multiplication, division), each built using function declaration, expression, or arrow function, taking two parameters and returning the result.


2. Character Counter Tool


Functions to: get text .length, convert to .toUpperCase() / .toLowerCase(), and .slice() part of a string based on start/end index arguments.


3. String Formatting Tool


A single function that takes two strings, converts one to uppercase and the other to lowercase, then concatenates them together with spacing and returns the combined result.


4. BMI Calculator


Formula: BMI = weight / (height × height).
Function takes weight and height as parameters, calculates BMI, then uses if/else if/else conditional statements to determine status: underweight (<18.5), normal weight (<24.9), overweight (<29.9), or obese (else). Returns the status.


5. Student Grading System


Function takes totalMarks, obtainedMarks, and classAverage.
Calculates: passingCriteria (50% of total), exceptionalCriteria (80% of total).
Uses comparison operators to determine hasPassed, hasPerformedExceptionally, and isAboveAverage (each a boolean).
Returns all three results together as an object.


6. Dynamic Color Changer (DOM Project)


Uses document.querySelector() to select elements (by class .btn1, tag body, etc.).
Uses .addEventListener('click', callbackFunction) to respond to button clicks.
Changes styles dynamically: element.style.backgroundColor, element.style.fontSize.
Includes a reset button to revert styles to default.


7. Music Player / Soundboard


Uses document.getElementById() chained directly with .addEventListener('click', ...).
Uses the built-in new Audio('path/to/file.mp3') object and .play() method to play sound files when buttons are clicked.


8. Counter App


Uses a global let count = 0 variable.
Buttons (increase, decrease, increase by 10, reset) each use .addEventListener('click', ...) to modify count (count++, count--, count += 10, count = 0).
Updates the displayed value in the DOM using element.textContent or element.innerHTML (innerHTML allows embedded HTML tags/styling; textContent does not).


Important Terms

TermMeaningDOM manipulationUsing JS to select and modify HTML elementsquerySelector()Selects an element using a CSS-style selector (class/tag/id)getElementById()Selects an element directly by its id attributeaddEventListener()Attaches a function to run when an event (e.g., click) occursinnerHTMLInjects content into an element, allows HTML tagstextContentInjects plain text content only, no HTML tagsnew Audio()Built-in JS object used to load and play audio files

Workflow / Process (typical DOM project pattern)


Build the HTML structure (buttons, display elements).
Link the external JavaScript file.
Select DOM elements using querySelector() / getElementById().
Attach addEventListener('click', callback) to each interactive element.
Inside each callback, update state (variables) and reflect changes in the DOM via innerHTML/textContent or .style.


Key Takeaways


Real projects combine functions + operators + DOM selection + event listeners.
innerHTML vs textContent: use innerHTML only when you need to inject HTML markup; otherwise prefer textContent for plain text/values.
Conditional statements (if/else if/else) are essential for building logic like BMI status or grading results.
Returning an object from a function is useful when a function needs to produce multiple related results (e.g., grading system).


Quick Revision


Calculator = 4 functions (add, subtract, multiply, divide).
Character tool = .length, .toUpperCase(), .toLowerCase(), .slice().
BMI = weight ÷ (height × height), classified with if/else if/else.
Grading system = returns an object with pass/exceptional/above-average booleans.
Color Changer & Counter = querySelector/getElementById + addEventListener + innerHTML/textContent/.style.
Music Player = new Audio('file.mp3').play().
##################################################################################


############################################################################
**Date:08 July 2026
**Epic & Task:**P2.2-D6 — Two-Way-Binding + Lifting State Up (Section 4, part 2)
**Day segment (if multi-day task):** Seg 1 of 5 · GitHub Issue #252 (OPEN by design)
***************************course trans***********************************

################################################################################

############################################################################
**Date:08 July 2026
**Epic & Task:**P3.1-D5 — Merge Arrays + Intersection + Union (GFG #26,#27,#28 + Codedamn)
**Day segment (if multi-day task):** Seg 5 of 5 · GitHub Issue #187 (OPEN by design)
***************************course trans***********************************
