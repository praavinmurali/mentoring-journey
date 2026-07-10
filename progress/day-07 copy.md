# Daily Progress Log — Day 02
**Date:10 July 2026
**Epic & Task:** P1.5-D1 — JS Basics + Functions (S12 + S13)
**Day segment (if multi-day task):** Seg 1 of 3 · GitHub Issue #154 (OPEN by design)
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
**Date:10 July 2026
**Epic & Task:**P2.2-D8 — Vanilla CSS + Inline Styles + Dynamic Styling (Section 6, part 1)
**Day segment (if multi-day task):** Seg 3 of 5 · GitHub Issue #254 (OPEN by design)
***************************course trans***********************************
# Styling React Components with Vanilla CSS & Dynamic Styling

## Definition

Styling in React means adding colors, spacing, fonts, layouts, and other visual designs to React components.

React supports multiple styling methods, such as:

- Vanilla CSS
- Inline Styles
- CSS Modules
- Styled Components
- Tailwind CSS

This lesson focuses on **Vanilla CSS** and **Dynamic Styling**. :contentReference[oaicite:0]{index=0}

---

# A Component Styled with Vanilla CSS

## Definition

Vanilla CSS means writing normal CSS files (`.css`) and importing them into React components.

Example:

```jsx
import "./Header.css";

function Header() {
  return <h1>Welcome</h1>;
}
```

---

## Key Concepts

- Create a CSS file.
- Write normal CSS.
- Import the CSS file into the component.
- Vite injects the CSS into the webpage automatically.
- Multiple CSS files can be used.

---

## Important Terms

| Term | Meaning |
|------|---------|
| Vanilla CSS | Normal CSS without extra libraries |
| CSS File | File containing CSS rules |
| import | Includes a CSS file inside a React component |
| Vite | Tool that automatically loads CSS into the browser |

---

## Workflow / Process

```text
Create Component
        │
        ▼
Create CSS File
        │
        ▼
Import CSS File
        │
        ▼
Run React App
        │
        ▼
Styles are Applied
```

---

## Example

```css
h1 {
  color: blue;
}
```

```jsx
import "./Header.css";

function Header() {
  return <h1>Hello</h1>;
}
```

---

## Key Takeaways

- Vanilla CSS is easy to use.
- React supports normal CSS files.
- CSS files are imported into components.

---

## Quick Revision

- Normal CSS
- Import CSS file
- Vite loads CSS automatically

---

# Can Explain the Scoping Problem with Plain CSS Files

## Definition

Plain CSS is **global**.

Even if a CSS file is imported into one component, its rules can affect **other components** too. :contentReference[oaicite:1]{index=1}

---

## Example

### Header.css

```css
p {
  color: red;
}
```

### Header.jsx

```jsx
import "./Header.css";

<p>Header Paragraph</p>
```

### Another Component

```jsx
<p>Login Paragraph</p>
```

Both paragraphs become red.

Why?

Because CSS is **global**.

---

## Scoping Problem

```text
Header.css

↓

p {
 color:red;
}

↓

Every <p> on the page becomes red
```

---

## Important Terms

| Term | Meaning |
|------|---------|
| Global CSS | CSS affects the entire application |
| Scoped CSS | CSS affects only one component |
| Collision | Two components accidentally use the same CSS rule |

---

## Advantages of Vanilla CSS

- Easy to write
- Familiar syntax
- Separate CSS and JSX
- Designers can work on CSS separately

---

## Disadvantages

- No component scoping
- CSS class collisions
- Harder to manage in large projects

---

## Key Takeaways

- CSS is global.
- Components can accidentally share styles.
- This is called a CSS collision.

---

## Quick Revision

- Vanilla CSS is global.
- Rules are not scoped.
- Same selector can affect many components.

---

# Dynamic Inline Styles Applied Conditionally Based on State/Props

## Definition

Inline styles allow CSS to be written directly inside JSX.

React uses the `style` prop.

```jsx
<h1 style={{ color: "red" }}>
```

Notice:

- `style`
- Double curly braces `{{ }}`
- JavaScript object

---

## Example

```jsx
<h1 style={{ color: "green" }}>
  Hello
</h1>
```

---

## Dynamic Inline Styles

Styles can change depending on state or props.

Example:

```jsx
<input
  style={{
    backgroundColor: isInvalid
      ? "red"
      : "white"
  }}
/>
```

If

```text
isInvalid = true
```

Background becomes

```text
Red
```

Otherwise

```text
White
```

---

## Workflow

```text
State Changes
      │
      ▼
Condition Checked
      │
      ▼
Choose Style
      │
      ▼
React Updates UI
```

---

## Important Terms

| Term | Meaning |
|------|---------|
| Inline Style | CSS written directly in JSX |
| style Prop | React property for inline CSS |
| Conditional Styling | Applying styles only when a condition is true |
| Ternary Operator | Shortcut for if...else |

---

## Example

```jsx
const isValid = false;

<input
  style={{
    backgroundColor: isValid
      ? "white"
      : "red"
  }}
/>
```

Output

```text
Invalid input

↓

Red Background
```

---

## Advantages

- Easy to add dynamic styles.
- Styles only affect one element.
- Great for simple conditions.

---

## Disadvantages

- CSS and JSX are mixed together.
- Repeating styles causes duplication.
- Difficult to reuse styles.

---

## Key Takeaways

- Use `style={{ }}` for inline styles.
- React expects a JavaScript object.
- Inline styles are scoped to one element.
- Conditional styling is easy using the ternary operator.

---

## Quick Revision

- `style={{ color: "red" }}`
- Uses JavaScript object
- Great for dynamic styles
- Only affects one element

---

# Dynamic Styling with CSS Classes

## Definition

Instead of changing styles directly, React can add or remove CSS classes based on a condition. :contentReference[oaicite:2]{index=2}

---

## Example

```jsx
<input
  className={
    isInvalid ? "invalid" : undefined
  }
/>
```

When

```text
isInvalid = true
```

React adds

```text
class="invalid"
```

Otherwise

```text
No extra class
```

---

## Multiple Classes

```jsx
<label
  className={`label ${
    isInvalid ? "invalid" : ""
  }`}
>
  Email
</label>
```

Result

```text
label invalid
```

or

```text
label
```

---

## Workflow

```text
User Input
      │
      ▼
Check Condition
      │
      ▼
Choose CSS Class
      │
      ▼
React Applies Class
```

---

## Important Terms

| Term | Meaning |
|------|---------|
| className | React version of HTML class |
| Template Literal | String using backticks (` `) |
| Conditional Class | Class added only if a condition is true |
| Ternary Operator | Chooses one of two values |

---

## Key Takeaways

- Use `className` for CSS classes.
- Add classes conditionally.
- Use template literals for multiple classes.
- Prefer CSS classes for reusable styling.

---

## Quick Revision

- `className`
- Template literals
- Conditional CSS classes
- Better for reusable styles

---

# Progress Notes

**File:** `/notes/p2-day-08.md`

## Completed

- ✅ Styled components with Vanilla CSS
- ✅ Understood CSS import in React
- ✅ Learned that Vanilla CSS is global
- ✅ Understood CSS scoping problems
- ✅ Learned inline styling
- ✅ Applied dynamic inline styles
- ✅ Applied conditional CSS classes
- ✅ Combined permanent and conditional classes

---

# Final Summary

- React supports multiple styling techniques.
- Vanilla CSS is simple but global.
- Global CSS can cause style collisions.
- Inline styles are scoped to a single element.
- Conditional styling can be done using inline styles or CSS classes.
- CSS classes are generally better for reusable and maintainable styling.
################################################################################

############################################################################
**Date:10 July 2026
**Epic & Task:**P3.2-D8 — Count Occurrences of a Character (GFG #21 + Codedamn)
**Day segment (if multi-day task):** Seg 3 of 5 · GitHub Issue #190 (OPEN by design)
***************************course trans***********************************
# Count Character in a String (Beginner Notes)

## Code

``` javascript
function countChar(str, char) {
    return str.split(char).length - 1;
}

console.log(countChar("GeeksForGeeks", "G"));
```

## What Does This Program Do?

It counts how many times a letter appears in a word.

Example: - Word: GeeksForGeeks - Letter: G - Answer: 2

## Step 1

``` javascript
function countChar(str, char) {
```

Creates a function named **countChar**.

-   `str` = word
-   `char` = letter to count

## Step 2

``` javascript
str.split(char)
```

Cuts the word wherever the letter appears.

Example:

``` text
GeeksForGeeks

↓

["", "eeksFor", "eeks"]
```

## Step 3

``` javascript
str.split(char).length
```

Counts the pieces.

Result:

``` text
3
```

## Step 4

``` javascript
length - 1
```

Pieces are always one more than the number of matching letters.

``` text
3 - 1 = 2
```

## Step 5

``` javascript
return str.split(char).length - 1;
```

Returns the answer.

## Step 6

``` javascript
console.log(countChar("GeeksForGeeks", "G"));
```

Output:

``` text
2
```

## Complete Flow

``` text
Word
 ↓
split()
 ↓
Count pieces
 ↓
Subtract 1
 ↓
Print answer
```

## Memory Trick

-   split() → Cut the word
-   length → Count the pieces
-   -1 → Count of the letter






What is the question asking?

Imagine two friends have the same letter.

Example:

abaccb

Let's write the positions.

Index	0	1	2	3	4	5
Letter	a	b	a	c	c	b

Now look at a

a  b  a
0  1  2

Between the two a's, there is only one letter (b).

So,

Distance of a = 1

Now look at b

b  a  c  c  b
1  2  3  4  5

Between them are

a
c
c

There are 3 letters.

So

Distance of b = 3

Now look at c

c  c
3  4

Between them

Nothing

Distance

0

The distance array is

[
1,3,0,5,0,0,0,0...
]

Meaning

a → 1

b → 3

c → 0

d → 5

...

Since a, b, and c all match the correct distances,

Answer:

true
Simple Code
function checkDistances(s, distance) {

    let first = {};

    for (let i = 0; i < s.length; i++) {

        let letter = s[i];

        if (first[letter] === undefined) {

            first[letter] = i;

        } else {

            let gap = i - first[letter] - 1;

            let index = letter.charCodeAt(0) - 97;

            if (gap !== distance[index]) {

                return false;

            }

        }

    }

    return true;

}

console.log(checkDistances(
    "abaccb",
    [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
));

Output

true
Step 1
function checkDistances(s, distance) {

We make a machine called

checkDistances

It needs

s

↓

The word

and

distance

↓

The expected gaps
Step 2
let first = {};

This is an empty notebook.

We will remember where each letter appears first.

At the beginning

Notebook

(empty)
Step 3
for (let i = 0; i < s.length; i++)

This means

Read the word one letter at a time.

For

abaccb

The computer visits

Index 0

↓

a

↓

Index 1

↓

b

↓

Index 2

↓

a

↓

Index 3

↓

c

↓

Index 4

↓

c

↓

Index 5

↓

b
Step 4
let letter = s[i];

Take the current letter.

Example

When

i = 0

Then

letter = "a";
Step 5
if(first[letter]===undefined)

Ask

"Have I seen this letter before?"

At first

Notebook

(empty)

So

a

↓

Not found

Store it.

first["a"]=0;

Notebook

a → 0

Next

b

Notebook

a → 0

b → 1
Step 6

Later we find another a

Notebook already has

a → 0

Now current position is

2

Computer calculates

let gap = i - first[letter] - 1;

That becomes

2 - 0 - 1

=

1

Meaning

There is 1 letter between them.
Step 7

Now we must know

Which position in the distance array belongs to a?

let index = letter.charCodeAt(0)-97;

This looks scary 😄

Actually

a

↓

97

So

97-97

=

0

Meaning

a uses distance[0]

For

b

↓

98-97

=

1

So

b uses distance[1]

For

c

↓

99-97

=

2

Easy table

Letter	Array Position
a	0
b	1
c	2
d	3
Step 8
if(gap!==distance[index])

Compare

Gap

1

Expected

distance[0]

↓

1

Are they same?

Yes

Continue.

Next

Letter

b

Gap

3

Expected

distance[1]

↓

3

Correct.

Next

Letter

c

Gap

0

Expected

distance[2]

↓

0

Correct.

Step 9

If any letter is wrong

return false;

Example

aa

Distance says

1

Actual

0

Computer says

false
Step 10

If every letter is correct

return true;

Output

true
Complete Flow
Word

abaccb

      │

Read one letter

      │

Remember first position

      │

See second same letter

      │

Count letters in between

      │

Check distance array

      │

Correct?

   Yes ↓       No ↓

Continue     Return false

      │

All correct

      │

Return true
Example 2
checkDistances(
"aa",
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
)

Indexes

Index	0	1
Letter	a	a

Gap

0

Expected

1

Not equal

Output

false
Easy Trick to Remember

Imagine every letter has two houses 🏠🏠.

The computer:

Finds the first house.
Finds the second house.
Counts how many houses are between them.
Checks if that number matches the rule in the distance array.
If every letter follows the rule, it returns true. Otherwise, it returns false.




