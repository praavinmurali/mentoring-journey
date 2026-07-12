# Daily Progress Log — Day 02
**Date:11 July 2026
**Epic & Task:** P1.5-D2 — DOM Selection + DOM Projects (S14 + S17)

**Day segment (if multi-day task):** Seg 2 of 3 · GitHub Issue #155 (OPEN by design)
###############################################################################
**course transcript:**
# Section 12 — Getting Started with JavaScript

---

## L1-L6: Linking JS, Variables, Primitive & Non-Primitive Data Types, let/var/const

### Definition
JavaScript is the language used to add interactivity to HTML/CSS. It can create, modify, and style HTML elements. A **variable** is a named container used to store and reuse data. **Data types** define what kind of value a variable holds.

### Key Concepts
- **Linking JavaScript to HTML** — 3 methods:
  1. **Internal** — `<script>` tag written inside HTML (usually in `<head>` or before `</body>`).
  2. **Inline** — JS written directly in an HTML attribute, e.g. `onclick="alert('hi')"`. Not recommended (no separation of concerns).
  3. **External** — JS written in a separate `.js` file and linked via `<script src="script.js"></script>` placed at the bottom of `<body>`. **Most recommended** (follows DRY principle, keeps separation of concerns, easier debugging).
- **Debugging tools**: `alert()` shows a popup; `console.log()` prints to the browser console (opened via right-click → Inspect → Console).
- **Variable declaration** = keyword + name + value (e.g. `let age = 30;`).
- Variable names should be **descriptive** and use **camelCase** (e.g. `firstName`).
- You **cannot redeclare** the same variable name with `let`/`const` in the same scope.
- **Data types** are grouped into:
  - **Primitive** (immutable, store a single value): Number, String, Boolean, Undefined, Null, Symbol.
  - **Non-primitive / Reference types** (store complex data): Array, Object, Function.
  - `typeof` operator checks a variable's data type. Note: `typeof null` returns `"object"` (a known JS quirk).
- **var vs let vs const**:
  - `var` — old way, function-scoped, avoid using it (no block scope protection).
  - `let` — block-scoped, value **can be reassigned**.
  - `const` — block-scoped, value **cannot be reassigned** (throws "Assignment to constant variable" error).

### Important Terms
| Term | Meaning |
|------|---------|
| Variable | A container for storing and reusing data |
| Declaration | Creating a variable (before assigning a value) |
| Initialization | Assigning a value to a declared variable |
| Primitive type | Immutable data type holding a single value |
| Non-primitive type | Reference type holding complex/multiple values (array, object, function) |
| `typeof` | Operator that returns the data type of a value |
| Block scope | Variable accessible only within the `{}` block it's declared in |

### Workflow / Process
1. Link JavaScript to HTML (internal, inline, or external — external preferred).
2. Declare a variable using `let`/`const` + name.
3. Assign a value (initialization).
4. Use `console.log()` to verify output in the browser console.

### Key Takeaways
- Always prefer **external JS files** for real projects.
- Use **`console.log()`** over `alert()` for debugging during development.
- Use `let` when a value will change; use `const` when it should stay fixed. Avoid `var`.
- Primitive = single, immutable value. Non-primitive = complex, mutable structure.

### Quick Revision
- 3 ways to link JS: internal, inline, external (external = best practice).
- Variable = keyword + name + value.
- Primitive: number, string, boolean, undefined, null, symbol.
- Non-primitive: array, object, function.
- `let` = reassignable, `const` = not reassignable, `var` = avoid.

---

## L7-L12: Number Methods, Arithmetic Operators, Comparison Operators, Strings

### Definition
JavaScript provides built-in **methods** for numbers and strings, **arithmetic operators** for math operations, and **comparison operators** to compare values and return a boolean.

### Key Concepts
**Number Methods**
- `.toFixed(n)` — rounds a number to `n` decimal places (returns a string).
- `isNaN(value)` — checks whether a value is "Not a Number."
- `parseFloat(str)` / `parseInt(str)` — convert a string into a number (float/integer).

**Arithmetic Operators**
- `+` addition, `-` subtraction, `*` multiplication, `/` division, `%` modulus (remainder), `**` exponentiation (power), `++` increment, `--` decrement.
- Shorthand: `x++` same as `x = x + 1`; `x--` same as `x = x - 1`.

**Comparison Operators**
- `==` (loose equal) — compares **value only**, ignores type.
- `===` (strict equal) — compares **value and type**.
- `!=` (loose not equal) — checks values only.
- `!==` (strict not equal) — checks value and type.
- `>` greater than, `<` less than, `>=` greater than or equal, `<=` less than or equal.
- All comparison operators return a **boolean** (`true`/`false`).

**Strings**
- Created using single quotes `' '`, double quotes `" "`, or **template literals** (backticks `` ` ` ``).
- Template literals allow multi-line strings and variable injection using `${variable}`.
- Common string methods/properties:
  - `.length` — number of characters.
  - `str[index]` — access a character by index (0-based).
  - `.toUpperCase()` / `.toLowerCase()` — case conversion.
  - `.indexOf(substring)` — finds the position of a substring.
  - `.slice(start, end)` — extracts part of a string by index.
  - `.replace(old, new)` — replaces a substring.
  - `.concat(str2)` or `+` — joins strings together.

### Important Terms
| Term | Meaning |
|------|---------|
| Arithmetic operator | Symbol used to perform math operations (+, -, *, /, %, **) |
| Comparison operator | Symbol used to compare two values, returns true/false |
| Strict equality (`===`) | Compares both value and data type |
| Loose equality (`==`) | Compares value only, ignores data type |
| Template literal | String created with backticks, supports `${}` injection |
| `.slice()` | Extracts a portion of a string using start/end indices |

### Workflow / Process
1. Perform calculations using arithmetic operators.
2. Use number methods (`toFixed`, `parseFloat`, `parseInt`) to clean/convert values.
3. Compare values using `==`/`===` etc. to get boolean results.
4. Build/manipulate strings using template literals and string methods.

### Key Takeaways
- Always prefer `===` over `==` to avoid unexpected type coercion bugs.
- `toFixed()` is useful for formatting money/percentages.
- Template literals (backticks) are the modern, preferred way to build dynamic strings.
- String indexing starts at **0**.

### Quick Revision
- `toFixed()`, `isNaN()`, `parseFloat()`, `parseInt()` = number methods.
- `==` checks value only; `===` checks value + type.
- Strings: single quote, double quote, or backtick (template literal).
- `.length`, `[index]`, `.toUpperCase()`, `.slice()`, `.replace()` = key string tools.

---

# Section 13 — Advanced JavaScript — Functions

---

## L2-L10: Function Types, Declaration, Parameters, Return, Expression, Arrow, IIFE, Default Params

### Definition
A **function** is a reusable block of code that performs a specific task. Functions help avoid code duplication and make code modular and organized.

### Key Concepts
- **Characteristics of functions**: reusable, modular (breaks code into manageable chunks), accepts **parameters** (input), and can **return** a value.
- **Function Declaration** — named function using the `function` keyword:
  ```js
  function addNumbers(a, b) {
    return a + b;
  }
  ```
- **Function Expression** — function assigned to a variable (usually `const`):
  ```js
  const addNumbers = function (a, b) {
    return a + b;
  };
  ```
- **Arrow Function** — concise syntax using `=>`:
  ```js
  const addNumbers = (a, b) => {
    return a + b;
  };
  // Shorter form (implicit return, no braces needed):
  const addNumbers = (a, b) => a + b;
  ```
- **Parameters vs Arguments**:
  - **Parameter** = placeholder defined when **declaring** a function.
  - **Argument** = actual value passed when **calling/invoking** a function.
- **Return keyword** — sends a value back from the function so it can be reused elsewhere in the code (instead of just logging/alerting inside the function).
- **Anonymous Function** — a function without a name; commonly used as a **callback function** or inside an **IIFE**.
- **IIFE (Immediately Invoked Function Expression)** — a function that runs immediately after being defined, wrapped in parentheses:
  ```js
  (function (a, b) {
    console.log(a + b);
  })(2, 3);
  ```
- **Default Parameters** — assign a fallback value to a parameter in case no argument is provided, preventing `NaN`/`undefined` errors:
  ```js
  function multiply(a = 1, b = 2) {
    return a * b;
  }
  ```

### Important Terms
| Term | Meaning |
|------|---------|
| Function declaration | Named function created with the `function` keyword |
| Function expression | Function defined and assigned to a variable |
| Arrow function | Concise function syntax using `=>` |
| Parameter | Placeholder input defined at function creation |
| Argument | Actual value passed when calling the function |
| Return | Keyword that sends a result back out of the function |
| IIFE | A function that executes immediately after being defined |
| Default parameter | Fallback value used when no argument is passed |
| Callback function | A function passed as an argument to run later (often anonymous) |

### Workflow / Process
1. **Define** the function (declaration, expression, or arrow).
2. **Write logic** inside the function body.
3. **Call/invoke** the function with arguments.
4. **Return** the result if it needs to be reused elsewhere.

### Key Takeaways
- Function declarations are hoisted; expressions/arrow functions are not.
- Arrow functions are the most concise but can look unfamiliar to beginners at first.
- Always use `return` if a value is needed outside the function (don't rely only on `console.log`).
- Default parameters prevent bugs when arguments are missing (avoids `NaN`).

### Quick Revision
- 3 main function types: **declaration**, **expression**, **arrow**.
- Parameter = defined at creation; Argument = passed at calling.
- `return` sends data out; without it, the function outputs `undefined`.
- IIFE = function that runs immediately, written as `(function(){...})()`.
- Default parameters = `function(a = 1, b = 2) {}`.

---

## L11-L18: Projects — Calculator, Character Tool, BMI Calculator, Grading System, Color Changer, Music Player, Counter

### Definition
Hands-on projects applying functions, operators, and DOM manipulation to build small, functional JavaScript applications.

### Key Concepts

**1. Simple Calculator**
- Four separate functions (addition, subtraction, multiplication, division), each built using function declaration, expression, or arrow function, taking two parameters and returning the result.

**2. Character Counter Tool**
- Functions to: get text `.length`, convert to `.toUpperCase()` / `.toLowerCase()`, and `.slice()` part of a string based on start/end index arguments.

**3. String Formatting Tool**
- A single function that takes two strings, converts one to uppercase and the other to lowercase, then **concatenates** them together with spacing and returns the combined result.

**4. BMI Calculator**
- Formula: **BMI = weight / (height × height)**.
- Function takes `weight` and `height` as parameters, calculates BMI, then uses **if/else if/else** conditional statements to determine status: underweight (<18.5), normal weight (<24.9), overweight (<29.9), or obese (else). Returns the status.

**5. Student Grading System**
- Function takes `totalMarks`, `obtainedMarks`, and `classAverage`.
- Calculates: `passingCriteria` (50% of total), `exceptionalCriteria` (80% of total).
- Uses comparison operators to determine `hasPassed`, `hasPerformedExceptionally`, and `isAboveAverage` (each a boolean).
- Returns all three results together as an **object**.

**6. Dynamic Color Changer (DOM Project)**
- Uses `document.querySelector()` to select elements (by class `.btn1`, tag `body`, etc.).
- Uses `.addEventListener('click', callbackFunction)` to respond to button clicks.
- Changes styles dynamically: `element.style.backgroundColor`, `element.style.fontSize`.
- Includes a reset button to revert styles to default.

**7. Music Player / Soundboard**
- Uses `document.getElementById()` chained directly with `.addEventListener('click', ...)`.
- Uses the built-in `new Audio('path/to/file.mp3')` object and `.play()` method to play sound files when buttons are clicked.

**8. Counter App**
- Uses a global `let count = 0` variable.
- Buttons (increase, decrease, increase by 10, reset) each use `.addEventListener('click', ...)` to modify `count` (`count++`, `count--`, `count += 10`, `count = 0`).
- Updates the displayed value in the DOM using `element.textContent` or `element.innerHTML` (innerHTML allows embedded HTML tags/styling; textContent does not).

### Important Terms
| Term | Meaning |
|------|---------|
| DOM manipulation | Using JS to select and modify HTML elements |
| `querySelector()` | Selects an element using a CSS-style selector (class/tag/id) |
| `getElementById()` | Selects an element directly by its `id` attribute |
| `addEventListener()` | Attaches a function to run when an event (e.g., click) occurs |
| `innerHTML` | Injects content into an element, allows HTML tags |
| `textContent` | Injects plain text content only, no HTML tags |
| `new Audio()` | Built-in JS object used to load and play audio files |

### Workflow / Process (typical DOM project pattern)
1. Build the HTML structure (buttons, display elements).
2. Link the external JavaScript file.
3. Select DOM elements using `querySelector()` / `getElementById()`.
4. Attach `addEventListener('click', callback)` to each interactive element.
5. Inside each callback, update state (variables) and reflect changes in the DOM via `innerHTML`/`textContent` or `.style`.

### Key Takeaways
- Real projects combine **functions + operators + DOM selection + event listeners**.
- `innerHTML` vs `textContent`: use `innerHTML` only when you need to inject HTML markup; otherwise prefer `textContent` for plain text/values.
- Conditional statements (`if/else if/else`) are essential for building logic like BMI status or grading results.
- Returning an **object** from a function is useful when a function needs to produce multiple related results (e.g., grading system).

### Quick Revision
- Calculator = 4 functions (add, subtract, multiply, divide).
- Character tool = `.length`, `.toUpperCase()`, `.toLowerCase()`, `.slice()`.
- BMI = weight ÷ (height × height), classified with if/else if/else.
- Grading system = returns an object with pass/exceptional/above-average booleans.
- Color Changer & Counter = `querySelector`/`getElementById` + `addEventListener` + `innerHTML`/`textContent`/`.style`.
- Music Player = `new Audio('file.mp3').play()`.

This section is dedicated for building projects using HTML, CSS and JavaScript.

What this section doesn't cover is CSS and HTML.

The templates will be provided.

We are going to focus on JavaScript, but before beginning this section, unless you have covered the

previous concept to this point, because we are going to combine all those concepts in the various projects

that we are going to build.

All right.

With this one being said, let's look at the first project that we are going to build, which is called

Smart Loan Calculator.

So here I'm going to provide the loan interest rate loan terms.

And this one will give me the summary.

So if I want to borrow let's say $2,000 and then the interest rate is 15%.

And I'm going to pay this 1 in 5 years.

Then calculate.

And these are the summary about my loan and this is what we are going to build.

So here the starter template will be provided which is this one.

This is without JavaScript.

So let's get back to Visual Studio Code.

To get started in here I have provided the starter template and then the final one we are going to work

on the final one.

So if I open the HTML this is the structure for our HTML part of it.

And then I have linked up the JavaScript and this is the CSS.

So let's look at the structure for the HTML which is this one.

And once again this is a preview.

So we're going to have these input fields.

And that is the loan amount interest rate and then loan term.

So if you look inside the HTML they begin from here.

And that is this container.

This container wraps everything inside.

And this is a title.

And then the description, which is this one?

The next one is a long input field.

And in here we have the input field with the id equal to amount.

And this is a label.

Then we also have the interest rate input which is this with the icon with the percentage sign and the

long term which is this one.

And this is where we are going to see the summary.

For example the monthly payment.

And going to inject the value inside here like that.

Let's get back to the JavaScript and then get started.

First step is that we are going to select the element.

So let's look at the first one and that is the calculate btn.

And that is a button which is this one with the id equal to calculate btn.

And it goes like calculate btn N is equal to document dot, get element by id and the id is called calculate

btn.

The next one is the amount.

If you look inside the input field this is the amount input field with the id equal to amount.

So I'm going to change this one to amount.

And I'm going to name this one as amount input.

And then after that let's select the interest which is this one back here.

Change this one to interest.

Input.

The next one is going to be the year to pay which is this one is the amount I want the years which is

this one.

So change this one to years and then years input.

Then the next one is the monthly payment.

If you scroll here, this is the span with the ID equal to monthly.

So back here I'm going to change this one to monthly payment.

And then the total.

If you look at the final one this is the monthly that we are selecting the total and then the total

interest.

So let me say that the summary the next one is going to be the total and that is the total payment.

Then lastly is the interest rate which is total interest.

And change this one to total interest payment.

Now we have selected all the input these ones and then the summary.

So now it's time for us to perform the calculations of the interest rate.

Let me introduce to you one more event, which is called document Content Loaded.

Let me write the function here and I'll explain what I mean.

Document dot add event listener and then pass in the event which is called document content loaded.

The purpose for this event is that it is going to be fired as soon as the HTML is being loaded.

And this is very important because JavaScript is going to be interacted on the HTML.

So in case the HTML is not being loaded, therefore the JavaScript cannot interact with the application.

In this way you're going to face some bugs.

So to avoid all these ones, we want to make sure that the HTML and CSS are being loaded before using

the JavaScript on them.

So in here I'm going to pass the callback function.

And then I'm going to wrap our entire code inside.

So in here I'm going to place everything here.

Nice.

So the next one is the function to calculate the loan for this unless you know the formula for calculating

loan.

So here I'm going to have a function and that is calculate loan as that.

So first of all we will need the principal.

So here const principal is equal to I'm going to convert everything to a number by using parsefloat.

And I'm going to take the amount input dot value.

Remember that we are taking what the user is providing from the loan input here and that is the amount.

And lastly let's bind the event to the calculate btn.

So here is going to be calculate BTN dot add event listener.

And the event for this is going to be click and then pass in the function.

And that is our calculate loan.

It is loan but not load.

All right.

So let's log the principal and let's see it in the console.

If I provide let's say 20 and I got the result which means that the function is working to get the principal.

Let's also get the interest I'm going to copy this one and change this one to interest.

And the interest is from the interest input dot value.

To get the interest divide by 100 and then divide by 12.

This one will give you the interest and also the payment.

So change this one to payment and the input is from the years years input.

Let me check if I have the years input.

Well for some reasons we didn't select the year.

So let me quickly select the years here and change this one to years input.

If I check the years here, which is the input which is this one.

All right.

So back here for the payment we're going to take the years input dot value then multiply by 12.

Let's have some validations to make sure that a user is providing valid numbers.

So here as if it's not a number then pass in the principal or is not a number.

Then pass in the interest or the is not a number, then pass in the payment.

Then in here we're going to elect by saying that please enter valid numbers.

Then lastly we are going to return this, which means that we're going to stop the execution of the

other codes in case the user is not providing valid numbers.

Below here we are going to calculate the monthly payment and it goes like this const x is equal to math

dot power.

And then one plus interest and then comma the payment.

This is how we calculate the monthly payment.

And then const d monthly is equal to the principal.

Then multiply by our x.

Then multiply by the interest.

And then divide by x minus one.

So this is the formula for calculating the monthly payment.

Let me explain this code which is the math dot power.

This is a function that calculates the results of raising base to the power of exponent.

And this one takes two arguments.

One is a base and then the power.

So in here the base is one plus the interest power the payment.

And this is the formula to get the monthly payment.

Next step is let's check for validation by using what is called is finite.

And this is a function that is going to return true if the value is a finite number, and that is if

it is not, not a number or infinity or minus infinity.

So in here I'm going to pass in the monthly payment.

Then below here I'm going to perform the main logic for the calculating of the monthly payment and then

the interest.

And it goes like const total is equal to month three.

Multiply by the payment and then the total interest is equal to total minus the principal.

Then you're going to display the results.

Let's begin with the monthly payment.

So up here we have the input as monthly payment.

I'm going to take that dot text content.

Then I'm going to assign to the month three here.

Then the next one is going to be the total.

So we're going to take the total payment and then change this one to that.

And then the value for the total is this one.

And then assigned to tutor.

The next one is the total interest rate.

This is the element change to that, and then this is the total interest rate with this one.

Let's try it out.

If I reload and provide a loan of say 2000.

Interest rate is 10% in four years.

Calculate and this is the result.

We can format this one.

And we can also include some animations as compared to the final one.

This is the animation.

So let's just do that.

So back here after the function to calculate let's have a function for the animation.

And I'm going to use function as animate.

Then this function will take in the element.

And then the start and and then the duration.

Let's have the start time as start time is equal to performance dot.

Now another inner function as update and this one will take in the current time.

All right let me explain the performance dot.

Now this is a method that returns a high resolution timestamp measured in milliseconds.

In this function for update I'm going to get.

The elapsed time is equal to the current time minus the start time.

Then get the progress const progress is equal to math dot min and then pass in the elapsed over the

duration.

Then comma one math dot min returns Retains a minimum number and then cost current is equal to start

plus, then the parentheses and minus start.

Then multiply by the progress.

So now it's time for us to inject the content into the Dom by using the element.

The element can be the monthly payment total or the total interest.

So here are text content is equal to the current which is this one.

Then the next step is that if the progress is less than one, then we are going to call the update by

using what is called Requestanimationframe and then pass in the update function.

The Requestanimationframe is a function that schedule the update function to be called before the next

repaint.

Else here we're going to call the update as that.

Well, this one is supposed to be outside the update function.

Sorry, it's supposed to be here as that.

All right.

So now it's time for us to use the animate value.

So we're going to use it in the calculate loan here where we are displaying the result.

So now I'm going to call the animate value and then pass in the monthly payment.

Remember that it takes in four things the element the start end and then the duration.

So for the first one the element is the monthly payment.

And then comma the start is zero.

Start from zero and then comma.

The end is going to be the monthly and then the duration as 1000 milliseconds.

So I'm going to copy this one and paste for the total and then the total interest.

So here as total payment.

And then the actual value is total.

And this one is the total interest rates as the element and then the total interest.

And that is it.

So now I can remove these ones.

All right.

So let's try out reload and provide something like this.

And now it worked.

But let's try to format this 1 to 2 decimal places.

And we can do it where we are injecting to the Dom by using dot to fixed.

All right.

So let's try it out.

If I provide 4000 the interest rate 19.

And then in four years.

And now we got the result.

All right guys.

So here ends this project.


We are going to build our first JavaScript project called Counter App.

The purpose for this project is to increase, decrease or reset a value.

So if I click on the increase, it has been increasing by one and I can decrease by one as well.

And I can reset.

If I decrease one more time it is decreasing to negative values and if I increase, it is being increasing.

And the purpose for this project is to show you how to deal with Dom manipulations.

And before beginning this project, unless you are familiar with bootstrap or CSS.

And for this one we have already discussed.

And lastly Dom manipulations.

And that is to be able to select elements using JavaScript.

And this one also we have already discussed about it.

But take note about this.

We are not going to deal with the styling.

The starter code will be provided with the styling and that is using bootstrap.

Our logic is to use JavaScript to interact with it to make it more dynamic.

And this is what we are going to build or this is our starting point for this one.

If I click on increase, it is doing nothing because we haven't implemented JavaScript.

So let's get back to Visual Studio Code to put them into practice.

Before beginning, let me show you my extension and theme in case you might have interest with.

For my theme, I'm using what is called Tenacious Design theme, which is this one.

And for my icon I'm using helium icon.

All right, and better comment for styling my comment and code.

Spell checker is going to avoid spelling mistakes as you move on, with With this one being said, let's

get into code.

I have created a folder called Simple Counter App and inside we have the final source code and then

the starter code.

I'll provide you with the starter code with this bootstrap classes.

And I have linked up the JavaScript.

And for the JavaScript it is empty.

So we're going to start with a starter template.

So I'm going to open the final one.

So in here we have the starter code with the bootstrap.

So let's look at the structure.

We have linked bootstrap as that.

And for this one we have done it many times.

And then in here I'm using the container and I have this element And take note about this.

Since we are going to select the individual element, let me preview this one in the browser and this

is what we have.

The whole logic is that we are going to have a dynamic value in this case this one.

So when I click on the increase or decrease or reset I want to interact with this value.

This means that we are going to find a way when a user clicks on this button called increase, we are

going to change this value.

This means that we are going to select this element.

For example the counter value, the increase, decrease and reset.

So let me show you where we have this zero which is this div line number 25, which has a value of zero.

And if I change this 1 to 20 and if I refresh it I have it as 20.

So I'm going to reset back to zero.

And when using bootstrap we are going to provide our own identifier to be able to identify the individual

element.

Instead of using class, we're going to use ID because bootstrap uses these classes.

But still we can append our custom class, for example counter value for this one.

But let's use IDs to make it more descriptive.

So where you see id, it means that we are going to use JavaScript to target that.

So we have the id for the counter value which is equal to counter value, and for the button I have

an ID called increase button, and then decrease button and then reset button.

So we are going to select these element.

So let's get back to the JavaScript which is this one.

The first step is that we want to make sure that the page is being loaded before we can interact with

the element.

This is where an event listener called Dom Content Loaded comes in.

So I will say that n is equal to document.

On that we have what is called the add event listener.

And in here I'm going to pass in our event listener we have these ones.

What we are going to use is called Dom content loaded.

And then our callback function as that.

So if I log something like loaded now let me open the console and we have it here as loaded.

All right.

So now it's time for us to select the element.

Because at this point the HTML content are being loaded into our browser.

So if I check the browser here, we're going to see the HTML document or element as that, meaning that

they are being loaded.

Perfect.

So it's time for us to select the individual element.

So here remove this one and I will say select element.

Let's begin with the counter value.

Remember, the id here is called counter value.

Therefore, I will say const counter value is equal to document dot get element by id which is equal

to the counter value.

And if I log the counter value.

Let's let's see in the console and we have the element being selected.

All right.

So next step is that you're going to select the increase and decrease buttons which are these ones as

that.

So make sure to type the exact value for the IDs.

So here I will say const button or btn is equal to document dot get element by id and the id is called

increase btn.

The next one is going to be decrease btn.

Change this one to decrease btn.

And lastly the reset button as reset btn and change this one to reset btn.

So to confirm let's lock the counter value, the increase btn decrease and then reset btn.

Let's see and we have the individual element.

So let's begin by adding event listeners.

First of all this is going to be a global value meaning that when a user click on this one we are going

to change the value.

So I'm going to remove this one.

And I will say global value.

And I'm going to use let instead of const because we are going to update the value.

By default we will say zero.

Now it is time for us to interact with this value.

By using event listeners.

I will say add event listeners to the buttons.

And let's begin with the increase BTN btn add event listener.

And the event type here is equal to click.

When the user click on this one we are going to fire or call this callback function.

So here we are going to increase the counter with one.

And that is plus plus.

So if I log the counter here let's see.

Let me open the console.

If I click on the increase, as you can see, we have it as one and we have it as two and as that.

So instead of dumping it in the console we are going to place it here.

And remember we have selected the counter value in this case this one.

Therefore I will say update the counter value which is equal to the counter value.

Dot text content is equal to the count.

Now let's try out refresh.

Click this one.

As you can see it is being increasing.

Let me have one for the decreasing.

I have copied that.

Change this one to decrease and change this one to minus.

Minus and that is it.

And let me refresh increase decrease.

And it worked.

And lastly is the reset.

I believe you know the trend now.

Or what are you going to do here is to change this one to equal to zero.

And that is it.

So moment of truth increase.

Decrease where the decreasing is not working.

Let me see.

Oh change this one to reset instead.

All right.

And let me try again.

Decrease reset increase reset.

Perfect.

Right.

But for this code we have repetition of codes and that is updating the counter value.

We have one here, one here and one here.

If you do this we are not obeying the dry principle and that is don't repeat yourself.

Because of that, we are going to extract this one into a function and reuse it.

So here I will say update counter function which is equal to function.

And I will say update counter.

And I start.

And in here I'm going to take the counter value dot text content.

So supposed to be inside the event loaded.

Yeah, this one here.

And which is equal to the count.

So instead of using this I'm going to comment out this one and use update counter I'm going to copy

this one.

Let me change this one to counter here.

I got this underline because of the code spellchecker extension.

Comment this one and remove this one with this one.

Save it and let me refresh increase reset decrease reset.

Now we are obeying the drive principle.

So guys here ends this project.

But we have one problem and that is if I refresh the page.

As you can see, the data is being lost.

In case we want to persist this data, then we have to use what is called local storage.

So you're going to have a different version of this project where we're going to use local storage.

Let's continue in the next video.




This project is dedicated for practicing all the concepts that we have learned from the beginning of

JavaScript to this point.

So we are going to focus on the JavaScript only, which means that the HTML and then the CSS will be

provided.

And this project is called Split and Share or tip calculator, and says that it is a smart way to calculate

and split bills with friends, perfect for dining out group activities or shared expenses.

Let's say that we went out for dinner and the bill was $500, and we have the service rating for tipping.

So if we give the person 15% our service rating and number of people that went out for dinner, let's

say two and this is a breakdown tip amount is 75.

Total bill is 575.

Per person is this amount and tip per person is this amount.

And as you can see the instance calculations.

So if I change this one to something like ten, the result has been calculated without us clicking on

the calculate split.

And I'm going to show you how to do this one.

So let's get back to Visual Studio Code.

For this I have provided the starter template with the HTML and then with the CSS without the JavaScript.

So we begin with the starter template.

So now I'm going to work inside the final one with empty JavaScript.

And with this and with CSS.

And then the HTML.

And this is a preview.

Let's look at the structure for the template.

I have linked up the CSS, and I've imported some Google fonts and font awesome icons and this is the

input fields.

We will need the amount then the services.

And that is the tipping for the input group.

And this is the button to calculate.

Let me provide an ID by saying calculate btn and this is where the result will be with the tip amount

total bill.

And it has various IDs.

So let's get back to the JavaScript and then get started.

First step is the function to calculate the tip.

And it goes like function.

And let's select the individual input fields.

The first one is a bill which is this one.

So const bill amount is equal to document dot get element by id and the id is equal to bail.

And I want the value.

And let's convert everything to a number by using Parsefloat or Parseint.

All right.

The next one is going to be the service quality which is the select here.

Service quality.

And that is a service here.

So change this one to service and then service quality.

And we will need the number of people with the ID equal to people which is this one.

Replace with that then here as number of people.

We are done with the input fields.

So the next one is let's perform some validations and it goes like this.

If the bill amount is not a number or the bill amount is less than or equal to zero.

Then we're going to elect by saying that.

Please enter a valid bill amount.

Then lastly we're going to return.

And also here we're going to check if the number of people is less than one.

Then we're going to elect by saying that please enter at least one person.

And then let's return.

Now it's time for us to calculate the values.

And it goes like this const tip amount is equal to bill amount.

Then multiply by the service quality and then const total amount is equal to bill amount plus the tip

amount.

And let's calculate per person which is equal to the total Amount divided by number of people.

And lastly, tip per person, which is equal to tip amount divided by the number of people.

And that is it.

It is time for us to display the result to the Dom.

So I will say that display result with two decimal places.

And we're going to select the tip amount which is this one.

So back here I'm going to use the chaining by using document dot get element by id.

The id is tip amount and I'm going to use text.

Content is equal to the tip amount.

But I want to convert to two decimal places.

I'm going to use Backtick.

And I want to inject the dollar sign.

So one more this sign.

And then curly braces and then tape amount.

Then use to fixed by passing in two decimal places, and the next one is going to be the total amount,

which is this one.

So change this one to total amount.

And here as total amount.

Then the next one is going to be tape per person or per person.

Yeah this one instead.

So change this one to per person.

And the value here is per person.

And lastly it's about the tape per person which is this.

Then replace with this one.

And then the value is this one.

All right.

So last step is let's select the button which Is calculate btn.

So I'm going to add event listener and it goes like document dot get element by id and the id is calculate

btn dot add event listener which is click event.

And then the function which is calculate tip and that is it.

So let's try it out.

If I reload and then provide for example 900 and then 10% three and we got please enter a valid bill

amount.

Well it's supposed to be is not a number.

Sorry guys.

Yeah.

So it will work.

Now I'm going to provide let's say 10% tip and then four people calculates and we got the result.

The last step is that when I perform the calculations without clicking on the calculate btn.

So in here I'm going to show you a concept called query selector.

Or remember that we are going to fire the function anytime a user interacts with each of these input

fields, which means that we need to select all of these input fields.

This is where query selector all comes in.

So I will say calculate based on input changed or change.

So here I'm going to select all the elements by using query Selector all.

And what are we selecting.

I'm going to select the input fields and then comma the De-select.

Remember that you also have the select which is this.

So we have selected everything.

And then this is going to be an array.

So if we assign to what is called all elements is equal to that.

And let's log the all element and let's see in the console.

And we have node list with the input with the people.

And then this one as well.

So we can loop through this one and call the function by using dot for each.

Remember that this is an array.

Therefore we can use foreach on that.

And for this one.

Also, we have already discussed and we have access to the individual elements in the array here.

And then this is the callback function.

So if we log the elements, you're going to see the individual input fields.

So let's see.

And we have this one and that we don't have the select where there is no code here.

Yes.

And this one is that all right.

So for this we have the select and then the two input fields.

Therefore we can add the event listener on each of these elements by using elements dot add event listener.

And the event here is going to be input event, which means that if the user interacts with the input

we want to fire the function.

So comma here and we're going to call the calculate tip.

And that is it.

If I reload and then provide something like 900.

As you can see it has been calculated if I change this one to that and number of people to that, it

worked.

So guys here ends this project.




We are going to build a prototyping project using JavaScript.

As you can see on the screen it says I am a designer, a developer, and then a freelancer.

We are going to use third party library to build this project, and we are going to use typed JS.

If you search for type JS, it will take you to this official documentation.

So these are the installation steps by using npm or yarn or with a browser.

For this we're going to use the CDN.

So click on the view on GitHub.

And then let's look at the installation.

Or what we need is to use this link in our project.

And let's look at the logic here in the JavaScript we're going to have this logic.

So I have already copied this link.

And then in the project here I have provided both the final and then the starter code for the starter

code.

I have already linked the CD in with our custom JavaScript.

So let's focus on the final one, the HTML and then the CSS have been provided.

We are going to work on the JavaScript.

So based on the documentation or what we need is to follow these steps.

And that is let's see here by having a variable which is equal to typed and then new typed and pass

in the element where we want to inject.

So if you look inside our HTML we have what is called auto type.

So this is what we are going to pass in to that.

So back here it goes like this const typed is equal to new then typed.

Then pass in the where we want to inject it is auto type.

So copy that and then dot auto type.

The second argument is going to be this properties with a strings.

And that is the text that we want to show.

It's going to be an array.

And I'm going to use developer.

And then come on I'm going to use designer, comma freelancer and then content creator.

You can use unlimited strings.

The next one is the typed speed.

And I'm going to use 100 back speed also 50.

Then provide loop as true so that it will keep typing and then back delay.

All these are from the documentation as 1000.

Then the cursor character.

For this I prefer to use this or double.

It is up to you.

And then smart backspace.

I'm going to use true for this.

And that is it.

So let's look at the results.

And here we go.

For this I use two bars.

If I change this one to something like this it will take effect.

All right.

So it is up to you what to use.

So guys here ends this project.





We are going to build accordion component, and this is mostly used for frequently asked questions.

So if I expand this I have the details about this.

Likewise that and likewise this.

So we are going to use HTML, CSS and JavaScript.

The HTML and CSS will be provided.

We are going to focus on the JavaScript.

And this is a starter template.

We are going to focus on manipulating CSS using JavaScript and that is it.

By default each of these ones has details under it.

So we are going to hide the details under each.

When the user click on any of these, we are going to change the height from zero to something different.

Therefore we're going to see the content.

So let's get back to Visual Studio Code and get started.

in here.

I have provided the starter template with the HTML and CSS without JavaScript.

So let's begin with the final one.

So in the HTML this is a structure.

We have the question like this.

And then the content under each.

And this is a class for the content.

Let's trace this class in the CSS.

And you can see that the height is equal to zero.

So let me trace it.

And as you can see the maximum height is zero.

If I change this 1 to 10 and let's have a look let me reload.

And as you can see we have it.

Let me increase by 100.

And there we go.

So instead of us manually passing in or changing the height.

We are going to use JavaScript and that is it.

So by default the height is equal to zero.

All right.

So let's get back to JavaScript.

And for this I'm going to introduce to you what is called query selector.

Or because for this one we don't want to select individual question.

And then the answer it can happen that in future we can include more of these questions unless we get

back to JavaScript and also modify it.

Because of that we are going to use what is called query selector or to select all instances of this

question.

So back to JavaScript, which is this one I'm going to select by using document dot query selector all.

And what are we selecting.

We are selecting the accordion header.

If you look at the HTML, this means that when the user click on this and that is the question, we

are going to perform some operations by changing the height to ten or to 20.

And each of the question has this class, which means we're going to select all by passing in what is

called the accordion header.

Copy that.

And this is going to retain what is called node list.

It is like an array but it is not.

So if I assign to something like all element here.

And then if I log the all element and open the console reload.

Well for some reasons think I haven't linked up my JavaScript.

So let me just do that as I see and then the script And reload.

And I have now for this.

Let me check.

And this is query selector all.

So let's see it in the console reload.

And we have node list.

This means we can loop through and display each accordingly by using for each.

And then our callback function.

Let's pass in as a button.

You can name it whatever you want.

So if I log the button here, I will see the individual div with the accordion header header header

header.

This means that I can apply the event on this one.

So back here remove the console log and take the button and add event listener on it and then pass in

the event type as click, then the callback function.

All right.

So this is where we are going to get what is called the parent element.

It's going to be as const accordion item.

We want the parent element of this button or the element to do it.

We're going to bring button dot parent element.

So if we lock the accordion item reload.

And unless I click on this to get the parent element.

Likewise this likewise that.

So this is the parent element that I'm clicking on.

And next step is to get the actual content so const as accordion content.

And to get the content we're going to use the button or the element dot next sibling.

So if we lock the accordion element and reload and click on that and we got the content as that.

So now let's get the height of the content for smooth animation and it goes like this const or let me

add a comment as get current height of content for smooth animation.

And it goes like const content height is equal to accordion content dot query selector.

Note that for the accordion content we have the accordion body.

This is what we are selecting and pass in dot accordion.

Let me copy and paste to avoid typing mistake.

And to get a height you're going to use dot offset.

Height.

So if I log the content height.

Reload and click on that.

We have 89.

So we can update the height from 0 to 89.

All right.

So next step is that we are going to check if this item is already active.

Which means that we have a class which is equal to active on it.

If you check the CSS we have a class which is equal to active which are these ones.

And this is going to add some cool animations on it.

So we are checking that if the accordion item Dot class list then.

Dot contains.

We use the contains to check if a certain element has a certain class name.

And what I'm checking here is called active.

It's supposed to be a string as active in case we have one.

Then we are going to close it by using accordion content dot style dot maximum height, then change

to zero.

Then the next step is that we are going to remove the class by using the accordion item dot class list

dot remove.

And what are we removing the active class?

And after removing from the accordion item, let's also remove from the accordion Canadian content,

you want to remove the classes from it.

Else we are going to close any open items first before opening the other.

And it goes like document dot query selector all.

And what are we selecting the accordion item.

So if you check the HTML we have the accordion item.

So back here select that and let append with the active.

And that is from our CSS.

Since we are using the query selector or we're going to use foreach to loop through and I'm going to

pass in what is called active item.

So below here I'm going to take the active item dot class list dot remove and then remove the class

which is equal to active.

After that the accordion item dot query selector.

Then I'm going to select the accordion content which is this one.

So pass in here and then dot style dot maximum height which is equal to zero.

Because in here we are closing any opening tab.

Then after that the active item dot query selector I'm going to select the accordion content again and

remove the class called active.

So here as let me check the class name.

Well it is accordion content.

Yeah the same class name.

And then dot class list dot remove and remove the active.

Then lastly we are going to open clicked item.

This is where we are going to increase the height of the content container as open clicked item.

And it goes like this.

Accordion content dot style dot.

Maximum height is now equal to the content height.

Then let's add the pixels as p x and accordion item dot class list dot add.

Let's add a class which is called active for animations and then accordion content.

Dot class list dot add.

Also add the active and that is it.

So moment of truth.

Click on that.

And it worked.

All right guys.

So here ends this project.




We are going to build a percentage calculator using HTML, CSS and JavaScript.

The purpose for this project is to reinforce all what you've learned to build something like this.

We are going to focus only on the JavaScript.

The HTML and CSS will be provided.

So let's look at the final demo before we get into code in here, let's say I have an amount which is

equal to $500.

And if I want 100% on that, it is going to be 1000.

Likewise, 50% will be this amount.

What about if I want to find 2.99% on that?

This is the amount.

So this is what we are going to build.

So back to Visual Studio Code I have provided the starter code.

So let's begin with the final one.

And this is the structure.

Here we have the input field for the amount which is this one with the id equal to number and a placeholder,

which is 0.00.

The next one is going to be the percentage, which is this.

And then the button to click on to calculate which is this.

And this is where we are going to inject the result into JavaScript.

I have selected the element at this point I believe you know how to select the element.

So let's continue to implement the main logic.

I'm going to have a function to perform the calculations.

So here as function.

Then I'm going to name it as calculate which is equal to this.

And lastly I'm going to call the cart button and add event listener on it.

And the event here is called click.

And then I'm going to pass in the cart function.

So in here I'm going to perform the calculation.

So I will need the number input value and then the percentage value.

So in here I'm going to assign to what is called num or num value, which is equal to.

I'm going to use Parsefloat to convert to a number.

By using the number input on that we have the value.

Remember that this is an input.

The next one is going to be the percentage as percentage value, and I'm going to use the percentage

input.

Let's have some validations.

Simple one.

It is going to be as if it's not a number.

And that is the number value or is not a number for the percentage value.

Then we are going to alert by saying that please enter a valid numbers and lastly return, which means

that you shouldn't continue to the other codes.

And here are the logic for the calculations.

So here I'm going to assign to what is called result which is equal to the parentheses the num value

multiplied by the percentage value.

Then divide by 100.

Then let's have the final which is equal to the num.

That is the num value plus the result, and that is it.

So it's time for us to inject into the Dom.

So I'm going to use the percentage result.

This is where we are going to inject the results.

So here I will say that inject into the Dom and it goes like percentage result dot text content which

is equal to the result.

And then the final one which is the final result.

Then inject definer.

All right, so moment of truth.

This is the final one.

Let me close it.

And this is what we are working on.

If I provide let's say 400 and the percentage is ten and I got it, let's format the currency.

We are going to have a function for that.

So after the cog function I'm going to have a function to format the currency.

And it goes like function format number.

Then for this is going to take in the value or the amount that we want to format then bring in return.

Then in here and you can include your currency, I'm going to use dollar here.

And then plus the amount on that we have what is called to local string which is a method from JavaScript,

and I'm going to pass in two arguments.

The first one is English by using us comma, and then object by passing in what is called minimum fraction

digit.

And I'm going to use two for this.

And the next one is going to be maximum fraction.

Digit is also two.

So now it's time for us to use this.

So this is where we're going to use it because this is where we have the final result.

So in here I'm going to bring the function and then pass in the result value.

Likewise this format number and then pass in the final with this one.

Save it and let's try it out.

I'm going to provide 800 and 100% on.

It is going to be 1006.

If I want to find 10% then these are the final results.

All right guys.

So here ends this project.





The application that we are going to build is called Savings calculator or Growth Saver.

So let's look at the final demo before we get into code.

Let's say you have a savings goal to buy something for example to buy a car.

So let's say that the target is $9,000.

And currently you are having $100 and monthly contribution, and that is how much you can contribute

towards your goal.

Let's say that every month I can donate $100.

So let's calculate the savings.

And as you can see it says that keep nurturing your savings.

You will reach your goal in 89 months.

So let's say that well I can contribute let's say 9000 and let's see the result.

And it says that I will reach my goal in one month.

And indeed after one month I can reach my goal.

But let's say that I have, for example, 5000 and currently I'm having 5000, and every month I can

contribute 5000.

Let's see.

And it says that congratulations, your savings have bloomed to reach your goal.

And as you can see, the progress bar it is going to be filled based on your goal.

And this is what we are going to build.

We are going to use HTML, CSS and JavaScript for this project.

We are not going to start from scratch by writing our HTML and CSS, meaning that the starter template

will be provided.

We are going to focus on JavaScript.

That is the main logic.

And in case you want to learn more about JavaScript and Mern stack, then you can check my main full

stack course.

With this one being said, let's get into code.

So I have already created a folder called Savings Calculator and I have two folders.

this one is the starter code with the HTML without the JavaScript, but with the CSS.

So let's begin with the final one, which is this one.

So let's look at the structure for this project.

Let's begin from here.

I have included Google font and feather icon and my CSS.

For this one we can use font awesome, but I prefer further icons.

So if you search for the icons that come this is the official documentation or site.

So let's see how to use it.

Or what we need is to link the CDN and that is it.

And here is the heading for our template with the subtitle.

And then the SVG icon for the leaf as you see over here.

And we have the input fields with the savings goal and we have the IDs we are going to target this one

to be able to select the individual input fields.

And then we have the feather icon and that is the target.

And then the current saving it has an ID of this.

Likewise the contribution this ID we are going to target these ones to be able to select.

And then the icon for growing.

And this is where the result will be injected.

And this is a progress bar.

We are going to add it dynamically.

And this is a preview of what we are going to build.

So let's begin with the JavaScript.

I have provided some roadmap that we are going to follow.

The first step is that we have to initialize the feather icons, otherwise it will not work.

And the next step is that we are going to select the Dom element.

When I say Dom, it simply means document object model.

And in case you want to learn more about Dom and JavaScript, Like I said that you can check my main

full stack course.

So these are the elements that we are going to manipulate.

For example the goal amount, current savings, the calculate progress bar and then the result.

All right so let's focus on the main logic.

And that is step number two.

At this point we have selected all the Dom elements.

So for the step number two we are going to add event listeners for the calculate button.

So I will say card button dot add event listener.

And then I'm going to pass in a callback function as this.

All right so inside let's begin with the next one.

And that is the validate the user input.

So in here I will say const go amount is equal to parsefloat and then go amount dot value.

We can get the actual value on the input.

And that is let's see this particular element.

And that is a good amount input, which is this one.

And then the id here is good amount.

If we check in the HTML we're going to see the good amount which is somewhere here.

Yeah.

This one is what we have selected and we are validating what the user is entering.

So let's continue with the other input.

The next one is going to be the current savings which is const current savings is equal to parsefloat.

And then current savings which is equal to parsefloat current savings input dot value.

And lastly the monthly contribution which goes like this.

So we're going to make a condition to check in case what a user providing is not a number.

So in here we are going to check in case what a user is providing is not a number.

In this case the good amount, the current savings and then the monthly contributions.

Then inside here we are going to take what is called the result by adding what is called.

Please enter valid numbers.

Remember we have selected the result from here.

If we check in the HTML, we have the result as that.

So you're going to inject the result as well.

In case you have an error we're going to display that as well.

And then we're going to add a class called result dot class list.

And by adding what is called show.

So I will say show here.

And we can locate the class here in the CSS if we search for show which is this one.

All right.

So let's continue And let's return from this function as return.

Then step number four is that we are going to calculate the remaining amount and month to reach your

goal.

So let me place this one inside here as that.

And it's going to be as cost.

The remaining amount is equal to the goal amount minus the current savings.

And then the monthly goal is going to be as math dot seal by passing in the remaining amount.

And then the monthly contribution.

We are passing this one to math dot seal because we don't want to have some decimal places.

So the next step is that let's have the progress percentage which is equal to const progress percentage

is equal to the current savings divided by the goal amount Multiply by 100.

Then for step number five we are going to update the progress bar based on the current savings which

is equal to the progress bar.

Remember we have selected that one.

And on that we have a property called style dot weight.

By increasing the weight based on the percentage.

And then for step number six we are going to display the result based on the savings progress.

So here is going to be result dot Classlist.

And we are going to remove the class called show which is this one.

And let's have what is called set timeout which is this one.

Set timeout is a built in function that takes in a callback function.

And the purpose for the set timeout here is that it is a built in JavaScript function that's going to

allow Allows us to execute a piece of code or function after a specified delay.

So in here we are going to handle UI update and transitions for the result.

So place this one in the setTimeout.

All right.

So here is going to be as if the current savings is more than or equal to the goal amount.

Then we are going to update the UI by taking result dot innerHTML, which is equal to this meaning that

we are going to inject some HTML into the Dom by using this syntax.

So here I'm going to add this text as.

Congratulations, your savings have bloomed to reach your goal.

And for the emoji you can google around by saying that emoji list.

Just copy the emoji and then paste it in your code For example this site.

We have a lot of emojis here.

For example, this one.

Copy that and then you can paste it as that.

All right then else here we're going to take the result dot innerHTML and then pass in this text as

that.

And below here you're going to say result dot class list dot add and then pass in the class called show.

Then as the last argument pass in 100.

And that is it for this project.

So let's try it out.

If I reload let me check my console.

Everything is perfect.

Moment of truth.

Let's say that I'm targeting a thousand and my current saving is 393.

I can contribute 500 and grow.

And there you go.

We have the result.

So, guys, here ends this project.






We are going to build Taskmaster application using HTML, CSS and JavaScript.

And the purpose for this project is to reinforce all what we've learned to this point.

This project is going to be a little bit complex as compared to the other ones, because we are going

to involve a lot of concepts.

So before beginning this project, unless you are familiar how to create element using JavaScript and

how to manipulate CSS, also using JavaScript and all of these ones we have already discussed.

So let's look at the final demo before we get into code.

Let's say that here I'm going to provide coding and also going for dinner and Add.

And let me also include traveling.

And then if I hit enter, it's also added and I can go ahead and then filter by completed and by pending.

If I click on this icon which means that it has been completed, likewise this and I can toggle it as

that and I can go ahead and delete.

And if I reload, as you can see, the data are being persisted, which means we are going to use local

storage to persist our data.

With this one being said, let's get into code for this.

We are going to focus only on the JavaScript.

Because of that, the starter template will be provided with the HTML and then with the CSS.

So let's begin with the final one which is this one.

So let's look at the structure.

First let me hide this one.

And this is what we are going to build without JavaScript.

So let's look at the interface.

We are going to select the input field and also the button.

So if I add for example coding and I click on add it is going to create new element and then append

to the Dom.

This is what we are going to do.

So first of all let's select the input field with the id which is equal to the todo input.

Let's get back to the JavaScript.

And I have provided some roadmaps.

So first of all we are going to get todos from the local storage or initialize empty array.

Because as soon as the application loads we are going to fetch the data in the local storage.

Therefore, we have to get the data from the local storage before the application renders.

So to do that, I'm going to assign to a variable call to dos which is equal to local storage dot get

item and we use get item method to get items from the local storage.

And in here we have a placeholder that holds the data.

For this I'm going to name it as todos in case you don't have to dos.

Then we're going to use empty array and to get the actual data as JSON we are going to pass this one.

I'm going to cut this one from here and use JSON dot pass and then place it here.

Don't worry.

As you move on we are going to save into local storage by using this placeholder or property.

Here.

Let me delete everything from the local storage.

Now to view the local storage right click and then inspect.

And then click on this.

And then go to application And in here we have the local storage and this is our link.

So as you can see here, we have some data that has been saved in my local storage.

These ones are from the previous project that I've built.

So let me delete everything from the local storage.

So now it is time for us to save data into the local storage.

I'm going to have a function for that.

I'm going to name this function as save to dos.

To save it, I'm going to use Localstorage.setitem and then provide the property that's going to hold

the to dos.

I'm going to call this one as to dos and then comma the data that I want to save.

So for this we need to stringify it by using Json.stringify.

Then in here we are going to pass in the to dos.

Here.

Let me use let here because we are going to update the to dos.

So this function save to DOS into the local storage or the task.

Then the next one is going to be a function to render the to dos.

So here as function render to DOS or task.

And before rendering let's have the function to add new to do so here as function add to do in here.

Let's get what the user is providing in the input field.

And note that we have it as to do input, which is an id.

So I'm going to say const input value or just input is equal to document dot get element by id and the

id is equal to to dos.

And let's perform some validations by trimming it.

So here I'm going to say that const the actual text is equal to the input dot value to get the actual

text, and use trim on that to remove any whitespace.

So in case we have the actual text, then we are going to push the new to do into the to dos array here.

So it goes like this.

Take to dos.

That is why we used let here because we are reassigning the value.

So use push on that because it is an array.

And what are we pushing.

We're going to push the following the text.

And then I'm going to assign to the text.

And the next one is completed.

And by default it is going to be false.

If you look at the final one, which is this, let me enter code in here and we have the text.

And then the completed.

By default it is pending and that is false.

If I click on this now the completed has been faded out and I can toggle it as that.

As soon as you push into that, then we are going to empty the input field by using input dot value

and assign to empty string.

And lastly we are going to call the save to dos to save it into local storage as that.

All right.

Well this one is supposed to be a value.

And then sorry guys this one is supposed to be outside the local storage.

Get items perfect.

So we are done with the function to add to dos.

Then let's work on the render to dos.

This is where we are going to create new element and then inject into the Dom.

So let's locate the HTML.

We have a field called todo list which is this one.

Now do you remember when we were creating element using JavaScript?

The steps that we took.

First step is that we need to have the reference point where you want to inject the data.

At this point this is going to be our reference point.

So we are going to select this one.

So back here it is going to be asked to do list is equal to document dot get element by id and the id

is equal to this.

Now we are going to empty everything in the to do list by using innerHTML, which is equal to that.

Now it is time for us to perform some filtering.

At the moment you don't have sample data in the local storage, but let me use the final one so that

we can see what we are doing.

Let me add and then let me say it in here and then add let's check the local storage which is this one.

And now let me see what we are working on.

Which is this one.

Yes.

So this is the sample data that we are going to work with.

As you move on we are going to create new task.

So this is what we are going to show it in the browser.

So below here we are going to filter all the to dos.

So it goes like this.

Const filtered to DOS is equal to to DOS array dot filter.

Remember under the Array, an array of objects.

We talked about the filter.

And then in here we're going to pass in the individual to do I'm going to use arrow function for this.

So in here if the current filter let's have some initialization here as let's say current filter is

equal to or now in here if the current filter is equal to completed, then we are going to return to

do dot completed.

If we look at the individual to do's we have a property called completed.

Else if the current filter let me use uppercase for this.

The naming is up to you.

If it is equal to pending then we are going to toggle it by using the exclamation mark.

Now it's time for us to inject into the Dom.

We are going to loop through the filter to dos dot for each.

For this one also, we have already discussed and then we're going to pass in two arguments to do and

then the index.

Then it goes like this.

We are going to create Li because we want to inject into the UL.

So here it is going to be as const li is equal to document as we did before.

It is equal to create element.

And what are we creating?

Li's.

Then the next step is that we're going to check if to do dot completed.

Then we're going to add a new class to the Li by saying that li dot class list.

Then I'm going to use add to add a new class called completed.

Then below here we are going to inject new HTML element.

So here I'm going to use li dot inner HTML because we are going to include some HTML tags which is equal

to backtick and then some spacing.

Here I'm going to have a div with a class called to do content.

So here as and the class is equal to to do dash content.

Then in between we're going to have a span.

Then the span is going to have a class called to do text.

You can use lowercase or uppercase.

And here comes the actual value dollar sign curly braces and inject to do dot text.

Because on the to do we have the actual message and that is the text we are done with.

The first day of the next one is going to be a div.

So copy this one, paste it.

And the class for this one is called to do actions.

And in here we're going to have a button with icon class by using button.

And the button is going to have what is called data dash index.

Data attribute is used to pass data from HTML to JavaScript.

So now I'm going to assign the value which is equal to.

Then the dollar sign curly braces.

And that is the index.

So let me explain.

What is the data attribute here for this one?

We have already discussed it under the HTML section.

This means it is a way of passing data into HTML, of which we can access it in the JavaScript.

So here the value is equal to index.

And then I'm going to pass in the class.

And the class is equal to action btn completed btn.

And let's have the actual icon.

I have already linked up the font awesome icon so you don't have to link it again.

So in the class here I'm going to provide what is called phase and then space.

We're going to have some condition by saying that dollar sign curly braces in case the to do dot completed

in case we have one.

Then use an icon which is equal to f a dash.

Rotate.

Dash left.

This is what I mean.

Let's look at the final one.

If I click on this icon and now go to the completed, we have this icon which means that if it is completed

then use this icon.

Otherwise by using colon and then use for dash check.

And then we're going to have last button copy and paste.

And for this I'm going to pass in the index.

And then the class is equal to action btn.

Then delete btn class.

And the icon is equal to f a s trash.

So remove everything from here and it is equal to f a s f a dash trash.

And lastly let's append pain to the dome by using to do list dot append child.

And what are we appending?

Appending the li.

Let's call the function here on the initial loads as rendered to dos.

If I do that and then reload.

We don't have any list of to dos because we haven't saved anything into the local storage.

Let's bind into the button.

We have the button class as add to do btn.

So let's get back here.

And this way we have the Add Event listeners.

It's going to be our document dot get element by ID and the ID is equal to add to do which is this one.

And we're going to change it by using Add event listener and event is equal to click and then pass in

the are to do function, which is this one.

So when the user click on the button, it is going to call this function to save into local storage.

And then we need to render the to dos.

So back here if I enter something like coding and it has been added and it has been shown on the page

as well, the filtering, the checking and then delete are not working.

Let's move on to the toggle which is this function and it goes like function toggle to do.

Then we're going to pass in the index of the to do or task that we want to toggle.

We're going to take to DOS and then access the to DOS by the index and then dot completed is equal to.

Then we're gonna invert the to DOS and access the index.

And then dot completed.

This is how we toggle.

And lastly we're going to save to dos and then render the to dos.

All right.

The next one is a delete for delete.

We're going to use the splice method.

So here as function delete to do.

And we will need the index of the to do to delete.

And it goes like this the to dos array dot splice.

Remember this one under the arrays.

And the starting point is the index.

And then delete up to one.

That is one at a time and call render to dos.

Because we have made changes to the array of to dos.

And lastly we need to save the to dos.

Also, before applying the delete and then the toggling, let's add this logic.

For example, if the user enter to do and hit enter, it should save it.

It's going to be the same as this.

So copy and paste.

But instead of click it is going to be key press.

Which means that if a user presses a key, then we are going to trigger this function.

And in this function we have access to the event type.

So if I log the event and that is E here where it's supposed to be to do input because that is the input

field.

So with this one, if I reload and then enter something like coding.

As you can see the event has been fired in here.

We want to trigger the function when a user hit on the enter on the keyboard.

Not just any key.

So back here we can make a condition and that is if on the event dot key.

If the value is equal to enter then we are going to trigger by calling the add to do.

All right so with this one let's try it out.

Let me remove this.

And then if I enter something like 18 and enter it has been saved.

The next step is we are going to work on the deleting and then the toggling.

So how to do it.

We are going to select the to do list.

Let's check the HTML.

And this is what we have.

We are going to select this one and bind event on it.

So below here I'm going to select the element Elements by using document dot, get element by id and

the id is called to do list.

And I'm going to add the event listener which is click event.

And then the callback function.

We have access to the event as that.

So in here let's get the target.

And that is what the user is clicking on.

Remember that we are injecting these buttons into the Dom.

And this is what you see here.

They are buttons that we are displaying but they are in a list.

So we are going to select the button.

So back to the JavaScript which is this one over here.

Let's get the target as const target is equal to Event.target dot closet.

Let's select the button that is the closest one that we will select in case we don't have any target.

Then let's return.

Otherwise let's get the index.

And that is it to do index which is equal to parseint by converting to a number.

Let me use this one and then pass in target dot data set dot index.

Do you remember when we were adding the data attribute into the HTML which is this one?

Now we are accessing the value in the JavaScript by accessing the index on the data.

So back here this one gives us the index of the element.

Therefore we can include some CSS to it by saying that target dot class list dot contains.

If it contains what is called the complete button, that is the class btn, then you're going to toggle

the to do and pass in the to do index.

Else if the target dot class list dot contains the delete dash btn, then going to call the delete to

do and pass in the to do index.

There is E here as else if.

All right guys.

So moment of truth.

If I reload and click on this it has been deleted.

And then I have to toggle it as that.

All right guys this project is complex.

So take your time in case you are confused and ask questions where needed.





We are going to build and deploy a portfolio website using HTML, CSS and JavaScript.

Let's look at the overview for this project before we get into code.

We're going to have a navbar with these links and then the icon for each link.

We're going to have an icon and we're going to use Fontawesome for the icons.

And this is a header with a background image with some gradient on it.

The name and then some description.

And if you look at this button, if I hover my cursor on it, as you can see the cool effect.

And below here we have the profile about the user and then the skills.

And below here we have the recent works.

And as we move on we're going to use the real project that we have built.

And we're going to deploy all the projects and then use the links in our portfolio, which means that

you can find all the projects in your portfolio.

And I will show you how to do this one.

And then we have the form and then the footer here.

And one cool thing about this project is that it is responsive.

If I decrease the browser window, this is the mobile view and I can open the navbar like that.

And this is where JavaScript comes in.

And as you can see it is responsive.

Once again.

As soon as we are done with this project, we will go ahead and deploy all the projects and use it in

our portfolio.

And if I click on the home here, it jumps to the hero section.

Likewise, the about skills works and contacts.

This is what we call internal navigation.

And I will show you how to do this one.

With this one being said, let's get into Visual Studio Code.

And in here I have a folder called core portfolio and let's have the folder structure.

I'm going to have the index dot HTML and then styles dot CSS.

Then the script dot js.

All right.

So let's begin with the HTML I'm going to scaffold using Emmet.

I'm going to call this one as email portfolio.

And you can use your name for this I use Google Fonts called Poppins and then Font Awesome icons.

So let's get back to Google and search for Google Fonts and Google Fonts, and let's search for Poppins.

Let me remove these ones and let's start from scratch.

I'm going to search for Poppins, which is this one, and this is the font that I want.

So I'm going to click on Get Font and click on Get Embedded code which is this one.

So in here we have two options either by using the link or the import in the CSS.

So make sure to click on the web.

And this is what I want.

I'm going to copy that back to my HTML.

I'm going to have a comment as font and then paste that.

The next step is the font awesome CDN.

So I'm going to search for Font Awesome CDN which is this one, and make sure to copy the one that ends

with or dot mean dot CSS and click on this icon back here.

I'm going to have a comment as icons and paste that.

All right.

So now we have linked our font awesome.

And then with our icon the next step is let's link the CSS as link or let me say custom CSS and it goes

like link and then styles dot CSS.

All right.

And lastly the JavaScript script.

And then inside our source and then the script.

And let's preview this one in the browser.

And this is what we have.

So let's get into the HTML before getting started with the CSS.

So first step is that let's begin from top here which means we're going to design the navbar first.

So up here I'm going to have a comment as navbar.

And for the navbar I'm going to use a class called navbar.

So bring nav and then dot navbar.

This is my syntax for adding classes to element.

And then in between I'm going to have a div with a class called Nav content, dot nav, Dash content.

And then I'm going to have the logo, which is this icon with a class called logo.

And then in between I'm going to have the icon.

And that is font awesome icon with a class called face.

And for code to know the icon name, you can go to Font Awesome and then click on the icons and make

sure to click on the three ones, which is this.

And you can search for any icon of your choice.

I'm going to search for code and this is the icon name.

And you can just click on this to copy it the same thing.

All right so with this one let's see what we have.

And this is the icon.

All right.

So after the icon we're going to have the nav links.

So here are dot Now Dashed Links, which is a container that's going to contain the individual links

by using a tag.

And then for the value for this, let me give this one as home and then provide the icon space here.

And then I'm going to give it icon or I dot.

And that is a class name which is phase.

And then after the phase the icon name is called for home.

And let's see what we have.

And this is the home icon.

And for the value for the h ref provide hashtag.

And then the name is called home.

I will explain this one as you move on.

At the moment just bring hashtag and then home, which means that if the user click on the home here,

it should navigate the user to home section.

At the moment, let's leave it as it is.

I'm going to copy this one for the rest of the links.

The next one is going to be about and change this one to about, and then the icon name is called for

user.

And let's see.

Cool.

And after that copy and paste change this one to scales.

And then for code.

And then we're going to have make it lowercase s and then change this one to scales.

This one is going to be the works.

Change this one to works.

And lastly is the contact which is this.

And then for envelope the work here the icon is called for project dash diagram.

And let's see let's Less compared to the final one.

All right.

This is what we have.

Lastly, let's have the hamburger menu on mobile.

That is where we have the hamburger menu which is this one.

And this is an icon called for bars.

So let's just do that.

So back here after the div bring the button.

And then inside I with a class called FAS.

And then the other one is called FA dash bars.

And then for the button provide a class called menu dash btn.

Let's see what we have.

All right.

This is what we have.

Don't worry we will go ahead and style it.

Awesome.

So next step is we are done with the navbar without CSS.

Let's focus on the header Here for the header, let me collapse the navbar which is this.

And then comment as header.

For the header you're going to use header tag as header and then dot header for my class and provide

ID equal to home.

The purpose for this ID is going to be used for the internal navigation.

Do you remember that for the href we provided a value for the href which is equal to home?

And this is going to use to bind to this section that has id equal to home.

So when a user click on the home here it is going to locate a section that has an ID equal to home.

All right.

So that is the purpose for this ID here.

After that we're going to have the content with a div with a class called header content.

And then in between we're going to have the header text.

Then each one I'm going to use hi comma.

Um Emmanuel.

And then some description, a passionate full stack web developer as that.

And lastly, let's have a tag that point to contact.

If the user click on this, it should navigate the user to the contact section.

And a class called CTA Dash BTN.

And I will say get in touch.

And this is how it's going to look like at the end, which is this one.

Get in touch.

We are done with the header.

The next one is going to be about and it goes like section.

You can use either section or div by section has more meaning as compared to dev.

So lets provide.

ID which is equal to about, which means that if the user click on, the about is going to locate a

section with the id equal to about, and then a class is also equal to about, and then in between we're

going to have the actual content as dot about dash content.

Then let's have an image with a div.

Let me provide a class as profile dash img and that is image.

And then let's provide the image.

You can use any image of your choice.

Or you can go to Google and search for basics.

And I'm going to find I'm going to call this one as profile.

And you can copy any of these I use this one by right clicking and then copy image address.

Or you can download and place it in your folder.

All right so here I'm going to have the image.

And let's see what we have.

And this is the image.

Now what has left is the actual content which is this one.

So back here after the image I can collapse it.

And below here I'm going to have a div with a class called about dash text and h2 with a class which

is equal to section title.

And I'm going to say about me and I'm going to have p tag with some description and one more p tag with

some description.

So here I have provided my personal description as this.

You can use any text of your choice.

All right so we are done with this section, which is this the image and then the text.

The next one is going to be the scales.

So here as scales let me collapse this one.

And for the scales we're going to have a section with a class called scales.

And then with ID equal to scales.

This is a shorthand syntax for writing ID by using hashtag instead of dot.

Because dot is for a class and hashtag is an ID, then in between we're going to have dot scales dash

content.

Then let's have H2 with a class equal to section title.

And I'm going to say my scales.

After that it's going to have a div that's going to wrap all the sections.

This is what I mean here.

These sections we need to have a container that's going to wrap this one.

And this is the section title called Mine Scales.

So in here I'm going to give it a class called Scales Grid.

Then in between we're going to have the individual cards.

And that is with the icon title and then the description about your scale.

So the first one I'm going to give it a class called scale dash card.

I'm going to have my first scale and that is JavaScript.

And I'm going to use an icon called phages.

And that is for JavaScript I'm going to use I dot f a b and then space f a dash js.

And let's see what we have.

Let me reload for some reasons it is not showing here.

Oh sorry.

It's supposed to be dash.

All right.

And here we go.

So you can look for any icon of your choice.

If you search for JavaScript, you can see that there is the icon.

I prefer this one.

Let me use it.

This is more beautiful right?

So let me use that and then let me see.

Good.

After that let's have the title.

And that is H3 as JavaScript.

And then some description can use some Lorem text and make sure that it is less.

But I have my own description as this.

So this is the first skill with the icon title and then some description.

I'm going to copy this card for the rest of my skills.

So here I'm going to say that skill one.

Then if I collapse it here as skill two then paste.

And this one is NodeJS.

As for node, change this one to Node.js.

And then the description I'm going to use mine as this collapse it.

And then skill three.

You can include HTML or CSS.

Copy this one paste.

And then the next icon is going to be database.

And change this one to database.

Then the description.

And let's see.

All right I think the icon isn't working.

Let me see this one the final one.

Or we have react also and Node.js database.

So let me see it.

Is it supposed to be for this one.

Is face database.

all right.

And lastly is react.

So let me copy and paste SQL for and change the title to react and then the description.

Then the icon.

This one is f a b and then f a react.

And this is what we have now.

We are done with the skills we are going to work on the recent works, which are these ones?

I'm going to have a comment as works and for the works we're going to have a section with ID equal to

works, and then a class also equal to works.

Then in between I'm going to have a div with work section, and then h2 with a class called section

dash title.

And then the content is.

Recent Saint works.

We are going to have a container that's going to wrap the entire of the wax.

So in here provide a div with a class called wax grid.

And then we're going to have our first work as work one with a class called work dash card.

And the first element is going to be the image.

So here provide img.

And then let's specify the image back to basics here.

I'm going to search for e-commerce app.

All right.

I prefer this one.

Right click and then copy image address and then paste that for the arts.

I'm going to use project one.

As we move on.

We are going to deploy all the projects that we have built and then use it as our recent works.

By the moment, let's just use some dummy content.

Then after the image, we are going to have the work info or the project info, and the first one is

going to be the title and then the description, which is this and that.

Because of that, I'm going to use a div and then wrap the H3 as e-commerce platform.

And then let me provide some description.

You can use some dummy description.

This is too much.

Let me reduce to that.

But let me provide my personal description as that.

And after that I'm going to have the link which is live preview here I'm going to have a div with a

class called work Dash links, and then provide the A tag.

At the moment the href will point to nothing.

Like I said, as we move on we are going to deploy our project and use our personal project link.

At the moment, let's just use hashtag, which means that it won't point to any link.

And after that, I'm going to have an icon with a class called face for Dash.

External dash.

Link.

Dash out.

This one is from Font Awesome.

And let's have a look.

All right, here we go.

So we are done with the first project.

So I'm going to copy the entire of the work one and then change this one to work two for the work two.

The project name is called task Dash management two or Management app.

And then the description.

I What think I used?

Let me check.

Yeah.

Remove that.

Good.

And let's provide an image for the task management app.

Well, let me use any of these.

For example, this one.

Or what about this one.

Copy image address and then replace with this change this one to project two.

All right.

And the next one is going to be work three.

And the name for this project is called Social Media Dashboard.

Then the description.

And let's use well let me use something like this for the project.

And that is the task management app.

This one.

Let me search for social media.

All right.

Let me use this one.

Copy image address.

And replace with that.

Now let's check it out.

And this is what we have.

Let me remove this arrow here.

All right.

So the next one is going to be the contact form which is this.

So back here let me collapse the works.

And here has contact.

And I'm going to have a section with ID called contact.

And then a class also has contact.

and then a div with a class called contact content.

Then H3 with a class called section Dash title.

And I'm going to say get in touch.

Then a form with a class called contact Dash form and remove the action.

Let's have the first input with a label, which is this one.

So here I'm going to have a div with a class called form group.

Then provide a label with a value equal to name, and then the input field with id equal to name and

remove this one.

Let me explain the form attribute here in the label.

Therefore attribute here is going to improve user experience.

Let me show you what I mean here.

If I provide a value equal to name and if I reload, this is an input field.

If I click on the name, as you can see the input field is being focused.

This is because of the for value in the label.

As you can see, the value for the for attribute is the same as the id value here.

This means that we have binded the label with the input field.

But if I remove the id value here, and if I reload and click on the name here.

As you can see, the input field is not focused.

But if I bring it back like that and then if I click on the name here, the input field is being focused.

That is the responsibility of the four attributes in the label.

So the next one is going to be the email.

So copy this and then paste.

Change this one to email.

And then for default I'm going to use email and ID here as email.

The next one is going to be the text area.

So instead of input is going to be a text area.

So remove this and bring in text area with the id value equal to message.

And for must be also message.

And then remove the name.

Here let's provide rows equal to five.

This means the height of the text area.

By default it is five.

And then lastly is the button with a class called submit dash btn.

And I'm going to say Saint message.

Let's check it out.

And this is what we have.

The next one is going to be the footer here.

So after the contact I'm going to have a comment called footer and use footer dot footer as the class.

Let me take this opportunity to show you what is called HTML entity.

If you go to Google and search for HTML entity and let me click on the free format Tocom, which is

this one.

And in here we have the character and then the entity number.

So let's say you want to use the At sign.

Or what you need is to copy this code and use it.

And in case you want what is called copyright which is this I'm going to copy the entity name, which

is this.

And back here I'm going to provide p tag and paste that.

And then I'm going to use 2025.

My syntax and all rights reserved.

Let's have the social media links with a div with a class called social Dash links.

And in here I'm going to have a tag with an icon with a class as f a b space, f a dash GitHub.

And let's have a look.

And I have the GitHub sign.

Copy and paste.

Change this one to LinkedIn.

And this is what we have.

And then Twitter.

All right so we are done with the HTML.

Let's focus on the CSS.

Now that we are done with the HTML, let's focus on the CSS.

First step is that make sure to link up your CSS with the HTML and we have already done that.

Let me remove the JavaScript.

And the first step is that we need to reset the browser defaults.

As you can see, by default we have some padding and some margins between the elements.

So to do that we're going to use what is called universal selector.

And to do it we are going to use what is called universal selector.

And that is the asterisk.

And then in here provide margin equal to zero.

And then padding also equal to zero.

With this one we have removed the padding around the element.

And the next property is going to be what is called box sizing.

And we're going to use border box.

What is the box sizing?

This is a property that determines how the total weight and height of an element is calculated, and

this one includes or excludes padding and border in the element dimension.

When we use a value equal to border box, it simply means that the width and height include content,

padding, and border.

This one makes it easier to control the size of an element because the total size remains constant.

And let's also have the font family.

Remember, we have installed a font family called Poppins from Google Fonts, which is this one.

It is time for us to use it.

So in here, single quote or double quote and the name of the font as Poppins.

As you can see, it has been applied, but let's have a fallback font by using sans serif.

This means that in case this font is not available, then I'm going to use this one as a fallback.

I'm going to introduce to you what is called variables in CSS.

As you all know, a variable a variable is a way of storing information or data in CSS.

Also we have what is called variables.

This means that properties that we are going to reuse in the entire of the application, we can group

it at a particular place and just reuse it.

This is what we call variables.

So to do it bring colon and then route and then the curly braces.

And in here we're going to provide properties that's going to be used often.

And mostly we use colors for that.

So in here I'm going to use underscore underscore and then the name of my variable as primary color.

And then the value is equal to hashtag 4F4 65.

And then In semicolon.

Copy and paste.

This one is secondary color and it goes like 4338K.

Then text color.

We are going to use 1F2937.

And we're going to have gradient start.

And the color is equal to 4F46E5.

And then gradient end.

And it goes like 7C3A ud.

Instead of us typing this color code anytime when I use it, we are just going to reference the variable

name.

So let's begin with the styling of the nav bar.

And this is how I prefer to style.

I always start from the top to bottom.

So let's begin with the nav bar.

So in here I'm going to say nav bar style.

And the class is equal to nav bar.

If you check in the HTML and that is a class, and this is a class called navbar.

So in here I'm going to provide a position equal to fixed.

If you look at the final one let's look at the behavior of the navbar.

As you can see it is being fixed.

That is why I'm using position equal to fixed.

And as soon as I did that, as you can see it has taken the navbar from the normal document flow.

So let's continue.

I'm going to provide a width of 100% and then padding top and bottom.

Use one rem and left and right two rem and then background color.

I'm going to use RGBa with red equal to 255 and then green also two, five, five and then blue two,

five five and opacity are 0.5.

Let me use 0.95 and let's see what we have.

Cool.

And let's provide z index which is equal to 1000.

Z index simply means how the elements are going to be aligned on top of each other.

As you can see here, that when we say 1000, the navbar is on top of every element on the page.

Now let's continue with the nav contents, which is this one?

Copy the class and then dot nav content.

And let's provide maximum width of 1200 pixels and margin top and bottom zero, and then left and right

as auto.

This means we want to center everything and then use display equal to flex and then justify content

space between and align items as center.

And this is what we have.

We have aligned the icon the links and then the hamburger menu here.

The next one is going to be the logo which is this one and that is the icon.

So select the logo and use font size of 1.5 rem.

And then font weight f w for font weight.

That is a shortcut I'm going to use bold and color.

We are going to use our variables here.

And that is the text color.

For the color we're going to use a color which is this one.

This is where the variables comes in.

So let me show you how to use these colors.

So if I want to use a primary color.

I'm going to provide what is called var.

And then in here I have all my intellisense for my variables.

What I want is a primary color and then also display equal to flex and then align.

Items are center and gap which means spacing between the element.

I'm going to use 0.5 rem.

All right.

This is what we have.

Then the actual icon which is the for code I'm going to select the dart logo and then target the icon.

For that I'm going to use font size of 1.3 REM.

All right.

And let's style the nav links which is this one.

So select that and then use display equal to flex and also provide the spacing as gap which is equal

to two rem.

And we have the spacing between them as that.

And let's style the individual links and the attacks.

So here dot nav link space and then the attacks I'm going to provide text decoration as none remove

all the underlines or some.

And then the color we're going to use the text color as var and then text color.

And everything has been changed to black.

And let's provide font weight as f w I'm going to use 500 and then transition.

Let's have some cool animations.

When the user hover the mouse I'm going to change the color only and the duration is 0.3 seconds and

use display equal to flex.

We want to align everything perfectly at the center and then gap equal to 0.5 rem, and then font size

of 0.95.

And then padding of 0.5 rem, top and bottom and zero left and right.

Okay.

This is what we have.

The next one is the actual links, which are these ones in the nav links.

So I'm going to select dot nav links space A and then the icons I'm going to change the font size to

1.1 REM.

All right.

This is what we have.

And on Hoover and that is dot nav links space a column Hoover.

On Hoover I want to change the color by saying that color equal to row.

And I'm going to use the primary color.

And let's see as you can see we have this cool effect is because of the Hoover and then the transition.

All right.

So let's target this one here.

And that is the hamburger menu I'm going to select the class as menu btn dot dot.

And then I'm going to use background as none and then border also none.

And let's see.

All right let's increase the font size as font size as 1.5 REM.

And cursor as pointer and then color.

We're going to use var and then the text color.

But by default we want to hide this one and show it on the mobile.

As you can see for the final one on the larger screen we don't have it, but on mobile.

Let me reduce the browser window.

And we got it.

So to hide it you're going to use a display equal to none.

And this one will hide the menu or the link.

So on mobile you're going to bring it back.

So let's continue.

And the next part is going to be the header which is this one.

So we are done with the navbar.

So let me come here and have a comment as header styles.

Let's go ahead and select the class as header and then provide minimum height of 100 VH.

And that is viewport height and display equal to flex align items center and padding.

Top and bottom zero left and right as two REM.

And if we look at the final one, we have a background image with some gradient on top of it.

To do that, we're going to use what is called background and then linear gradient.

We're going to pass in three things.

One is the angle of the gradient.

I'm going to use 135 degrees comma.

And then the colors I'm going to use RGBa.

For the first one I'm going to use 79.

Comma 72.

99 and comma 0.9.

I'm going to copy this color or this color.

Comma.

Paste that and change this 1 to 1 two four and then five eight, 237 and then 0.85.

And for the first one let's use 0%.

And then at the end we're going to have 100%.

After the parenthesis bring a comma.

And then Earl you're going to provide the image that you want to use as a background.

So back to basics here I'm going to search for coding.

And let me use this image.

Right click and then copy image address code and then paste that with this one.

Save it.

And for some reasons we are not seeing the background image.

The issue here is this one and that is the 100% here.

It must come after the parenthesis for the second color.

And this is what we have.

Let's position the image by using background size as cover.

This one is for responsive image.

And this is what we have.

And then background position.

Use center and then color as white.

And then position equal to relative.

And this is what we have.

The next one is going to be the header content.

Let me expand this one which is this one.

Copy the class name dot header content.

Maximum weight is equal to 1200 parsecs, and then margin top and bottom are zero left and right as

auto to center everything and text align at center.

Let's style the header content.

In this case it can be found in the header text and then h1 and then the p.

So back here select that space h1 and then font size of 3.5 rem.

All right.

And then margin bottom of one rem and font weight of 700.

All right.

And then the header.

Then the paragraph font size of 1.2 Into REM and margin bottom of two REM.

All right.

So let's start out the link which is get in touch.

The class is called CTA BTN.

And that is call to action button display equal to inline block.

And then padding of one REM top and bottom left and right is to and background.

We're going to use some linear gradients as linear gradient and two and then right.

And that is the movement must be in the right direction.

Then provide the colors var and the color is gradient start comma var and then dash dash gradient end.

And this is what we have.

Let me change the color on the button by using color equal to white.

Then text decoration none and then border radius of 0.5 rem will remove this one from here.

And this is what we have.

And let's have some simple transition here.

And that is the background.

The duration is 0.3 seconds.

Then the font weight 500.

Padding top and bottom as one rem left and right is 2.5 rem.

Let me increase the border radius to something like two rem.

All right.

This one is cool.

And for the transition let me use all properties 0.3 seconds.

The transition type is EAS.

So on hover I'm going to copy this column hover and use transform.

We're going to translate on the y axis to negative two pixels.

This means that if I move my cursor on the button it should move up.

Negative two physics.

Let's see the final one.

As you can see it is moving upwards and that is minus two physics.

So let's look at what we are building.

And indeed we have that effect also.

And let's change the gradient I'm going to copy this paste it here.

And then let's start with the end and then end with the start.

So let's see.

And this is what we have.

The next one is going to be the about, which is this.

Let me collapse this and let's work on the about for the about.

We have about and then the about content.

So let's start with the about the class is dot about.

And let's have a padding top and bottom as six REM and left and right is true REM.

And this is what we have.

Let's also have some background as white.

And let's look at the effect.

All right.

So the next step is to select the about content back here dot about content.

Provide maximum weight as 1200 pixels and margin zero.

And that is top and bottom and left and right as auto, and this one will center the entire content.

Let's give it as display equal to flex and some spacing as gap which is equal to four REM.

And let's look at the effect.

All right.

The next step is to provide align items as center.

And let's target the actual image.

And that is the profile image dot profile image provide flex as one.

This means it should take the available space and then align items at center.

And let's target the actual image.

This is the profile image container.

Let's control the actual image.

So here is going to be as profile image.

And then img to select the actual image, which is this one, and let's provide a weight of 100% and

maximum weight as 400 pixels.

Border radius one rem.

And let's have some box shadow zero, four, p6, p6, p6.

And then the color I'm going to use RGBa with red are zero, zero, zero and opacity are 0.1.

Let's remove this one and let's rely on the maximum weight.

And let's look at the effect.

All right.

And this is what we have.

The next step is the actual text.

And that is the about text.

I'm going to select as that and provide flex equal to one.

And then the actual section title.

you're gonna have some gradients, as you can see here.

So let me show you how to do it.

Section title.

Let provide font size of two rem and then color var and then text color margin.

Bottom of 1.5 rem and font weight 700.

And background.

Going to use linear gradient we are going to pass in three things.

The first one is the angle.

So here provide two right.

And then the two colors bring comma.

And then var you're going to use the gradient start and then comma.

VAR gradient end.

And that is the colors that we specified in the variables with this one.

If I save it.

I have this format provide display equal to inline block.

And let's look at what we have something like this.

But I want the background to appear on the text.

This is where background script and text fill color comes in.

So provide Dash and then WebKit.

And this one will make sure that all browsers can render the gradient as well.

So provide WebKit dash background clip and then provide the text.

And the next one is going to be dash WebKit and then text fill color.

And I'm going to use transparent.

All right.

And let me see the effect now.

And this is what we have.

The next step is going to be the dissection skills.

So let me collapse the about.

And now we are on the scale.

So here I'm going to select the scales and provide padding six REM and two rem background color var

is equal to.

For this one let's provide some light color.

So back to the variables here I'm going to have light dash color.

And I'm going to use hashtag f3 f4 f6.

So back here I'm going to reference that as dash light color.

Then the actual scale content dot.

And then provide maximum weight of 1200 pixels and margin zero and auto.

Then let's focus on the skills grid, which is this one.

Copy that.

Dot skills grid display equal to flex and then flex wrap.

Going to use wrap to have some responsive in nature and some space as gap.

Provide two REM and margin top of three REM.

Let's look at the effects.

Now are the skills.

All right.

Then the next step is going to be the actual skills card which is this one.

I'm going to select that provide flex equal to one.

It should take the full weight and minimum weight of two.

50 pixels background.

I'm going to use white padding on all sizes as two to ram border radius of 0.5 rem and then box shadow

is equal to zero.

Two p6, four, p6, RGBa zero, zero and opacity are 0.1 and align items at center.

And this is what we have.

Let's target the actual icon.

If you look inside the individual skills we have I as the icons, we can select that by using skills

cardspace and then the I as the icons.

Let's increase the font size as 2.5 rem and then color is equal to.

We're going to use the primary color and then margin bottom as one REM.

Well, it's supposed to be scale scored.

All right.

Good.

The next part is going to be the recent works, which is this one.

So back here let me also collapse the scales and let's work on the works I'm going to give a comment.

The class is works.

Pardon six REM and two REM background as white.

Then let's select the work section.

Or let me change this one to content as work content.

And let me make the work as works.

All right.

Provide maximum weight, which is equal to 1200 parsecs and margin zero, and auto to center.

Eight.

Let's target the grid, which is wec's grid to that and provide display equal to flex and flex.

Wrap is equal to wrap and gap which is equal to two rem margin bottom of three rem.

All right.

So let's target the actual work card which is this one.

So dot work card provide flex equal to one and minimum weight 300 P6.

Background.

VAR then the light color border radius of 0.5 rem display equal to flex and then flex direction is equal

to color.

All right.

But we don't have some spacing.

Well sorry supposed to be two REM.

And that is a gap which provides some spacing between the individual child in the flex container.

Let's add some cool transition as transition.

Use transform space 0.3 seconds and then the transition type as ease.

And we want to control the box shadow as box shadow space 0.3 seconds.

And this one is also easy.

So when a user moves the cursor on the card, you want to trigger this transition.

So I'm going to use dot work card column Hoover.

And on Hoover we want to transform by using translate on the y axis you should move five pixels to the

top and that is minus five.

And box shadow zero ten pixels, 20 pixels and RGBa with 0.1 as the opacity.

And let's have a look.

As you can see the box shadow, I have increased the box shadow when a user moves the cursor on it.

The next part is going to be the work info, which is this one.

I'm going to select that provide padding on all sizes as 1.5 rem And flex as one display equal to flex,

flex, direction column and justifycontent as space between and.

Let's target the title as work info and then the H3.

So dot work info space h3 margin bottom of 0.5 rem.

And let's select the works links which is this one.

I can make it as work link back here as dot work link provide margin top as one REM.

All right.

And this is what we have.

The next part is going to be the contact.

So let me collapse this and the class is equal to contact pardon of six REM space and two REM background

provide var and then light color.

Then the actual contact content which is this one.

Do that and then provide maximum weight of 800 pixels.

Margin zero and auto.

Let's see what we have.

Something like this.

Let's target the form which is the form group.

So let me select the container as contact dash form.

We have it as class which is contact form here on the form itself.

So provide background as white and padding of two rem border radius 0.5 rem and box shadow zero two

parsecs.

Four parsecs RGBa with 0.1 as the opacity.

Nice.

The next part is going to be the form group, which is this one.

Provide margin bottom of 1.5 rem and then the dot form group label.

Let's give it as display equal to block and then margin bottom tone of 0.5 rem.

And then the color which is equal to var dash dash text color.

And we have it as that.

Let's target the individual input fields.

You're going to select both the text area and then the input field.

So here is going to be as dot form group.

And then the input comma dot form group.

And then the text area we have selected multiple elements.

So in here provide a weight of 100%.

It should take the available space or some.

And then the next part provides some spacing as padding 0.75 REM and border as one P6 solid.

Let me use this hashtag color as E5, E7, EB, and then border radius as 0.5 rem and font size of one

rem.

Awesome.

The next part is going to be the button that is the submit button, which is this one.

I'm going to select that and then background var dash dash primary color.

Color on it as white.

And then padding one rem and then two REM.

Border none.

Let's see what we have.

Something like this border radius of 0.5 rem Cursor as pointer and let's have some transition.

And that is when the user moves the cursor on it.

When I change the background to animate that by using 0.3 seconds.

So it means that we're going to have some hover on the submit button column hover.

And we're going to provide background of var.

And then I'm going to use the secondary color.

Let's have a look something like this.

The last part is going to be the footer which is this.

So I'm going to select that dot footer then provide some comments here as footer.

And then in the footer provide background var.

And I'm going to use the text color.

Then the actual color on the text.

Let's use white Eight, and then padding of two REM and text align center.

Let's have a look.

Awesome.

The next part is going to be the Social Links, which is this one.

Dot social links margin top as one rem and then the individual links are social links space and then

the.

This one is selecting the individual.

A tags in here provide color as white and margin zero and 0.5 rem font size of 1.5 rem and transition.

I'm going to apply it on the color as 0.3 seconds, which means we're going to have some Hoover, uh,

social links.

The attack on Hoover and on Hoover.

I want to change the color only to color var.

I'm going to use the primary color.

Something like this.

The last part is going to be the responsive design.

At the moment if I collapse let's have a look.

Some elements are not visible.

So this is where the responsive design comes in.

I'm going to use media and then maximum weight provide 780.

So it means that any device that the maximum width is equal to 780 then these properties will be applied.

So first of all, let's select the nav links.

As you can see here, the nav links are not all that visible.

So I'm going to select dot nav links.

I'm going to hide everything as display equal to none.

As you can see that it is gone.

This is where we are going to use JavaScript to click on to bring back the nav links.

So let's continue to include the other properties.

Use position as absolute, which means we have taken it from the normal document flow and top as 100%.

Then left zero and right is zero.

Background as white and then flex direction as column padding one rem.

Text align center and box.

Shadow zero two p6 four p6 rgba.

And let's have a look.

It is invisible, but let me change this one to block.

And let's look at the effect.

Now this is what we have.

The next step is that we are going to add a class to the nav links.

And then in the JavaScript we are going to remove that.

So let me show you what I mean here.

Bring dot nav links dot active.

So for this class we're going to use display equal to flex.

And when we get to JavaScript I will show you where we are going to remove this class.

The next part is going to be the hamburger menu with a class equal to.

Let me check one more time in the nav bar.

It is called menu btn.

So do that.

And then this is where we are going to bring back that button or the hamburger menu icon.

So display equal to block.

Now let's see what we have.

Let me reload.

And now we have this icon.

So the whole logic here is that we are going to toggle this one visibility.

So let me hide by using none here.

And now it is gone.

So if I reload and if I click on this I'm expecting to bring back that drop down menu links.

So when you get to JavaScript you better understand that.

And also for the above content.

As you can see, it is not all that presentable.

We have this image here and a text has been pushed inside.

This is where we're going to use the about dash content.

And we're going to use Flexdirection equal to column.

And now we have it as that.

The next step is that for the H1 text here it is too much.

So I'm going to select by using the header text.

And then I'm going to target the H1.

And I'm going to change the font size to something like 2.5 REM.

And for the above content let's center everything by using align items to be center.

All right.

And now this is what we have for the text.

Now the about is perfectly aligned.

The next part is going to be the skills.

So it's going to be as dirt skills card, and we are going to reduce the weight of it by using the mean

weight, which is equal to 200 parsecs.

And now it has been aligned perfectly.

The next part is to work on the work card, which is the recent works.

So for this I'm going to use different break points as media.

And when the maximum weight for this device, which is equal to 1024 pixels, then we're going to use

flex equal to one.

Sorry, I have to select the work card and use flex equal to one and provide maximum weight of 600 read

physics, and let's center everything by using margin zero and then auto.

And also let's select the works dot grid.

And that is let me confirm the grid.

It is called x dash grid.

And Justifycontent as center.

And now it is perfectly aligned.

All right guys what is left is the JavaScript.

If I click on this I want to toggle the drop down.

So I'm going to include the JavaScript.

Let me confirm here at the bottom do we have the link.

Yes we have it.

We are going to write some simple JavaScript here to get it done.

So here I'm going to use as mobile toggle.

And I'm going to select the menu and then the nav links so const as menu btn.

And that is the hamburger menu which is this one.

This is what we are selecting.

And if you look at the class for that it is called menu dash btn which is equal to document dot query

selector.

And the class is called menu dash btn.

We also want to select the nav links which is this one.

So I'm going to use const nav links is equal to document dot query selector.

And the class is called Nav links.

Now I'm going to bind event listener on the menu btn MN dot add event, listener and event.

Here is going to be a click event.

Then the callback function I'm going to use arrow function for this.

I'm going to take the nav links dot class list and we have a method called toggle.

So what are we toggling.

We're going to toggle the class called active.

Do you remember that we added a class.

Let me confirm.

In the CSS we added what is called nav links dot active.

This is where we're going to toggle that class.

And that is it.

So let's have a look.

If I reload and click on this.

As you can see it worked.

So let me expand.

As you can see it is gone.

And if I decrease it now I have the toggling as that.

##################################################################################


############################################################################
**Date:11 July 2026
**Epic & Task:**P2.2-D9 — CSS Modules + Styled Components + Tailwind CSS (Section 6, part 2)
**Day segment (if multi-day task):** Seg 4 of 5 · GitHub Issue #255 (OPEN by design)
***************************course trans***********************************
# React Styling Approaches — Progress Notes (p2-day-08)

---

## 1. The Scoping Problem with Plain (Vanilla) CSS

### Definition
When using plain CSS files in a React project, CSS rules are **global by default** — they are not automatically scoped to the component file that imports them, which can cause unintended style clashes between components.

### Key Concepts
- CSS files imported into a component are not isolated; any selector can match elements rendered by *other* components too.
- Example from the transcript: a rule targeting all `<p>` elements (`p { text-align: center; }`) defined for one component's CSS file accidentally centered `<label>` elements inside a `<p>` in a completely different component, because both components render paragraphs.
- A "fix" is possible by writing more specific selectors (e.g., scoping the rule to `header p`), but this requires the developer to constantly think defensively about selector specificity — extra manual effort, and still not truly scoped.
- This class-collision problem is **intentional** to demonstrate why scoped styling solutions (CSS Modules, styled-components, Tailwind) exist.

### Important Terms
| Term | Meaning |
|------|---------|
| Scoping | Restricting a style rule so it only affects a specific component, not the whole app |
| Class collision | Two unrelated components accidentally sharing styles because of a matching selector or class name |
| Global CSS | Standard CSS behavior where any rule can affect any matching element in the document |

### Key Takeaways
- Plain CSS is easy to write and separates styling code from JSX, but it is **not scoped** — any selector can leak into unrelated components.
- Broad selectors (like element selectors such as `p`) are especially risky because they match every instance of that element across the app.
- This is the core motivation behind CSS Modules, styled-components, and utility-first frameworks like Tailwind.

### Quick Revision
- Plain CSS = global by default → no scoping → risk of accidental style collisions.
- Broad/element selectors are the most common cause of leaks.
- Fixing it manually means writing more specific selectors — extra developer effort, not a real solution.

---

## 2. CSS Modules

### Definition
CSS Modules is a **build-tool-enforced** approach (not a native browser/JS feature) that lets you write near-vanilla CSS while automatically scoping class names to the component file that imports them.

### Key Concepts
- Enabled by naming a file with the `.module.css` pattern (e.g., `Header.module.css`) — this signals the build tool (e.g., Vite) to process it differently.
- You import the module file as a JavaScript object (commonly named `classes` or `styles`), where each key corresponds to a class name defined in that CSS file.
- Usage: `className={classes.paragraph}` instead of a plain string.
- Under the hood, the build tool **transforms class names into unique strings** (e.g., `paragraph_ab12x`) so the same class name in another file won't collide.
- Only **class selectors** get this scoping treatment — element selectors are unaffected/unchanged by CSS Modules.
- You can still apply classes conditionally (ternary expressions) and inject them into template strings, exactly like with plain CSS classes.

### Important Terms
| Term | Meaning |
|------|---------|
| CSS Modules | Build-tool feature that generates unique, scoped class names from regular CSS |
| `.module.css` | File naming convention that triggers CSS Modules processing |
| `classes` / `styles` object | JS object imported from a `.module.css` file mapping original class names to generated unique names |

### Workflow / Process
1. Rename the CSS file to `ComponentName.module.css`.
2. Write standard CSS using class selectors (e.g., `.paragraph { ... }`).
3. Import it in the component: `import classes from './ComponentName.module.css'`.
4. Apply with `className={classes.paragraph}`.
5. Build tool auto-generates a unique class name and injects the transformed styles into the page.

### Key Takeaways
- Advantage: keeps the decoupling benefit of vanilla CSS (separate file, can be written by another person) **plus** real scoping.
- Disadvantage: you still need to know CSS.
- Disadvantage: larger projects end up with many small `.module.css` files, some containing very little code.

### Quick Revision
- `.module.css` naming → triggers scoping.
- Import as object → access styles via `classes.className`.
- Element selectors are NOT scoped; only class selectors are transformed.
- Still plain CSS syntax — no new language to learn.

---

## 3. Styled Components — Basics & Setup

### Definition
`styled-components` is a popular npm package that lets you define CSS directly inside specially created React components, using **tagged template literals**, instead of separate CSS files or inline styles.

### Key Concepts
- Install via `npm install styled-components` (or add as a dependency in CodeSandbox). Restart the dev server after local installation.
- Import `styled` from `'styled-components'`.
- `styled` is an object with properties matching HTML tags (`styled.div`, `styled.label`, `styled.input`, `styled.button`, `styled.header`, etc.).
- Syntax uses **tagged template literals** (backticks directly after the property, e.g. `` styled.div`...` ``) — a standard JavaScript feature, not React- or library-specific.
- Inside the backticks you write **standard CSS** (no camelCase needed, unlike inline styles).
- The result is stored in a capitalized constant (since it's a component), e.g. `const ControlContainer = styled.div\`...\`;`.
- That constant is then used directly as a JSX tag, replacing the built-in HTML element.
- Internally, styled-components generates a unique CSS class and injects the rule into the document `<head>` — styles are automatically scoped.
- **Styled components forward all props** (other than the styling template) to the underlying built-in element — e.g., `onChange`, `type`, `className` all still work normally.

### Important Terms
| Term | Meaning |
|------|---------|
| Tagged template literal | JS feature where a function ("tag") processes a template string; used as `` styled.div`css here` `` |
| `styled.<element>` | Creates a new React component that renders the given HTML element with attached styles |
| Prop forwarding | Styled components automatically pass along any props they receive to the underlying HTML element |

### Workflow / Process
1. `npm install styled-components`.
2. `import styled from 'styled-components';`
3. Create a styled component: `` const Input = styled.input`...`; ``
4. Replace the built-in JSX element with the new component.
5. Reuse props (`onChange`, `type`, etc.) exactly as before — they're forwarded automatically.

### Key Takeaways
- Styles live close to the component code but not inside the JSX markup itself.
- Styling is automatically scoped — no class collisions.
- You can mix styled-components with other approaches (like CSS Modules) in the same app, though typically one approach is used consistently.
- Still requires knowing CSS.

### Quick Revision
- `styled.<tag>` + backticks = a new styled React component.
- Standard CSS syntax inside the template literal.
- All non-styling props are automatically forwarded to the underlying element.
- Auto-scoped via generated unique class names.

---

## 4. Styled Components — Dynamic / Conditional Styling

### Definition
Styled-components lets you compute style values dynamically at runtime by injecting a **function** into the template literal; that function receives the component's `props` and returns the value to use.

### Key Concepts
- To make styling conditional, pass a custom prop to the styled component (e.g., `invalid={emailNotValid}`), where the value is typically a boolean.
- Inside the styled component's template literal, use the `${}` injection syntax with an **arrow function**: 
  ```js
  color: ${(props) => props.invalid ? 'red' : 'black'};
  ```
- You can also destructure directly: `${({ invalid }) => invalid ? 'red' : 'black'}`.
- This replaces the older pattern of conditionally toggling a CSS class name (e.g., `className={invalid ? 'invalid' : ''}`), which is unnecessary once using styled-components' prop-based approach.
- **Naming collision warning**: some prop names (like `invalid` on an `<input>`) clash with built-in HTML/DOM attributes, causing React warnings since all props are forwarded to the underlying element.
  - **Fix / convention**: prefix custom styling-only props with a `$` (e.g., `$invalid`). This is valid JavaScript/JSX and avoids clashing with built-in DOM props, while remaining usable inside the styled-components template.

### Important Terms
| Term | Meaning |
|------|---------|
| Prop-based dynamic styling | Using a function inside the styled-components template to compute a CSS value from props |
| `$`-prefixed prop | Convention to mark a prop as "styling-only" to avoid clashing with built-in DOM attributes |

### Workflow / Process
1. Pass a custom prop to the styled component: `<StyledLabel $invalid={emailNotValid}>`.
2. Inside the styled template, use `${(props) => props.$invalid ? 'colorA' : 'colorB'}` for any CSS property that should change.
3. Repeat for each dynamic property (e.g., `color`, `border-color`, `background-color`).
4. Prefix any prop that's only meant for styling logic with `$` to avoid DOM attribute warnings.

### Key Takeaways
- Dynamic styling is achieved by injecting functions (not values) into the CSS template — styled-components executes them and passes in `props`.
- Prefer custom props over toggling class names when using styled-components.
- Always check for prop name collisions with built-in HTML attributes; use `$` prefix to be safe.

### Quick Revision
- Conditional styles = function injected via `${}` that reads `props`.
- Use `$propName` convention to avoid clashing with native HTML attributes.
- Multiple CSS properties (color, border, background) can each have their own conditional logic.

---

## 5. Styled Components — Media Queries, Nesting & Pseudo-Selectors

### Definition
Because styled-components templates accept standard CSS, they also support **nested selectors**, **media queries**, and **pseudo-classes** like `:hover`, using the `&` (ampersand) symbol to refer to the current styled component.

### Key Concepts
- **Nesting children**: Use `&` followed by a space and a selector (e.g., `& img { ... }`, `& h1 { ... }`, `& p { ... }`) to target elements nested inside the styled component.
- **Media queries**: Standard `@media (...) { & { ... } }` syntax works directly inside the template literal; use `&` inside the media query block to refer back to the component itself.
- **Pseudo-selectors** (e.g., hover): Use `&:hover { ... }` — **no space** between `&` and `:hover`, since a space would instead target hovered *children*, not the component itself.
- This means you don't need to convert every child element into its own styled component just to apply nested/responsive/hover styles — one wrapping styled component can hold all related rules.

### Important Terms
| Term | Meaning |
|------|---------|
| `&` (ampersand) | Refers to the styled component itself within its own template literal |
| `& child` | Targets a nested/child element inside the styled component (space = descendant selector) |
| `&:hover` | Targets the styled component itself in a hover state (no space = same element) |

### Workflow / Process
1. Copy relevant CSS (including nested rules and media queries) into the styled component's template literal.
2. Replace the original selector name (e.g., `header`) with `&`.
3. For children, use `& <element>` (with a space).
4. For pseudo-classes, use `&:<pseudo-class>` (no space).

### Key Takeaways
- `&` is the key symbol enabling nesting, media queries, and pseudo-selectors in styled-components.
- Space vs. no-space after `&` changes the meaning: space = descendant, no space = the element itself in a given state.
- One styled wrapper component can encapsulate styles for itself and all its nested children, reducing the need to convert every element into a separate styled component.

### Quick Revision
- `& img`, `& h1`, `& p` = style children.
- `@media (...) { & { ... } }` = responsive styles.
- `&:hover` = pseudo-class on the component itself (no space).

---

## 6. Organizing & Reusing Styled Components

### Definition
As an application grows, styled components that are likely to be reused across multiple parts of the app should be extracted into their own files, while highly specific/one-off styled wrappers can stay local to the component file that uses them.

### Key Concepts
- Components used in only one file (e.g., a one-off `ControlContainer` div) can remain defined in that same file.
- Reusable UI elements (e.g., `Button`, `Input`, `Label`) are good candidates for separate files (`Button.jsx`, `Input.jsx`, etc.), exported as default exports.
- **Combining related elements**: A common pattern is merging tightly-coupled elements (like a label + input pair) into a single custom component (e.g., `CustomInput`) that internally renders both styled pieces.
  - Accepts custom props (`label`, `invalid`) plus uses the rest/spread operator (`...props`) to forward remaining props (like `onChange`, `type`) to the underlying input.
- This reusable-component pattern applies regardless of styling approach — it's a general React component-design principle, not unique to styled-components.

### Important Terms
| Term | Meaning |
|------|---------|
| Default export | Exporting a single main value/component from a file, importable under any chosen name |
| Rest/spread props (`...props`) | Collecting remaining props into an object and forwarding them to a child element |
| Composite component | A component that bundles multiple related elements (e.g., label + input) into one reusable unit |

### Key Takeaways
- Extract components into their own files when they're likely to be reused elsewhere in the app.
- Keep tightly-scoped, single-use styled elements local to their component file.
- Bundling closely related elements (label + input) into one custom component reduces JSX duplication.

### Quick Revision
- Reusable UI pieces → separate files (`Button.jsx`, `Input.jsx`).
- One-off wrappers → keep local to the file that uses them.
- Combine tightly-coupled elements into one composite component using props + spread.

---

## 7. Styled Components — Advantages & Disadvantages

### Key Takeaways (Advantages)
- Quick and easy to set up; minimal extra configuration.
- Keeps a "thinking in components" mental model — styled components are just configurable functions/components, consistent with React's component philosophy.
- Styles are **automatically scoped** — no manual class-naming discipline required to avoid collisions.

### Key Takeaways (Disadvantages)
- Still requires knowing standard CSS.
- No strong separation between styling and component logic — styles live in the same file as the component code.
- Tends to produce many small wrapper components purely for styling purposes, which can feel like extra boilerplate.

### Quick Revision
- Pros: fast setup, component-based mental model, automatic scoping.
- Cons: still need CSS knowledge, styles mixed into component files, extra small wrapper components.

---

## 8. Tailwind CSS — Getting Started

### Definition
Tailwind CSS is a **utility-first CSS framework** (usable in any web project, not React-specific) that styles elements by composing many small, single-purpose CSS classes directly in the markup, rather than writing custom CSS rules.

### Key Concepts
- Install and initialize via the official docs (Framework Guides → Vite), which involves installing the Tailwind package(s) and generating config files.
- Requires updating the Tailwind config's `content` entry so Tailwind knows which files to scan for class usage.
- Three required directives are added to the main CSS file (replacing prior custom CSS) to pull in Tailwind's base/components/utilities layers.
- Styling is done by adding many small `className` utility classes directly to JSX elements (e.g., layout, spacing, color, typography classes).
- The **Tailwind CSS IntelliSense** VS Code extension (official, by the Tailwind team) provides class name autocompletion and CSS previews, significantly easing the learning curve.
- Tailwind also ships with built-in design tokens (colors, spacing scale, font sizes) out of the box, giving a cohesive look without custom values.
- Custom values (e.g., a custom font-family) can still be added by extending the Tailwind config (`theme.extend.fontFamily`), then used via a generated utility class (e.g., `font-title`).
- You can still write your own custom CSS rules alongside Tailwind's directives in the main CSS file (Tailwind doesn't forbid this).

### Important Terms
| Term | Meaning |
|------|---------|
| Utility-first CSS | Styling approach using many small, single-purpose classes instead of custom rule sets |
| Tailwind directives | The `@tailwind` statements added to the CSS file to inject Tailwind's base/components/utilities styles |
| `theme.extend` | Config section used to add custom design tokens (fonts, colors, etc.) to Tailwind |
| Tailwind IntelliSense | VS Code extension providing autocomplete/preview for Tailwind utility classes |

### Workflow / Process
1. Install Tailwind and run its init command to generate config files.
2. Configure the `content` field so Tailwind scans your component files.
3. Replace custom CSS file content with the three required Tailwind directives.
4. Add utility classes directly to JSX elements via `className`.
5. Extend the config for custom design tokens (fonts, colors) as needed.
6. Use the Tailwind IntelliSense extension to speed up class discovery.

### Key Takeaways
- Tailwind doesn't require deep CSS knowledge to use effectively, since most styling decisions are pre-built into utility classes.
- Class names are learned gradually through practice and lookup — not meant to be memorized upfront.
- Custom rules and custom config values can still coexist with Tailwind's utility classes.

### Quick Revision
- Utility classes applied directly in `className`, no separate CSS files needed for component styling.
- Requires install + config + directive setup.
- IntelliSense extension strongly recommended.
- Config can be extended for custom fonts/colors while still using Tailwind's utility system.

---

## 9. Tailwind CSS — Responsive Design & Pseudo-States

### Definition
Tailwind handles responsive breakpoints and interactive states (like hover/focus) using **prefixes** added directly to utility class names, rather than writing separate media query blocks or pseudo-selector rules.

### Key Concepts
- **Responsive prefixes** (e.g., `md:`) apply a utility class only once a minimum screen width breakpoint is reached — e.g., `md:mb-16` applies `mb-16` only on medium screens and up.
- Without a prefix, a class applies at all screen sizes by default (mobile-first approach); combine a base class with a prefixed override class for responsive behavior (e.g., `mb-8 md:mb-16`).
- **State prefixes** (e.g., `hover:`, `focus:`) apply a utility class only when the element is in that state — e.g., `hover:bg-amber-500` changes background color only on hover.
- This removes the need to write `&:hover { ... }` blocks manually, as was needed with styled-components.

### Important Terms
| Term | Meaning |
|------|---------|
| Responsive prefix (`md:`, etc.) | Applies a utility class only at or above a given breakpoint |
| State prefix (`hover:`, `focus:`) | Applies a utility class only when the element is in that interactive state |
| Mobile-first | Default (unprefixed) classes apply to all sizes; prefixed classes override at larger breakpoints |

### Workflow / Process
1. Add a base utility class for the default/mobile styling.
2. Add a breakpoint-prefixed class (e.g., `md:text-4xl`) for the styling that should apply at larger screens.
3. Add state-prefixed classes (e.g., `hover:bg-amber-500`) for interactive style changes.

### Key Takeaways
- Responsive and interactive styling is expressed entirely through class name prefixes — no separate CSS blocks needed.
- Mobile-first: base classes are the default; prefixed classes override at specified breakpoints or states.

### Quick Revision
- `md:` = applies at medium screens and up.
- `hover:` / `focus:` = applies only in that interactive state.
- Combine unprefixed (default/mobile) + prefixed (breakpoint/state) classes together.

---

## 10. Tailwind CSS — Dynamic / Conditional Styling

### Definition
Since Tailwind classes are just strings, conditional styling is achieved with standard JavaScript logic (ternaries, if/else, string concatenation) to build the final `className` string dynamically.

### Key Concepts
- Build a base class-list string containing styles that never change.
- Use a ternary or if/else to append the condition-specific classes (e.g., text color) based on a prop like `invalid`.
- Example pattern:
  ```js
  let labelClasses = 'block mb-1 text-sm font-medium';
  labelClasses += invalid ? ' text-red-400' : ' text-stone-300';
  ```
- **Important detail**: a whitespace character must separate the base classes from the conditionally appended class(es), otherwise two class names get merged into one invalid string.
- This same pattern can be applied to multiple related properties at once (e.g., text color, background color, border color for an input), by building up a single `inputClasses` string conditionally.
- Keeps the JSX itself clean (`className={labelClasses}`) while the conditional logic lives above the `return` statement.

### Important Terms
| Term | Meaning |
|------|---------|
| Class-list string | A dynamically built string of Tailwind utility classes assembled via JS logic |
| Whitespace separator | Required space between concatenated class names so they remain distinct classes |

### Workflow / Process
1. Define a base string of unconditional utility classes.
2. Conditionally concatenate additional classes based on component state/props (ensure a leading space).
3. Assign the final string to `className` in JSX.

### Key Takeaways
- No special Tailwind feature is needed for conditional styling — plain JavaScript string logic is used to compose the `className`.
- Keep a clear separation between "always-on" base classes and "conditional" classes for readability.
- Don't forget the whitespace between concatenated class name groups.

### Quick Revision
- Conditional Tailwind styling = JS string logic (ternary/if-else) building the `className` value.
- Base classes + conditional classes, separated by a space.
- Works cleanly for multiple properties changing together (color, background, border).

---

## Overall Comparison Summary

| Approach | Scoped? | Needs CSS Knowledge? | Where Styles Live |
|----------|---------|----------------------|--------------------|
| Vanilla CSS | ❌ No (global) | ✅ Yes | Separate `.css` files |
| CSS Modules | ✅ Yes (class names only) | ✅ Yes | Separate `.module.css` files |
| Styled Components | ✅ Yes (auto-generated classes) | ✅ Yes | Inside component files (JS) |
| Tailwind CSS | ✅ Yes (utility classes, no custom selectors needed) | ❌ Not required | Inline via `className` utility classes |
################################################################################

############################################################################
**Date:11 July 2026
**Epic & Task:**P3.2-D9 — Longest Word + Capitalize Each Word (GFG #33,#34 + Codedamn)

**Day segment (if multi-day task):** Seg 4 of 5 · GitHub Issue #191 (OPEN by design)
***************************course trans***********************************
# Count Character in a String (Beginner Notes)
# Longest Word in a Sentence (5th Grade Explanation)

## Code

``` javascript
function longestWord(str) {
    const words = str.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('GeeksForGeeks is great'));
```

## What Does This Program Do?

It finds the **longest word** in a sentence.

Example:

Input:

``` text
GeeksForGeeks is great
```

Output:

``` text
GeeksForGeeks
```

## Step 1

Create the function.

-   `str` stores the sentence.

## Step 2

``` javascript
const words = str.split(' ');
```

Break the sentence into words.

``` text
GeeksForGeeks is great

↓

["GeeksForGeeks","is","great"]
```

## Step 3

``` javascript
let longest = '';
```

Start with an empty variable.

## Step 4

``` javascript
for (let word of words)
```

Check each word one by one.

## Step 5

``` javascript
if (word.length > longest.length) {
    longest = word;
}
```

Compare the word lengths and keep the longest one.

## Step 6

``` javascript
return longest;
```

Return the longest word.

## Step 7

``` javascript
console.log(longestWord("GeeksForGeeks is great"));
```

Output:

``` text
GeeksForGeeks
```

## Complete Flow

``` text
Sentence
 ↓
Split
 ↓
Check every word
 ↓
Compare lengths
 ↓
Save longest word
 ↓
Return answer
```

## Memory Trick

-   split() → Break sentence
-   for...of → Check each word
-   length → Count letters
-   return → Give the answer




# Counting Words with Prefixes (5th Grade Explanation)

## Simple Code

``` javascript
export function prefixCount(words, pref) {
  let count = 0;

  for (let word of words) {
    if (word.startsWith(pref)) {
      count++;
    }
  }

  return count;
}

console.log(prefixCount(["pay","attention","practice","attend"], "at"));
```

## What is a Prefix?

A prefix is the **beginning** of a word.

Example:

-   attention starts with **at** ✅
-   attend starts with **at** ✅
-   pay starts with **at** ❌

Answer = **2**

## Step 1

Create the function.

-   `words` = list of words
-   `pref` = beginning to check

## Step 2

``` javascript
let count = 0;
```

Start counting from 0.

## Step 3

``` javascript
for (let word of words)
```

Check each word one by one.

## Step 4

``` javascript
word.startsWith(pref)
```

If the word starts with the prefix, it returns **true**.

## Step 5

``` javascript
count++;
```

Add 1 whenever a word matches.

## Step 6

``` javascript
return count;
```

Return the final count.

## Complete Flow

``` text
Words
 ↓
Check each word
 ↓
Starts with prefix?
 ↓
Yes → count + 1
No → Ignore
 ↓
Return count
```

## Memory Trick

-   startsWith() = Check the beginning.
-   count++ = Add one.
-   return = Give the answer.
