# Daily Progress Log — Day 02
**Date:21 July 2026
**Epic & Task:** P1.7-D3 — React Conditional + useEffect + Data Fetching + Router (S22 L26-39 + S37)

**Day segment (if multi-day task):** Seg 3 of 3 · GitHub Issue #161 (OPEN by design)
###############################################################################
**course transcript:**
# Section 22 (L26–L39) — React Study Notes

---

# Lesson: Conditional Rendering & List Rendering (L26–L28)

## Definition
Conditional rendering means showing different UI on screen depending on whether a condition is true or false (e.g., show "Welcome back" if logged in, else show "Please login"). List rendering (using `map`) means looping over an array of data and rendering a JSX element for each item.

## Key Concepts
- **if/else statement**: JSX doesn't support `if` directly inside the markup, so the `if/else` logic must be written *before* the `return` statement, and each branch returns its own JSX block.
- **Ternary operator**: `condition ? valueIfTrue : valueIfFalse` — used *inline* inside JSX for quick conditional rendering. Cleaner than if/else for simple cases.
- **&& (logical AND)**: mentioned as another conditional rendering tool alongside if/else and ternary (renders content only when the condition is true).
- **map() for lists**: Array `.map()` loops through an array and returns JSX for each element — acts like a "repeat button" for JSX. Used for rendering lists of users, products, cards, etc.
- **key prop**: Every item rendered in a list needs a unique `key` (ideally a database ID; index can be used as a fallback) so React can track and manage changes efficiently. Missing keys cause a console warning.

## Important Terms
| Term | Meaning |
|------|---------|
| Conditional Rendering | Displaying UI elements only when a specific condition is met |
| Ternary Operator | Shorthand conditional expression: `condition ? true : false` |
| map() | Array method used to loop over data and return JSX for each item |
| key prop | Unique identifier React uses to track list items during re-renders |
| Data Wrangling | Process of transforming/rendering array data (e.g., array of objects) into UI |

## Workflow / Process
1. Write the `if/else` logic **before** `return` if using if/else.
2. Or use a **ternary** directly inside JSX for inline conditions.
3. To render a list: call `array.map(callback)` inside `{}` in JSX.
4. Return one JSX element per item inside the `map` callback.
5. Add a unique `key` prop to the outermost element in the loop.
6. Works the same for arrays of primitives (strings) or arrays of objects.

## Key Takeaways
- `if/else` must go before `return`; JSX cannot contain a raw `if` statement inline.
- Ternary operator is best for two-outcome inline conditional rendering.
- `map()` is the standard way to render dynamic lists in React.
- Always provide a unique `key` — prefer an ID from data over array index.
- Conditional rendering + map are core building blocks of dynamic, data-driven UIs.

## Quick Revision
- if/else → before return
- Ternary → `cond ? true : false`, used inline in JSX
- map() → loops array, returns JSX per item
- key prop → required, must be unique (use ID > index)
- Works for arrays of values and arrays of objects alike

---

# Lesson: useEffect, Side Effects & Data Fetching (L29–L35)

## Definition
A **side effect** is any action that happens outside the normal rendering of JSX and affects something beyond the component itself — e.g., fetching data from an API, setting the document title, adding/removing event listeners, saving to local storage, or starting a timer. **useEffect** is the React hook used to run this kind of code *after* the component has rendered.

## Key Concepts
- **Why useEffect exists**: Before hooks, side effects were managed with lifecycle methods (`componentDidMount`, `componentDidUpdate`, etc.), which was messy. `useEffect` gives one clean place to say "once the UI is shown, do this."
- **Syntax**: `useEffect(callbackFunction, dependencyArray)`.
- **Three dependency-array behaviors**:
  1. **No array** → effect runs after **every** render (can hurt performance / cause repeated API calls).
  2. **Empty array `[]`** → effect runs **once**, only when the component mounts.
  3. **Array with values `[value]`** → effect runs on mount **and** whenever any value in the array changes.
- **Data fetching flow**: Component mounts → `useEffect` runs after initial render → fetch/axios request sent → API responds (usually JSON) → `useState` stores the data → UI updates.
- **Managing 3 states when fetching**: `loading` (true initially), `error` (null initially), and the actual `data`/`product` state.
- **Fetch vs Axios**: Both make HTTP requests; Axios is a third-party library (`npm i axios`) that simplifies syntax (no need to manually parse `.json()`, cleaner `.then()` chaining, response data is available directly via `response.data`).
- **Promises vs async/await**: `.then()/.catch()` (promise-based) can be refactored into `async/await` with `try/catch/finally` for cleaner, more readable code. Note: the `useEffect` callback itself cannot be marked `async` directly — instead, define an inner async function inside `useEffect` and call it.
- **Local Storage (Todo App project)**: `localStorage.getItem(key)` retrieves saved data (returns string, so use `JSON.parse`); `localStorage.setItem(key, value)` saves data (must `JSON.stringify` first). To avoid data being wiped on first render, initialize state directly from local storage inside `useState`'s initializer function rather than loading it in a separate `useEffect`.

## Important Terms
| Term | Meaning |
|------|---------|
| Side Effect | Code that runs outside rendering (API calls, timers, DOM/browser APIs) |
| useEffect | Hook that runs a callback after render, controlled by a dependency array |
| Dependency Array | Second argument to useEffect; determines when the effect re-runs |
| async/await | Syntax for handling asynchronous code more readably than `.then()` chains |
| Axios | Third-party HTTP client library simplifying API requests |
| Loading/Error/Data states | The three `useState` values typically needed for any data-fetching component |
| localStorage | Browser API for persisting data across refreshes/sessions |

## Workflow / Process (Data Fetching)
1. Import `useEffect` and `useState`.
2. Create three states: `loading` (default `true`), `error` (default `null`), `data` (default `null`/`[]`).
3. Inside `useEffect`, define an async function (e.g., `fetchProduct`).
4. Use `try { await axios.get(url) } catch (err) { setError(err.message) } finally { setLoading(false) }`.
5. Call the async function immediately inside `useEffect`.
6. Pass `[]` as the dependency array so it only runs once on mount.

## Workflow / Process (Todo App with Local Storage)
1. `useState` for `todo` (input value) and `todos` (list) — initialize `todos` by reading and `JSON.parse`-ing from `localStorage.getItem('todos')` (fallback to `[]`).
2. On form submit: validate input isn't empty → create `{ id: Date.now(), text: todo }` → update state with spread operator `[...todos, newTodo]` → clear input.
3. Use a second `useEffect` with `[todos]` as dependency to call `localStorage.setItem('todos', JSON.stringify(todos))` whenever the list changes.
4. Render list via `todos.map()` with `key={todo.id}`.
5. Delete via `todos.filter(todo => todo.id !== idToDelete)`.

## Key Takeaways
- useEffect = hook for running code after render (side effects).
- Dependency array controls run frequency: none = every render, `[]` = once, `[value]` = on change.
- Data fetching pattern: loading/error/data states + fetch inside useEffect.
- Axios simplifies requests vs. native `fetch`.
- async/await + try/catch/finally is the cleaner alternative to `.then()/.catch()`.
- localStorage requires `JSON.stringify` (save) and `JSON.parse` (read).
- Initialize state directly from localStorage to avoid overwriting saved data on first render.

## Quick Revision
- useEffect(fn, deps) — runs after render
- No deps → every render | `[]` → once on mount | `[x]` → on mount + when x changes
- Fetching = loading + error + data states
- Axios > fetch for simpler syntax
- async/await inside a function declared *inside* useEffect (not on the callback itself)
- localStorage: setItem/getItem + JSON.stringify/parse

---

# Lesson: React Router (React Router DOM) — Navigation & Blog App (L36–L39)

## Definition
**Routing** allows a user to navigate between different "pages" (components) in a React app without a full page reload. React is a Single Page Application (SPA) by default — it loads one `index.html` and swaps components in/out. **React Router DOM** is the standard third-party library that adds routing/navigation to React.

## Key Concepts
- **Why React Router**: Without it, developers would have to manually show/hide components, manage URL changes, and would lose browser back/forward functionality.
- **Core components**:
  - `BrowserRouter` — the outer wrapper that tracks the current URL and updates the app when it changes (wraps the whole routing structure).
  - `Routes` — container/traffic controller that checks the URL and renders the matching `Route`.
  - `Route` — defines a single path-to-component mapping via `path` and `element` props.
  - `Link` — replaces the HTML `<a>` tag; updates the URL without a full page refresh (keeps SPA behavior), using a `to` prop instead of `href`.
- **404 / Not Found handling**: A catch-all `Route path="*"` element renders a NotFound component; it must be placed **last** (bottom) among the routes so it only matches if nothing else does.
- **Nested Routes**: A parent `Route` (e.g., a layout component) can contain a nested child `Route`. The parent component must render an `<Outlet />` where the matched child component should appear.
- **Dynamic Routes & Params**: A route path like `/post/:id` allows dynamic segments. `useParams()` hook retrieves the URL parameter (e.g., `{ id: '2' }`), used to find/display the matching data (e.g., `posts.find(post => post.id === Number(postId))`).
- **Programmatic Navigation**: `useNavigate()` hook returns a `navigate` function to redirect users in code (e.g., on a button click) rather than via a `Link`.

## Important Terms
| Term | Meaning |
|------|---------|
| SPA (Single Page Application) | App that loads one HTML file and swaps components instead of full page reloads |
| BrowserRouter | Wrapper component that syncs the app with the browser's URL |
| Route | Defines a path → component mapping |
| Routes | Container that renders the first matching Route |
| Link | Navigation component replacing `<a>`, updates URL without reload |
| Outlet | Placeholder in a parent/layout component where nested route content renders |
| useParams | Hook to read dynamic URL segment values (e.g., an ID) |
| useNavigate | Hook to navigate programmatically (e.g., after a button click) |
| Catch-all Route (`*`) | Route matching any undefined path, used for 404 pages |

## Workflow / Process
1. `npm i react-router-dom`.
2. Wrap the app's routing structure in `<BrowserRouter>` (commonly in `App.jsx`).
3. Wrap all `<Route>` definitions in `<Routes>`.
4. Define each `<Route path="..." element={<Component />} />`.
5. For nested routes: define a parent `Route` with a layout `element`, place child `Route`(s) inside it, and add `<Outlet />` inside the layout component.
6. Use `<Link to="/about">About</Link>` instead of `<a href="/about">` for navigation links.
7. Add a final `<Route path="*" element={<NotFound />} />` at the bottom for unmatched URLs.
8. For dynamic pages (e.g., blog post details): define `path="post/:id"`, retrieve it via `const { id } = useParams()`, then look up matching data.
9. For "Go Back" or redirect-on-click behavior: `const navigate = useNavigate(); navigate('/path')`.

## Key Takeaways
- React is SPA by default; React Router adds multi-page-like navigation without reloads.
- `BrowserRouter` → `Routes` → `Route` is the core nesting structure.
- Always use `Link` (not `<a>`) to preserve SPA behavior.
- 404/catch-all route (`path="*"`) must be the last route.
- Nested routes require `<Outlet />` in the parent/layout component.
- `useParams()` reads dynamic segments from the URL; `useNavigate()` redirects programmatically.

## Quick Revision
- BrowserRouter (wrapper) → Routes (controller) → Route (path + element)
- Link replaces `<a>`; `to` instead of `href`
- Nested routing → Outlet in the layout component
- Dynamic route: `path="post/:id"` + `useParams()`
- Programmatic nav: `useNavigate()` → `navigate('/somewhere')`
- 404 route (`path="*"`) always goes last
############################################################################
**Date:21 July 2026
**Epic & Task:**P2.3-D15 — useEffect: Dependencies, Cleanup Functions, useCallback (Section 11)
**Day segment (if multi-day task):** Seg 5 of 7 · GitHub Issue #261 (OPEN by design)
***************************course trans***********************************
# Side Effects & useEffect

## Definition

A **side effect** is a task that must be performed for an app to work correctly, but that does **not directly impact the current component render cycle** (i.e., it's not needed to produce the JSX output). Examples: fetching a user's geolocation, reading/writing `localStorage`, setting/clearing timers, or manually syncing a ref with a DOM API.

## Key Concepts

- **Not every side effect needs `useEffect`.** Only use it when:
  - The side effect would otherwise cause an **infinite loop** (e.g., a state update inside a side effect that runs directly in the component body).
  - The side effect depends on something (like a `ref`) that isn't connected/available until *after* the component has rendered at least once.
- **Synchronous vs asynchronous side effects:**
  - `navigator.geolocation.getCurrentPosition()` is **asynchronous** — its callback runs at some future point, after the component function has already finished. Setting state inside it (without `useEffect`) causes an infinite render loop.
  - `localStorage.getItem`/`setItem` are **synchronous** — they finish instantly, so they don't need `useEffect`. They can run directly in the component body, in an event handler, or even outside the component entirely (module scope, runs once when the file loads).
- **`useEffect` timing:** The effect function passed to `useEffect` runs **after** the component function finishes executing (after JSX is returned), not during or before.
- **Dependencies array** controls whether the effect re-runs:
  - Omitted → effect runs after **every** render (can cause infinite loops if it updates state).
  - `[]` (empty) → effect runs **once**, only after the first render.
  - `[dep1, dep2]` → effect re-runs only when one of those dependency values changes between renders.
- **What counts as a dependency:** Any prop or state value used inside the effect function that could cause the component to re-render (props, state). Refs and browser-native objects/methods (`navigator`, `localStorage`, `JSON`) are **not** dependencies since they don't trigger re-renders.
- **Cleanup function:** An effect can `return` a function from inside itself. React runs this cleanup function:
  - Right before the effect runs again (if a dependency changed), and
  - Right before the component **unmounts** (removed from the DOM).
  - It does **not** run before the very first execution of the effect.
- **Object & function dependencies problem:** Functions and objects are recreated every time a component re-renders, even if their code/shape is identical. Since JavaScript compares them by reference (not value), React treats a "new" function as a changed dependency — even though logically nothing changed. If that function is a dependency and it triggers a state update inside the effect, this can create an **infinite loop**.
- **`useCallback` hook:** Fixes the function-dependency problem by memoizing a function so React reuses the same function instance across re-renders (instead of recreating it), as long as its own dependencies haven't changed.

## Important Terms

| Term | Meaning |
|------|---------|
| Side Effect | A task needed by the app that doesn't directly affect the current render/JSX output (e.g., fetching data, timers, storage). |
| `useEffect` | React hook that runs a function after the component renders, optionally re-running it based on a dependency array. |
| Effect Function | The first argument to `useEffect`; the code that runs the side effect. |
| Dependencies Array | Second argument to `useEffect`/`useCallback`; list of prop/state values that determine when the function should re-run. |
| Cleanup Function | A function returned from inside an effect function; runs before the effect re-runs or when the component unmounts. |
| Infinite Loop | A repeating cycle of state updates → re-render → side effect → state update, caused by mismanaged side effects or dependencies. |
| `useCallback` | React hook that memoizes a function so it isn't recreated on every render, preventing false-positive dependency changes. |
| Referential Equality | JavaScript's rule that two objects/functions with identical content are still considered "different" unless they're the same reference. |

## Workflow / Process

**Deciding whether to use `useEffect`:**
1. Is the side effect asynchronous (e.g., browser callback, network request)? → Likely needs `useEffect` to avoid running on every render / infinite loops.
2. Is the side effect synchronous (e.g., `localStorage` read)? → Run it directly in the component body, event handler, or module scope — no `useEffect` needed.
3. Does the side effect depend on a `ref` that isn't connected until after render (e.g., DOM APIs like `dialog.showModal()`)? → Use `useEffect` to run it after the ref is attached.
4. Does the effect need to stop/undo something when the component unmounts (e.g., a timer)? → Return a cleanup function from the effect.
5. Does the effect depend on a function passed as a prop? → Wrap that function in `useCallback` in the parent component to prevent unnecessary re-runs/infinite loops.

**Example pattern for cleanup:**
```js
useEffect(() => {
  const timer = setTimeout(() => {
    onConfirm();
  }, 3000);

  return () => {
    clearTimeout(timer);
  };
}, [onConfirm]);
```

**Example pattern for `useCallback`:**
```js
const handleRemovePlace = useCallback(function handleRemovePlace() {
  // ...update state, localStorage, etc.
}, []); // dependencies: only props/state used inside
```

## Key Takeaways

- A side effect is any necessary task not directly tied to producing JSX; not all side effects require `useEffect`.
- Use `useEffect` mainly to avoid infinite loops (async side effects that set state) or to run code after a ref/DOM connection is established.
- The dependency array controls *when* an effect re-runs: omitted = every render, `[]` = once, `[deps]` = only when those values change.
- Only props and state values are true "dependencies" — refs and browser built-ins are not.
- Cleanup functions (returned from the effect) run before the effect re-runs or when the component unmounts — useful for clearing timers/subscriptions.
- Functions and objects are recreated on every render and are never referentially equal, even with identical content — this can cause effects to re-run unnecessarily or infinitely.
- `useCallback` memoizes a function across renders so it can safely be used as a dependency without causing infinite loops.

## Quick Revision

- Side effect = task needed by the app but unrelated to the current render.
- Async side effect + state update in component body = infinite loop risk → wrap in `useEffect`.
- Sync side effects (localStorage) don't need `useEffect`.
- `useEffect(fn, [])` → runs once after first render.
- `useEffect(fn)` (no array) → runs after every render.
- `useEffect(fn, [dep])` → runs only when `dep` changes.
- Cleanup function = returned from effect; runs before re-run or on unmount.
- Functions/objects are never equal by reference across renders → false dependency changes.
- `useCallback(fn, [deps])` → memoizes `fn` to prevent unnecessary re-creation and infinite loops.
################################################################################

############################################################################
**Date:21 July 2026
**Epic & Task:**P3.3-D17 — Switch Statement + Nested If/Else Drills (GFG #45 + Codedamn)
**Day segment (if multi-day task):** Seg 5 of 5 · GitHub Issue #197 (OPEN by design)
***************************course trans***********************************
# 📘 Understanding `switch` in JavaScript (For a 5th Grade Student)

## 🎯 What is a `switch` Statement?

A **switch** statement helps JavaScript choose what to do based on the value of a variable.

Think of it like a teacher asking:

> **"Which class are you going to today?"**

If you say **"JavaScript"**, the teacher sends you to the JavaScript classroom.

If you say something else, the teacher says:

> **"That's not the JavaScript classroom."**

---

# 📝 The Code

```javascript
let course = "javascript";

switch (course) {
    case "javascript":
        console.log("This is a javascript course");
        break;

    default:
        console.log("Not a javascript course");
}
```

---

# 🧩 Step-by-Step Explanation

## Step 1: Create a Variable

```javascript
let course = "javascript";
```

### What happens?

A variable named **course** is created.

Inside it, we store the word:

```
javascript
```

Think of it like writing the subject name on a notebook.

📦 Variable

```
course
┌──────────────┐
│ javascript   │
└──────────────┘
```

---

## Step 2: Start the Switch

```javascript
switch (course)
```

The **switch** looks inside the variable **course**.

It asks:

> **"What is stored inside this variable?"**

The answer is:

```
javascript
```

Now it starts checking each **case**.

---

## Step 3: Check the First Case

```javascript
case "javascript":
```

This means:

> **"If the value is 'javascript', run the code below."**

Our variable contains:

```
javascript
```

✅ It matches!

---

## Step 4: Print the Message

```javascript
console.log("This is a javascript course");
```

`console.log()` prints a message on the screen.

Output:

```
This is a javascript course
```

---

## Step 5: Stop Checking

```javascript
break;
```

The word **break** means:

> **"Stop here. Don't check any more cases."**

Since we already found the correct answer, JavaScript finishes the switch statement.

---

## Step 6: Default Case

```javascript
default:
```

The **default** block is like saying:

> **"If none of the cases match, do this instead."**

In this program, it **does not run** because `"javascript"` already matched.

---

# 🌳 How the Program Works

```
Start
  │
  ▼
course = "javascript"
  │
  ▼
switch(course)
  │
  ▼
Is it "javascript"?
  │
 ┌───────┴────────┐
 │                │
Yes ✅            No ❌
 │                │
 ▼                ▼
Print            Go to
"This is a       default
javascript
course"
 │                │
 ▼                ▼
break          Print:
 │             "Not a javascript course"
 ▼
Finish
```

---

# 🤔 What Happens if We Change the Value?

Suppose we change the variable.

```javascript
let course = "python";
```

Now JavaScript checks:

```
Is it "javascript"?
```

❌ No!

So it skips the first case and goes to:

```javascript
default:
```

Output:

```
Not a javascript course
```

---

# 🏫 Real-Life Example

Imagine you're choosing a school club.

```
Club Name
│
├── Football → Go to the football ground ⚽
├── Music → Go to the music room 🎵
├── Dance → Go to the dance hall 💃
└── Anything else → Ask the teacher ❓
```

A **switch** works exactly like this.

---

# 🧠 Easy Way to Remember

| Keyword | Meaning |
|---------|---------|
| `switch` | Checks one value |
| `case` | If it matches, run this code |
| `break` | Stop checking other cases |
| `default` | Runs if nothing matches |

---

# 📋 Output of This Program

Since:

```javascript
let course = "javascript";
```

The output is:

```text
This is a javascript course
```

---

# 🎉 Summary

- `switch` checks the value of a variable.
- `case` compares that value with different options.
- If a case matches, its code runs.
- `break` stops checking more cases.
- `default` runs only if no case matches.

Think of `switch` as a **multiple-choice question**.

```
Question:
What course are you learning?

A. Java
B. Python
C. JavaScript ✅

Answer:
JavaScript

Output:
This is a javascript course
```


# 📘 Keyboard Row Lab (Simple Code for a 5th Grade Student)

## 🎯 Goal

We have 3 keyboard rows.

```text
Row 1 : qwertyuiop

Row 2 : asdfghjkl

Row 3 : zxcvbnm
```

A word is **correct** if **all its letters are in the same row**.

Example:

- ✅ Dad
- ✅ Alaska
- ❌ Hello

---

# 💻 Simple Code

```javascript
function findWords(words) {

    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";

    let answer = [];

    for (let word of words) {

        let text = word.toLowerCase();

        if (check(text, row1) ||
            check(text, row2) ||
            check(text, row3)) {

            answer.push(word);
        }
    }

    return answer;
}

function check(word, row) {

    for (let letter of word) {

        if (!row.includes(letter)) {
            return false;
        }
    }

    return true;
}

export default findWords;
```

---

# 🧩 Step-by-Step Explanation

## Step 1

```javascript
let row1 = "qwertyuiop";
let row2 = "asdfghjkl";
let row3 = "zxcvbnm";
```

We save the three keyboard rows.

Think of them as **three boxes**.

```
📦 Box 1
qwertyuiop

📦 Box 2
asdfghjkl

📦 Box 3
zxcvbnm
```

---

## Step 2

```javascript
let answer = [];
```

This is an empty basket.

```
🧺 answer = []
```

We will put the correct words inside it.

---

## Step 3

```javascript
for (let word of words)
```

Look at one word at a time.

Example:

```
["Dad", "Hello", "Alaska"]

↓

Dad

↓

Hello

↓

Alaska
```

---

## Step 4

```javascript
let text = word.toLowerCase();
```

Change every letter to lowercase.

```
"DAD"

↓

"dad"
```

Now it's easier to compare.

---

## Step 5

```javascript
check(text, row1)
```

Ask:

> "Are all the letters inside Row 1?"

If yes,

```
true
```

Otherwise,

```
false
```

The same happens for Row 2 and Row 3.

---

## Step 6

```javascript
answer.push(word);
```

If the word is correct,

put it into the basket.

Before

```
[]
```

After adding "Dad"

```
["Dad"]
```

After adding "Alaska"

```
["Dad", "Alaska"]
```

---

# 🧩 The `check()` Function

```javascript
function check(word, row)
```

This function checks one word.

Example:

```
word = "dad"

row = "asdfghjkl"
```

---

### Check Every Letter

```javascript
for (let letter of word)
```

It checks

```
d

↓

a

↓

d
```

One by one.

---

### Is the Letter in This Row?

```javascript
row.includes(letter)
```

Example:

```
Row

asdfghjkl

Letter

a
```

```
Yes ✅
```

Another example

```
Row

asdfghjkl

Letter

q
```

```
No ❌
```

---

### Wrong Letter?

```javascript
return false;
```

If one letter is not in the row,

stop immediately.

Example

```
hello

h ✅

e ❌
```

Result

```
false
```

---

### All Letters Correct?

```javascript
return true;
```

If every letter belongs to the row,

the word is correct.

Example

```
dad

d ✅

a ✅

d ✅
```

Result

```
true
```

---

# 🧪 Dry Run

Input

```javascript
findWords(["Dad", "Hello", "Alaska"]);
```

### Word 1

```
Dad
```

All letters are in Row 2.

✅ Add it.

```
answer = ["Dad"]
```

---

### Word 2

```
Hello
```

Letters are in Row 1 and Row 2.

❌ Ignore it.

---

### Word 3

```
Alaska
```

All letters are in Row 2.

✅ Add it.

```
answer = ["Dad", "Alaska"]
```

---

# ✅ Final Output

```javascript
["Dad", "Alaska"]
```

---

# 🎯 Easy Trick to Remember

Think of the keyboard as **3 houses**.

```
🏠 House 1
qwertyuiop

🏠 House 2
asdfghjkl

🏠 House 3
zxcvbnm
```

A word is accepted only if **every letter lives in the same house**.

- ✅ Dad → House 2
- ✅ Alaska → House 2
- ❌ Hello → House 1 + House 2
- ❌ Peace → House 1 + House 2 + House 3