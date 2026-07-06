# Daily Progress Log — Day 02

**Date:03 July 2026
**Epic & Task:** P1.2-D2 — HTML Fundamentals + Portfolio HTML Deploy (S5 all 34 lessons)
**Day segment (if multi-day task):** Seg 2 of 2 · GitHub Issue #149 (OPEN by design)

---

## What I completed today
prompt:
Act as a senior software engineer, technical educator, and documentation writer.
Read the transcript and create concise study notes that answer only the lesson questions provided.

Requirements:

* Extract only the important concepts related to the lesson questions.
* Ignore introductions, repetition, filler words, and promotional content.
* Rewrite the content in clear, beginner-friendly language.
* Do not add information that is not present in the transcript.
* Organize the notes using valid GitHub Markdown (`.md`).

Use this structure:

```markdown
# Lesson Title

## Definition

## Key Concepts

## Important Terms

| Term | Meaning |
|------|---------|

## Workflow / Process (if applicable)

## Key Takeaways

- Point 1
- Point 2
- Point 3

## Quick Revision

- Short revision points
```

Return **only valid Markdown** that can be copied directly into a `.md` file.

#############################################################################
day01 p1.2 task
# HTML Fundamentals

## Definition

HTML (HyperText Markup Language) is the standard markup language used to create and structure web pages. It provides the foundation of every website by organizing content such as text, images, links, videos, audio, and forms using HTML tags. HTML is a markup language, **not** a programming language. :contentReference[oaicite:0]{index=0}

---

# Relationship Between HTML, CSS, and JavaScript

| Technology | Role |
|------------|------|
| HTML | Creates the structure (foundation) of a webpage |
| CSS | Styles the webpage and improves its appearance |
| JavaScript | Adds interactivity and dynamic behavior |

---

# HTML History

| Version | Year | Major Feature |
|----------|------|---------------|
| HTML 1.0 | 1991 | Basic text, images, and links |
| HTML 2.0 | 1995 | Added forms for user input |
| HTML 4.0 | 1997 | Added tables, frames, and improved layouts |
| HTML5 | 2014 | Added native audio, video, SVG, multimedia support |

---

# Web Application Components

A web application has three main parts:

1. Frontend
2. Backend
3. Database

### Frontend Technologies

- HTML
- CSS
- JavaScript

### Backend Technologies

- PHP
- Java
- Python
- JavaScript (Node.js)
- C++

### Databases

- MongoDB
- MySQL

---

# HTML Development Environment

## Required Tools

- Visual Studio Code (VS Code)
- Google Chrome (recommended browser)

---

# Creating Your First HTML Project

## Workflow

1. Create a project folder.
2. Open the folder in VS Code.
3. Create a file named `index.html`.
4. Write HTML code.
5. Save the file.
6. Open it in a browser.

---

# HTML Document Structure

## Definition

Every HTML page should follow the recommended document structure.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Page Title</title>
</head>

<body>

</body>

</html>
```

### Purpose of Each Part

| Element | Purpose |
|---------|----------|
| `<!DOCTYPE html>` | Specifies the HTML version |
| `<html>` | Root element of the webpage |
| `<head>` | Contains metadata and page settings |
| `<title>` | Displays the page title in the browser tab |
| `<body>` | Contains all visible webpage content |

---

# HTML Tags

## Definition

HTML tags define the structure and content of a webpage.

Most tags have:

- Opening tag
- Closing tag

Example:

```html
<h1>Welcome</h1>
```

Some tags are self-closing:

```html
<br>
<hr>
<img>
<input>
```

---

# HTML Elements

An HTML element consists of:

- Opening tag
- Attributes (optional)
- Content
- Closing tag

Example

```html
<p class="intro">Hello World</p>
```

---

# HTML Attributes

## Definition

Attributes provide additional information or modify the behavior of an HTML tag.

Example

```html
<a href="https://example.com">
```

Here:

- `href` is the attribute.
- `https://example.com` is the value.

---

# Common HTML Tags

## Headings

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

Purpose:

Display headings from largest (`h1`) to smallest (`h6`).

---

## Paragraph

```html
<p></p>
```

Purpose:

Displays paragraphs of text.

---

## Line Break

```html
<br>
```

Purpose:

Moves content to the next line.

---

## Horizontal Rule

```html
<hr>
```

Purpose:

Creates a horizontal line between sections.

---

## Anchor (Link)

```html
<a href="https://example.com">
```

Purpose:

Creates hyperlinks.

Useful attribute:

```html
target="_blank"
```

Opens the link in a new tab.

---

## Image

```html
<img src="image.jpg" alt="Description">
```

Important attributes

- `src`
- `alt`
- `width`
- `height`

---

# HTML Lists

## Unordered List

```html
<ul>
```

Displays bullet lists.

---

## Ordered List

```html
<ol>
```

Displays numbered lists.

---

## List Item

```html
<li>
```

Represents each item.

---

## Description List

```html
<dl>
<dt>
<dd>
```

Used for definitions and terms.

---

# HTML Comments

## Syntax

```html
<!-- Comment -->
```

Purpose

- Documentation
- Notes
- Improve code readability

Comments do not appear in the browser.

---

# Text Formatting Tags

| Tag | Purpose |
|------|---------|
| `<b>` | Bold text |
| `<strong>` | Strong importance |
| `<i>` | Italic text |
| `<em>` | Emphasized text |
| `<small>` | Smaller text |
| `<del>` | Deleted text |
| `<ins>` | Inserted text |
| `<sub>` | Subscript |
| `<sup>` | Superscript |
| `<u>` | Underlined text |
| `<blockquote>` | Long quotation |
| `<q>` | Short quotation |
| `<abbr>` | Abbreviation |
| `<cite>` | Citation |
| `<pre>` | Preformatted text |
| `<address>` | Contact information |
| `<bdo>` | Text direction |

---

# Block-Level vs Inline Elements

## Block-Level Elements

Characteristics

- Start on a new line
- Take full available width
- Can contain inline elements

Examples

- `div`
- `h1`
- `p`

---

## Inline Elements

Characteristics

- Stay on the same line
- Only take the required width
- Cannot contain block elements

Examples

- `a`
- `b`
- `i`
- `strong`
- `span`

---

# Div Element

## Definition

`<div>` groups related HTML elements together.

It behaves as a block-level element.

---

# HTML Forms

## Definition

Forms collect user input and send it to a server.

---

## Form Structure

```html
<form>

</form>
```

---

## Common Input Types

| Input Type | Purpose |
|------------|----------|
| text | Text input |
| number | Numbers |
| password | Password |
| email | Email address |
| url | Website URL |
| tel | Phone number |
| range | Slider |
| date | Date picker |
| time | Time picker |
| month | Month picker |
| week | Week picker |
| color | Color picker |
| checkbox | Multiple selections |
| radio | Single selection |
| file | File upload |

---

## Textarea

```html
<textarea></textarea>
```

Purpose

Allows multi-line text input.

---

## Select Dropdown

```html
<select>

<option>

</option>

</select>
```

Purpose

Lets users choose from predefined options.

---

## Button

```html
<button type="submit">
```

Purpose

Submits the form.

---

## Common Form Attributes

| Attribute | Purpose |
|-----------|----------|
| action | Destination where form data is sent |
| placeholder | Displays hint text |
| id | Unique identifier |
| for | Connects label with input |
| min | Minimum value |
| max | Maximum value |

---

# HTML Tables

## Definition

Tables display structured data using rows and columns.

---

## Table Structure

```html
<table>

<thead>

<tbody>

<tr>

<th>

<td>

</table>
```

---

## Table Components

| Element | Purpose |
|----------|----------|
| table | Creates a table |
| thead | Header section |
| tbody | Data section |
| tr | Table row |
| th | Table heading |
| td | Table data |

---

# HTML Rules

## Rule 1

Always start with

```html
<!DOCTYPE html>
```

---

## Rule 2

Use the correct HTML structure.

```html
<html>

<head>

<body>
```

---

## Rule 3

Tags should use proper syntax.

Example

```html
<h1>Hello</h1>
```

---

## Rule 4

Most tags require opening and closing tags.

Example

```html
<p></p>
```

---

## Rule 5

Some tags are self-closing.

Examples

```html
<br>

<hr>

<img>

<input>
```

---

## Rule 6

Attributes belong inside the opening tag.

Example

```html
<a href="https://example.com">
```

---

# Key Takeaways

- HTML is the foundation of every webpage.
- HTML structures content using tags.
- HTML is a markup language, not a programming language.
- HTML works together with CSS and JavaScript.
- Follow the standard HTML document structure.
- Use semantic tags for meaningful webpages.
- Forms collect user input.
- Tables organize data into rows and columns.
- Comments improve code readability.
- Block and inline elements behave differently.

---

# Quick Revision

- HTML = Structure
- CSS = Design
- JavaScript = Interactivity
- Every webpage begins with `<!DOCTYPE html>`
- Visible content goes inside `<body>`
- Most HTML tags have opening and closing tags.
- Attributes provide extra information to tags.
- Forms collect user input.
- Tables display structured data.
- `div` groups related elements.
- Comments help developers understand code.



##################################################################################


############################################################################
**Date:03 July 2026
**Epic & Task:** P2.1-D3 — children Prop + Events + useState Basics (Section 3, part 3)
**Day segment (if multi-day task):** Seg 3 of 5 · GitHub Issue #249 (OPEN by design)

---

## What I completed today


# Component Composition: The Special `children` Prop [Core Concept]

## Definition

Component composition is a React pattern where one component wraps other JSX content. React automatically provides the wrapped content through the special `children` prop. :contentReference[oaicite:0]{index=0}

## Key Concepts

- Every custom component receives a `props` object.
- React automatically provides a special `children` prop.
- `children` contains everything placed between a component's opening and closing tags.
- `children` can contain:
  - Plain text
  - HTML elements
  - Other React components
  - Complex JSX
- Component composition is useful when a component acts as a wrapper.
- Using `children` or using a custom prop like `label` are both valid approaches. Choose the one that best fits the use case. :contentReference[oaicite:1]{index=1}

## Important Terms

| Term | Meaning |
|------|---------|
| Component Composition | Building components that wrap other content. |
| `children` | A special React prop containing the wrapped JSX. |
| Wrapper Component | A component that displays other components or JSX inside itself. |
| Props | Data passed into a component. |

## Workflow / Process

1. Create a custom component.
2. Wrap JSX inside the component.
3. React stores the wrapped content in `props.children`.
4. Render it with `{props.children}` or `{children}`.

## Key Takeaways

- `children` is automatically created by React.
- It contains everything between opening and closing component tags.
- It is useful for reusable wrapper components.
- Using `children` or a custom prop depends on the use case.

## Quick Revision

- `props.children` = wrapped content.
- Good for wrapper components.
- React provides `children` automatically.

---

# Reacting to Events [Core Concept]

## Definition

React handles user events by using event props such as `onClick` instead of manually attaching event listeners with JavaScript. :contentReference[oaicite:2]{index=2}

## Key Concepts

- React uses declarative event handling.
- Events are attached with JSX props such as:
  - `onClick`
  - `onChange`
  - `onSubmit`
- The value passed to an event prop must be a function.
- Event handler functions are commonly created inside the component.
- Event handler names usually follow conventions such as:
  - `handleClick`
  - `clickHandler`

## Important Terms

| Term | Meaning |
|------|---------|
| Event | A user action like clicking a button. |
| Event Handler | Function that runs when an event occurs. |
| `onClick` | React prop used to listen for click events. |
| Declarative | Letting React handle DOM updates instead of manipulating the DOM manually. |

## Workflow / Process

1. Create an event handler function.
2. Pass the function to an event prop.
3. React listens for the event.
4. React executes the function when the event occurs.

## Key Takeaways

- React uses event props instead of `addEventListener()`.
- Event props receive functions.
- React executes the function when the event happens.
- Do not manipulate the DOM manually for event handling.

## Quick Revision

- `onClick` listens for clicks.
- Pass a function.
- React calls the function when the event occurs.

---

# Passing Functions as Values to Props

## Definition

Functions can be passed as props to custom components so that child components can notify parent components when an event occurs. :contentReference[oaicite:3]{index=3}

## Key Concepts

- Custom components can receive functions through props.
- Prop names are chosen by the developer.
- A common naming convention is to start callback props with `on`.
- The child component forwards the received function to a built-in event prop like `onClick`.

## Important Terms

| Term | Meaning |
|------|---------|
| Callback Function | Function passed to another component. |
| Callback Prop | A prop whose value is a function. |
| `onSelect` | Example of a custom callback prop. |

## Workflow / Process

1. Create a function in the parent component.
2. Pass the function as a prop.
3. Receive the function in the child component.
4. Attach it to an event like `onClick`.
5. React calls the parent function when the event occurs.

## Key Takeaways

- Functions can be passed through props.
- Child components can trigger parent logic.
- Prefixing callback props with `on` is a common convention.

## Quick Revision

- Parent creates function.
- Child receives function.
- Child forwards function to `onClick`.

---

# Passing Custom Arguments to Event Functions

## Definition

If an event handler needs custom values, wrap the function call inside an anonymous arrow function. :contentReference[oaicite:4]{index=4}

## Key Concepts

- Passing a function directly does not allow custom arguments.
- An arrow function lets you control how the handler is called.
- The arrow function is passed to the event.
- The actual handler runs only after the event occurs.
- Different arguments can be passed depending on which element was clicked.

## Important Terms

| Term | Meaning |
|------|---------|
| Arrow Function | Anonymous function using `=>`. |
| Argument | Value passed into a function. |
| Parameter | Variable that receives an argument. |

## Workflow / Process

1. Create the event handler.
2. Wrap the handler inside an arrow function.
3. Pass custom arguments inside the arrow function.
4. React executes the arrow function on the event.
5. The handler receives the custom values.

## Key Takeaways

- Use arrow functions when passing custom arguments.
- The handler is not executed immediately.
- Different buttons can pass different values.

## Quick Revision

- `onClick={handleClick}` → No custom argument.
- `onClick={() => handleClick("Components")}` → Custom argument.

---

# How NOT to Update the UI - A Look Behind The Scenes of React [Core Concept]

## Definition

Updating a normal JavaScript variable does not update the React UI because React does not automatically re-execute the component function. :contentReference[oaicite:5]{index=5}

## Key Concepts

- React executes a component when it is first rendered.
- Updating a normal variable does not trigger another render.
- React updates the UI only after re-rendering the component.
- React compares the newly generated JSX with the current UI and updates only the differences.

## Important Terms

| Term | Meaning |
|------|---------|
| Render | React executing a component function. |
| Re-render | React executing the component again after state changes. |
| JSX | UI description returned by a component. |

## Workflow / Process

1. Component renders.
2. JSX is created.
3. Variable changes.
4. Component does not re-render.
5. UI stays the same.

## Key Takeaways

- Regular variables do not update the UI.
- Components are not automatically re-executed.
- React needs state to trigger a re-render.

## Quick Revision

- Variable changes ≠ UI changes.
- React only updates after re-rendering.
- Use state instead of normal variables.

---

# Managing State & Using Hooks [Core Concept]

## Definition

State is data managed by React. The `useState` Hook stores component data and tells React to re-render the component whenever the state changes. :contentReference[oaicite:6]{index=6}

## Key Concepts

- `useState` is a React Hook.
- Hooks are functions whose names begin with `use`.
- Hooks must:
  - Be called inside React components (or custom Hooks).
  - Be called at the top level of the component.
- `useState(initialValue)` returns an array with:
  - Current state value.
  - State updating function.
- Calling the setter:
  - Updates the stored value.
  - Schedules a component re-render.
- State updates are scheduled by React, so the updated value is available during the next render, not immediately after calling the setter.

## Important Terms

| Term | Meaning |
|------|---------|
| State | Data managed by React. |
| Hook | Special React function starting with `use`. |
| `useState` | Hook used to create state. |
| Setter Function | Function returned by `useState` that updates state. |
| Initial State | The value used during the first render. |

## Workflow / Process

1. Call `useState(initialValue)`.
2. Receive the state value and setter function.
3. Display the state value in JSX.
4. Call the setter to update state.
5. React re-renders the component.
6. The updated state appears in the UI.

## Key Takeaways

- State is managed by React.
- `useState` returns the current value and a setter function.
- Updating state causes React to re-render.
- Hooks must be called at the top level of a component.
- Updated state is available after React re-renders the component.

## Quick Revision

- `useState()` creates state.
- State updates trigger re-renders.
- Use the setter function to update state.
- Hooks only belong at the top level of React components.


################################################################################

############################################################################
**Date:03 July 2026
**Epic & Task:** P3.1-D3 — Sum of Array + Remove First Element (GFG #15,#4 + Codedamn)
**Day segment (if multi-day task):** Seg 3 of 5 · GitHub Issue #185 (OPEN by design)

---

## What I completed today

day03 p3.1 task

# Sum All Numbers in an Array

## Problem (In One Simple Sentence)

Find the total when all the numbers in the array are added together.

---

# Step 1: Solve It on Paper

### Example

```text
Array = [15, 6, 10, 2]
```

Add the numbers one by one.

```text
15 + 6 = 21

21 + 10 = 31

31 + 2 = 33
```

### Final Answer

```text
33
```

---

# Step 2: Algorithm (Plain English)

1. Start with a total of 0.
2. Look at the first number in the array.
3. Add the number to the total.
4. Keep doing this for every number in the array.
5. Return the final total.

---

# Step 3: Translate Each English Step into JavaScript

### Step 1

**English**

> Start with a total of 0.

**JavaScript**

```javascript
let sum = 0;
```

---

### Step 2

**English**

> Look at every number in the array.

**JavaScript**

```javascript
for (let i = 0; i < arr.length; i++)
```

---

### Step 3

**English**

> Add the current number to the total.

**JavaScript**

```javascript
sum += arr[i];
```

This is the same as writing:

```javascript
sum = sum + arr[i];
```

---

### Step 4

**English**

> Keep adding numbers until there are no more numbers left.

**JavaScript**

```javascript
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
```

---

### Step 5

**English**

> Return the final total.

**JavaScript**

```javascript
return sum;
```

---

# Final JavaScript Code

```javascript
function sumArray(arr) {

    // Start with a total of 0.
    let sum = 0;

    // Check every number in the array.
    for (let i = 0; i < arr.length; i++) {

        // Add the current number to the total.
        sum += arr[i];

    }

    // Return the final total.
    return sum;
}

console.log(sumArray([15, 6, 10, 2]));
```

---

# Step 4: Trace the Code

### Input

```text
[15, 6, 10, 2]
```

### Before the Loop

```text
sum = 0
```

---

### First Time Through the Loop

Current number

```text
15
```

Calculation

```text
0 + 15 = 15
```

Now

```text
sum = 15
```

---

### Second Time Through the Loop

Current number

```text
6
```

Calculation

```text
15 + 6 = 21
```

Now

```text
sum = 21
```

---

### Third Time Through the Loop

Current number

```text
10
```

Calculation

```text
21 + 10 = 31
```

Now

```text
sum = 31
```

---

### Fourth Time Through the Loop

Current number

```text
2
```

Calculation

```text
31 + 2 = 33
```

Now

```text
sum = 33
```

---

### Loop Finished

The loop has checked every number.

The final value is

```text
33
```

---

### Return

```javascript
return sum;
```

The function returns

```text
33
```

---

### Output

```text
33
```

---

# Trace Table

| Step | Current Number | Total Before | Total After |
|------|----------------|-------------:|------------:|
| Start | — | 0 | 0 |
| 1 | 15 | 0 | 15 |
| 2 | 6 | 15 | 21 |
| 3 | 10 | 21 | 31 |
| 4 | 2 | 31 | 33 |

---

# Easy Way to Remember

Imagine you have some money.

```text
₹15

₹6

₹10

₹2
```

You put all the money into one piggy bank.

- First, you have **₹0**.
- Add **₹15**.
- Add **₹6**.
- Add **₹10**.
- Add **₹2**.

When you finish, the piggy bank has:

```text
₹33
```

This program works the same way. It keeps adding each number until it finds the total.

---

# Time Complexity

```text
O(n)
```

The program looks at each number **one time**.

---

# Space Complexity

```text
O(1)
```

The program only uses one extra variable (`sum`) to keep track of the total.






# Remove the First Element from an Array Using `slice()`

## The Code

```javascript
// Initialize an array
let arr = [5, 6, 7];

// Create a new array without the first element
arr = arr.slice(1);

console.log(arr);
```

---

# What Is the Goal?

We want to remove the **first number** from the array.

### Starting Array

```text
[5, 6, 7]
```

### Final Array

```text
[6, 7]
```

---

# Imagine This

Imagine you have three toys lined up.

```text
🚗   🚲   ⚽
```

The first toy is removed.

Now only these are left.

```text
🚲   ⚽
```

The program does the same thing with numbers.

---

# Step 1

```javascript
let arr = [5, 6, 7];
```

### What does this mean?

We make an array called **arr**.

Inside the array are three numbers.

```text
Index:   0   1   2

Array:  [5, 6, 7]
```

Think of the index as the seat number.

- Seat 0 → 5
- Seat 1 → 6
- Seat 2 → 7

---

# Step 2

```javascript
arr = arr.slice(1);
```

### What does `slice(1)` mean?

The word **slice** means **cut** or **take a part of something**.

The number **1** tells JavaScript:

> "Start taking numbers from **index 1**."

Remember our array:

```text
Index:   0   1   2

Array:  [5, 6, 7]
```

Start at index **1**.

So JavaScript takes

```text
6

↓

7
```

It leaves behind

```text
5
```

A **new array** is created.

```text
[6, 7]
```

Then we save this new array back into `arr`.

Now

```text
arr = [6, 7]
```

---

# Step 3

```javascript
console.log(arr);
```

### What does this do?

`console.log()` prints the array on the screen.

Output

```text
[6, 7]
```

---

# Complete Walkthrough

### Before `slice()`

```text
arr

↓

[5, 6, 7]
```

---

### `slice(1)`

Start from index **1**.

```text
Index:   0   1   2

Array:  [5, 6, 7]
          ✖   ✔   ✔
```

Take only

```text
[6, 7]
```

---

### Save the New Array

```text
arr = [6, 7]
```

---

### Print

```text
[6, 7]
```

---

# Trace Table

| Step | Array |
|------|-------|
| Start | `[5, 6, 7]` |
| `slice(1)` creates | `[6, 7]` |
| Store it in `arr` | `[6, 7]` |
| Output | `[6, 7]` |

---

# Easy Way to Remember

Imagine three children standing in a line.

```text
Tom   Sam   Alex
```

The teacher says,

> "Start from the **second child**."

So Tom is skipped.

Only these children remain.

```text
Sam   Alex
```

That is exactly what `slice(1)` does.

It skips the **first element** and creates a **new array** with everything after it.

---

# Final Output

```text
[6, 7]
```

---

# Important Note

`slice()` **does not change the original array** by itself.

It creates a **new array**.

In this code,

```javascript
arr = arr.slice(1);
```

we replace the old array with the new one.

If we wrote only:

```javascript
arr.slice(1);
```

the original array would still be

```text
[5, 6, 7]
```

because the new array was never saved.

---

# Time Complexity

```text
O(n)
```

JavaScript copies the remaining elements into a new array.

---

# Space Complexity

```text
O(n)
```

A **new array** is created to store the copied elements.




# Sum of All Odd Length Subarrays

## What Is the Problem?

We have an array of numbers.

```text
[1, 4, 2, 5, 3]
```

We need to:

- Find every **odd-length subarray**.
- Add the numbers inside each subarray.
- Finally, add all those sums together.

---

# What is an Array?

An array is a list of numbers.

Example:

```text
[1, 4, 2, 5, 3]
```

---

# What is a Subarray?

A subarray is a group of numbers that are **next to each other**.

For example,

```text
[1, 4]
```

is a subarray because **1 and 4 are together**.

But

```text
[1, 2]
```

is **NOT** a subarray because **4 is between them**.

---

# What is an Odd-Length Subarray?

An odd-length subarray has:

- 1 number
- 3 numbers
- 5 numbers
- 7 numbers

Examples

Length = 1

```text
[1]
```

Length = 3

```text
[1,4,2]
```

Length = 5

```text
[1,4,2,5,3]
```

Even lengths like 2 or 4 are **not allowed**.

---

# Example

Array

```text
[1,4,2,5,3]
```

---

## Length 1 Subarrays

```text
[1] = 1

[4] = 4

[2] = 2

[5] = 5

[3] = 3
```

Total

```text
1 + 4 + 2 + 5 + 3 = 15
```

---

## Length 3 Subarrays

First

```text
[1,4,2]

1 + 4 + 2 = 7
```

Second

```text
[4,2,5]

4 + 2 + 5 = 11
```

Third

```text
[2,5,3]

2 + 5 + 3 = 10
```

Total

```text
7 + 11 + 10 = 28
```

---

## Length 5 Subarray

Only one exists.

```text
[1,4,2,5,3]

1 + 4 + 2 + 5 + 3 = 15
```

---

# Final Total

Length 1

```text
15
```

+

Length 3

```text
28
```

+

Length 5

```text
15
```

=

```text
58
```

---

# Imagine This

Imagine five children standing in a line.

```text
1   4   2   5   3
```

We can make groups.

One child

```text
[1]
```

Three children

```text
[1 4 2]
```

Five children

```text
[1 4 2 5 3]
```

We never skip anyone.

The children must stand **next to each other**.

After making each group,

we add their numbers.

Finally,

we add every group's total.

---

# How Can We Solve It?

## Step 1

Take every possible starting position.

```
Start at

1

↓

4

↓

2

↓

5

↓

3
```

---

## Step 2

Make every possible subarray.

Example

Start at

```text
1
```

Possible groups

```text
[1]

[1,4]

[1,4,2]

[1,4,2,5]

[1,4,2,5,3]
```

---

## Step 3

Only keep odd lengths.

Keep

```text
[1]

[1,4,2]

[1,4,2,5,3]
```

Ignore

```text
[1,4]

[1,4,2,5]
```

because they have even lengths.

---

## Step 4

Find the sum of each odd-length group.

Example

```text
[1,4,2]

=

7
```

---

## Step 5

Keep adding every answer.

Eventually

```text
58
```

---

# Simple JavaScript Solution

```javascript
function sumOddLengthSubarrays(arr) {

    let total = 0;

    // Choose the starting position
    for (let start = 0; start < arr.length; start++) {

        // Choose the ending position
        for (let end = start; end < arr.length; end++) {

            // Find the length
            let length = end - start + 1;

            // Only use odd lengths
            if (length % 2 !== 0) {

                let sum = 0;

                // Add every number
                for (let i = start; i <= end; i++) {

                    sum += arr[i];

                }

                total += sum;

            }

        }

    }

    return total;
}

console.log(sumOddLengthSubarrays([1,4,2,5,3]));
```

Output

```text
58
```

---

# What Does `%` Mean?

```javascript
length % 2
```

It checks if a number is odd or even.

Example

```text
3 % 2 = 1

Odd
```

```text
4 % 2 = 0

Even
```

So

```javascript
length % 2 !== 0
```

means

> Only use odd numbers.

---

# Easy Way to Remember

Imagine you have LEGO blocks.

```
1 4 2 5 3
```

Make groups.

Only groups with

- 1 block
- 3 blocks
- 5 blocks

are allowed.

Add the numbers inside each group.

Then add all the group totals together.

That final answer is what the program returns.

---

# Time Complexity

```text
O(n³)
```

Because:

- First loop chooses the starting point.
- Second loop chooses the ending point.
- Third loop adds the numbers.

---

# Follow-up (Advanced)

The question asks:

> Can you solve it in **O(n)**?

Yes!

Instead of checking every subarray, we count **how many odd-length subarrays each number belongs to**.

Then we multiply:

```text
Number × Number of Times It Appears
```

Finally, add all those results.

This is a much faster solution, but it's usually taught after you're comfortable with loops and arrays.








################################################################################

- Commit hash / link:
- Checkbox ticked in issue: Yes / No

## What is left in this task (if multi-day)

- Next segment:no
- Tomorrow's goal:To be focus on p1.2

## Hours today

Learning: 2 hrs | Building: 1 hr | Practice: 1 hr | **Total: 4 hrs**

## Blockers

- [No] None
- [No] Concept unclear:
- [No] Setup issue:

## Questions for mentor

Q1:No
Q2:No

## Tomorrow's plan

Tomorrow I will focus on p1.2 and produce the results.

## Energy & focus (1–5)

Energy: 5 / 5 | Focus: 5 / 5
