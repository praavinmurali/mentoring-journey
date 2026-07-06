# Daily Progress Log — Day 02

**Date:02 July 2026
**Epic & Task:** P1.2-D1 — Master HTML with AI (S4 all 38 lessons)
**Day segment (if multi-day task):** Seg 1 of 2 · GitHub Issue #148 (OPEN by design)

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

# HTML Fundamentals Notes

> This Markdown file is a template that combines all the HTML topics we
> covered.

# Table of Contents

1.  How Browsers Read HTML and Build the DOM
2.  Anatomy of an HTML Document
3.  HTML Tag vs HTML Element
4.  Headings and Paragraphs
5.  Lists (`ul`, `ol`, `dl`)
6.  Links (`a`)
7.  Tables
8.  Audio
9.  Video
10. iframe
11. Forms

------------------------------------------------------------------------

# 1. How Browsers Read HTML and Build the DOM

## Steps

1.  Browser downloads the HTML file.
2.  Reads HTML from top to bottom.
3.  Creates the DOM (Document Object Model).
4.  CSS styles the DOM.
5.  JavaScript can update the DOM.

## DOM Example

``` text
Document
└── html
    ├── head
    └── body
        ├── h1
        └── p
```

------------------------------------------------------------------------

# 2. Anatomy of an HTML Document

``` html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>Hello World</p>
</body>
</html>
```

## Parts

-   `<!DOCTYPE html>` → HTML5 declaration
-   `<html>` → Root element
-   `<head>` → Page information
-   `<body>` → Visible content

------------------------------------------------------------------------

# 3. HTML Tag vs HTML Element

## Tag

``` html
<p>
```

or

``` html
</p>
```

## Element

``` html
<p>Hello World</p>
```

Element = Opening Tag + Content + Closing Tag

------------------------------------------------------------------------

# 4. Headings and Paragraphs

``` html
<h1>Main Heading</h1>
<h2>Section</h2>
<h3>Subsection</h3>
<h4>Topic</h4>
<h5>Small Heading</h5>
<h6>Minor Heading</h6>

<p>This is a paragraph.</p>
```

------------------------------------------------------------------------

# 5. Lists

## Unordered List

``` html
<ul>
    <li>Personal Training</li>
    <li>Yoga</li>
</ul>
```

## Ordered List

``` html
<ol>
    <li>Register</li>
    <li>Join</li>
</ol>
```

## Description List

``` html
<dl>
    <dt>Premium Plan</dt>
    <dd>Includes personal training.</dd>
</dl>
```

------------------------------------------------------------------------

# 6. Links

``` html
<a href="membership.html">Membership Plans</a>
<a href="mailto:info@example.com">Email Us</a>
<a href="tel:+919876543210">Call Us</a>
```

------------------------------------------------------------------------

# 7. Tables

``` html
<table>
    <caption>Membership Plans</caption>
    <thead>
        <tr>
            <th>Plan</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Basic</td>
            <td>₹1500</td>
        </tr>
    </tbody>
</table>
```

------------------------------------------------------------------------

# 8. Audio

``` html
<audio controls>
    <source src="warmup.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>
```

------------------------------------------------------------------------

# 9. Video

``` html
<video controls>
    <source src="lesson.mp4" type="video/mp4">
    Your browser does not support video.
</video>
```

------------------------------------------------------------------------

# 10. iframe

``` html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/B2uqmomb1Cs"
    title="Workout Video"
    allowfullscreen>
</iframe>
```

Use `iframe` to embed YouTube videos, Google Maps, Forms, and other
third-party content.

------------------------------------------------------------------------

# 11. Forms

``` html
<form action="/register" method="post">

<label for="name">Full Name</label>
<input type="text" id="name" name="full_name">

<label for="email">Email</label>
<input type="email" id="email" name="email">

<label for="plan">Membership</label>
<select id="plan" name="plan">
    <option>Basic</option>
    <option>Premium</option>
</select>

<label for="message">Message</label>
<textarea id="message" name="message"></textarea>

<button type="submit">Register</button>

</form>
```

------------------------------------------------------------------------

# Summary

-   HTML provides structure.
-   The browser converts HTML into the DOM.
-   Use semantic elements for their intended purpose.
-   Choose the correct list, table, media, and form elements based on
    meaning, not appearance.

##################################################################################


############################################################################
**Date:02 July 2026
**Epic & Task:** P2.1-D2 — Dynamic Values + Props Basics (Section 3, part 2)
**Day segment (if multi-day task):** Seg 2 of 5 · GitHub Issue #248 (OPEN by design)

---

## What I completed today
day2 p2.1 task

# Using & Outputting Dynamic Values [Core Concept]

## Definition

Dynamic values allow React components to display data that can change instead of showing fixed (hard-coded) text. JSX uses curly braces (`{}`) to evaluate JavaScript expressions and display their results.

## Key Concepts

- JSX can contain both static text and dynamic values.
- Dynamic values are written inside a single pair of curly braces `{}`.
- Any valid JavaScript expression can be placed inside the curly braces.
- React evaluates the expression and displays its result.
- Dynamic values can be used:
  - Between HTML tags
  - As attribute values
- Complex expressions can be stored in variables before being used in JSX to keep the code cleaner.

## Important Terms

| Term | Meaning |
|------|---------|
| JSX | JavaScript syntax used to describe the UI. |
| Dynamic Value | A value calculated while the component is rendered. |
| JavaScript Expression | Code that produces a value. |
| Curly Braces `{}` | Tell JSX to evaluate JavaScript code. |
| Render | The process of creating and displaying the UI. |

## Workflow / Process

1. Write a JavaScript expression.
2. Place it inside `{}`.
3. React evaluates the expression.
4. The result is displayed in the UI.

## Key Takeaways

- Curly braces are used to output dynamic values.
- Any JavaScript expression can be used inside `{}`.
- Dynamic values can appear as text or attribute values.
- Storing expressions in variables keeps JSX easier to read.

## Quick Revision

- `{}` = JavaScript inside JSX.
- Expressions return values.
- Dynamic values make components flexible.
- Variables help keep JSX clean.

---

# Setting HTML Attributes Dynamically & Loading Image Files

## Definition

HTML attributes in JSX can receive dynamic values by using curly braces. Images should be imported into React components instead of directly using file paths so they are included correctly during the build process.

## Key Concepts

- JSX attributes can receive JavaScript values.
- Imported images can be assigned to the `src` attribute.
- Images are imported using JavaScript `import`.
- Imported images are handled correctly during the project build process.
- When using dynamic attribute values, do not wrap the value in quotation marks.

## Important Terms

| Term | Meaning |
|------|---------|
| import | Loads another file into the current file. |
| src | Specifies the image source. |
| Dynamic Attribute | An attribute whose value comes from JavaScript. |
| Build Process | Converts and prepares the project for deployment. |

## Workflow / Process

1. Import the image.
2. Store it in a variable.
3. Use the variable inside `{}`.
4. Assign it to the `src` attribute.

## Key Takeaways

- Import images instead of typing file paths directly.
- Dynamic attributes use curly braces.
- Imported images are handled during the build process.
- Do not use quotes around dynamic attribute values.

## Quick Revision

- Import image.
- Use `{imageVariable}`.
- No quotation marks.
- Better for deployment.

---

# Making Components Reusable with Props [Core Concept]

## Definition

Props (properties) allow data to be passed into a component so that the same component can display different information each time it is used.

## Key Concepts

- Components become reusable by accepting props.
- Props are passed as custom attributes.
- React collects all props into a single object.
- The component reads values from the props object.
- Props can contain different types of values:
  - Strings
  - Numbers
  - Objects
  - Arrays
  - Variables

## Important Terms

| Term | Meaning |
|------|---------|
| Props | Data passed into a component. |
| Reusable Component | A component used multiple times with different data. |
| Custom Attribute | An attribute created for your own component. |
| Props Object | Object containing all received props. |

## Workflow / Process

1. Create a reusable component.
2. Pass data as custom attributes.
3. React creates a props object.
4. Read values from the props object.
5. Display the values inside JSX.

## Key Takeaways

- Props make components reusable.
- Props are received as one object.
- Custom attribute names become object property names.
- Props allow different content without changing the component.

## Quick Revision

- Pass data using props.
- React creates one props object.
- Access values with `props.propertyName`.
- One component can display different data.

---

# Alternative Props Syntaxes

## Definition

React and JavaScript provide shorter ways to pass and receive props, making components easier to write and maintain.

## Key Concepts

### Object Destructuring

Instead of writing:

```jsx
props.title
props.description
props.image
```

You can write:

```jsx
function Component({ title, description, image })
```

Each property becomes its own variable.

---

### Spread Operator

Instead of passing every prop one by one:

```jsx
<Component
  title={object.title}
  description={object.description}
  image={object.image}
/>
```

You can write:

```jsx
<Component {...object} />
```

All object properties become props automatically.

---

### Passing a Single Object

Instead of passing multiple props separately:

```jsx
<Component
  title={...}
  description={...}
  image={...}
/>
```

Pass the entire object:

```jsx
<Component concept={object} />
```

Inside the component:

```jsx
concept.title
concept.description
concept.image
```

---

### Rest Property Syntax

Multiple props can be grouped into one object.

```jsx
function Component({ ...concept })
```

Now all received props are stored inside `concept`.

---

### Default Prop Values

A prop can have a default value if none is provided.

```jsx
function Button({ type = "submit" })
```

If `type` is not passed, `"submit"` is used automatically.

## Important Terms

| Term | Meaning |
|------|---------|
| Object Destructuring | Extracts object properties into variables. |
| Spread Operator (`...`) | Passes all object properties as props. |
| Rest Property (`...`) | Collects multiple props into one object. |
| Default Value | A value used when no prop is provided. |

## Workflow / Process

### Using Object Destructuring

1. Receive props.
2. Extract needed properties.
3. Use the variables directly.

### Using the Spread Operator

1. Store data in an object.
2. Spread the object into the component.
3. Every property becomes a prop.

### Using Default Values

1. Receive a prop.
2. Assign a default value.
3. Use the default when no value is passed.

## Key Takeaways

- Object destructuring reduces repeated `props.` code.
- The spread operator passes multiple props quickly.
- Entire objects can be passed as one prop.
- Rest properties collect multiple props into one object.
- Default values make optional props easier to handle.

## Quick Revision

- `{ title }` → Object destructuring.
- `{...object}` → Spread operator.
- `concept={object}` → Pass one object.
- `{ ...concept }` → Rest properties.
- `type = "submit"` → Default prop value.

################################################################################

############################################################################
**Date:02 July 2026
**Epic & Task:** P3.1-D2 — Find Minimum Value in Array (GFG #30 + Codedamn)
**Day segment (if multi-day task):** Seg 2 of 5 · GitHub Issue #184 (OPEN by design)

---

## What I completed today

day03 p3.1 task
# Find the Smallest Number - Step by Step Explanation

## The Code

```javascript
function findMin(arr) {
    // Assume the first element is the minimum
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            // Update min if a smaller value is found
            min = arr[i];
        }
    }

    return min;
}

console.log(findMin([5, 10, -1, 8]));
```

---

# What Is the Goal?

We want to find the **smallest number** in a list of numbers.

Our list is:

```text
[5, 10, -1, 8]
```

The smallest number is:

```text
-1
```

---

# Imagine This

Imagine you have four number cards.

```text
5   10   -1   8
```

You want to find the smallest card.

Instead of looking at all the cards at once, you look at **one card at a time**.

---

# Step 1

```javascript
function findMin(arr) {
```

### What does this mean?

We are making a function named **findMin**.

The function receives a list of numbers.

Example:

```text
[5, 10, -1, 8]
```

Inside the function,

```text
arr = [5, 10, -1, 8]
```

---

# Step 2

```javascript
let min = arr[0];
```

### What does this mean?

Pretend the **first number is the smallest**.

The first number is:

```text
5
```

So now,

```text
min = 5
```

We don't know if 5 is really the smallest.

We are just using it as our starting point.

---

# Step 3

```javascript
for (let i = 1; i < arr.length; i++) {
```

### What does this mean?

Now we start checking the rest of the numbers.

We start from **1** because we already looked at the first number.

The loop checks:

```text
10

↓

-1

↓

8
```

One number at a time.

---

# Step 4

### First Time Through the Loop

```text
Current number = 10

Smallest number = 5
```

The program asks:

```text
Is 10 smaller than 5?
```

Answer:

```text
No
```

So nothing changes.

```text
min = 5
```

---

# Step 5

### Second Time Through the Loop

Now the current number is

```text
-1
```

The program asks

```text
Is -1 smaller than 5?
```

Answer

```text
Yes
```

Now the program remembers this new number.

```javascript
min = arr[i];
```

Now

```text
min = -1
```

---

# Step 6

### Third Time Through the Loop

Current number

```text
8
```

The program asks

```text
Is 8 smaller than -1?
```

Answer

```text
No
```

Nothing changes.

```text
min = -1
```

---

# Step 7

The loop is finished.

Every number has been checked.

Now the smallest number is

```text
-1
```

---

# Step 8

```javascript
return min;
```

### What does this mean?

Give back the smallest number.

The function returns

```text
-1
```

---

# Step 9

```javascript
console.log(findMin([5, 10, -1, 8]));
```

### What does this do?

It calls the function.

The function finds the smallest number.

Then it prints the answer.

Output

```text
-1
```

---

# Complete Walkthrough

### Starting List

```text
[5, 10, -1, 8]
```

### Start

```text
min = 5
```

---

### Check 10

```text
10 < 5 ?

No
```

```text
min = 5
```

---

### Check -1

```text
-1 < 5 ?

Yes
```

```text
min = -1
```

---

### Check 8

```text
8 < -1 ?

No
```

```text
min = -1
```

---

### Final Answer

```text
-1
```

---

# Trace Table

| Step | Current Number | Is It Smaller? | Smallest Number |
|------|----------------|----------------|-----------------|
| Start | 5 | — | 5 |
| 1 | 10 | No | 5 |
| 2 | -1 | Yes | -1 |
| 3 | 8 | No | -1 |

---

# Easy Way to Remember

Imagine you're in a classroom looking for the **shortest student**.

1. Pick the first student.
2. Think, "This is the shortest for now."
3. Walk to the next student.
4. If the new student is shorter, remember them instead.
5. Keep checking everyone.
6. After checking all students, the one you remember is the shortest.

This program works exactly the same way, but instead of students, it checks numbers.

---

# Final Output

```text
-1
```


# Move Zeroes to the End of an Array

## Problem

Move all the **0s** to the end of the array.

Keep all the other numbers in the same order.

### Example

```text
Input

[0, 1, 0, 3, 12]

Output

[1, 3, 12, 0, 0]
```

---

# Imagine This

Imagine you have a line of students.

```text
0   1   0   3   12
```

The students with number **0** are asked to stand at the back of the line.

Everyone else stays in the same order.

The new line becomes

```text
1   3   12   0   0
```

---

# Step 1: The Code

```javascript
function moveZeroes(nums) {

    let index = 0;

    // First loop: Move all non-zero numbers to the front
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {

            nums[index] = nums[i];
            index++;

        }

    }

    // Second loop: Fill the remaining places with 0
    for (let i = index; i < nums.length; i++) {

        nums[i] = 0;

    }

    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
```

---

# Step 2: Understanding Every Line

## Function

```javascript
function moveZeroes(nums)
```

We make a function called **moveZeroes**.

It receives an array.

Example

```text
nums = [0, 1, 0, 3, 12]
```

---

## Create a Variable

```javascript
let index = 0;
```

This tells us where to place the next non-zero number.

At first,

```text
index = 0
```

---

# First Loop

```javascript
for (let i = 0; i < nums.length; i++)
```

This loop checks every number.

```
0

↓

1

↓

0

↓

3

↓

12
```

One by one.

---

# First Number

```text
nums[0] = 0
```

Question

```text
Is it NOT zero?
```

Answer

```text
No
```

So we do nothing.

---

# Second Number

```text
nums[1] = 1
```

Question

```text
Is it NOT zero?
```

Answer

```text
Yes
```

So we copy it.

```javascript
nums[index] = nums[i];
```

This becomes

```text
nums[0] = 1
```

Now the array looks like

```text
[1, 1, 0, 3, 12]
```

Then

```javascript
index++;
```

Now

```text
index = 1
```

---

# Third Number

```text
nums[2] = 0
```

Question

```text
Is it NOT zero?
```

Answer

```text
No
```

Skip it.

---

# Fourth Number

```text
nums[3] = 3
```

Copy it.

```text
nums[1] = 3
```

Array becomes

```text
[1, 3, 0, 3, 12]
```

Increase index

```text
index = 2
```

---

# Fifth Number

```text
nums[4] = 12
```

Copy it.

```text
nums[2] = 12
```

Array becomes

```text
[1, 3, 12, 3, 12]
```

Increase index

```text
index = 3
```

---

# First Loop Finished

Now the array is

```text
[1, 3, 12, 3, 12]
```

Notice something?

The first three places are correct.

The last two places still have old numbers.

Now we fix them.

---

# Second Loop

```javascript
for (let i = index; i < nums.length; i++)
```

Remember

```text
index = 3
```

So start from position 3.

---

## Position 3

```javascript
nums[3] = 0;
```

Array becomes

```text
[1, 3, 12, 0, 12]
```

---

## Position 4

```javascript
nums[4] = 0;
```

Array becomes

```text
[1, 3, 12, 0, 0]
```

Finished!

---

# Return the Array

```javascript
return nums;
```

Return

```text
[1, 3, 12, 0, 0]
```

---

# Complete Trace

### Input

```text
[0, 1, 0, 3, 12]
```

| Step | Current Number | Action | Array |
|------|----------------|--------|-------|
| Start | — | — | [0,1,0,3,12] |
| 1 | 0 | Skip | [0,1,0,3,12] |
| 2 | 1 | Move | [1,1,0,3,12] |
| 3 | 0 | Skip | [1,1,0,3,12] |
| 4 | 3 | Move | [1,3,0,3,12] |
| 5 | 12 | Move | [1,3,12,3,12] |
| Fill | — | Put 0 | [1,3,12,0,12] |
| Fill | — | Put 0 | [1,3,12,0,0] |

---

# Final Output

```text
[1, 3, 12, 0, 0]
```

---

# Time Complexity

```
O(n)
```

We go through the array two times.

Even with two loops, each number is only visited a constant number of times.

---

# Space Complexity

```
O(1)
```

We do not create another array.

We only use one extra variable:

```javascript
index
```

So the space used stays the same no matter how big the array becomes.

---

# Easy Way to Remember

Imagine you are cleaning a row of toys.

```
0  1  0  3  12
```

- Pick up every toy that is **not 0** and place it at the front.
- When you're done, fill all the empty spaces with **0**.

That's exactly what this program does!








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
