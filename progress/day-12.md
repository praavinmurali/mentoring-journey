# Daily Progress Log — Day 02
**Date:16 July 2026
**Epic & Task:** P1.6-D2 — JavaScript Async Programming + Projects (S21)

**Day segment (if multi-day task):** Seg 2 of 2 · GitHub Issue #158 (OPEN by design)
###############################################################################
**course transcript:**
# Sync vs Async Programming

## Definition
Synchronous programming executes code line by line, top to bottom, where each line waits for the previous one to finish before running. Asynchronous programming lets time-consuming tasks (like fetching data) run in the background without blocking the rest of the program, notifying the code once they're done.

## Key Concepts
- Restaurant analogy: ordering food and sitting down (async) vs. standing at the counter waiting for your order to finish before anyone else can be served (sync).
- In sync code, only one operation is processed at a time — no other task can start until the current one finishes.
- In async code, tasks don't wait for previous tasks to finish; they run concurrently, and mechanisms like callbacks or promises trigger the next step once a task completes.
- Reasons to learn async programming: it improves efficiency (handles multiple tasks at once), makes apps feel faster and more responsive (user-friendly), and JavaScript itself is built with async programming in mind — used across web dev and APIs.

## Important Terms
| Term | Meaning |
|------|---------|
| Synchronous code | Code executed line by line, in order, where each step blocks the next until finished |
| Asynchronous code | Code that runs tasks in the background without blocking the rest of the program |
| Blocking code | Another name for synchronous code — it blocks other code from running |
| Non-blocking code | Another name for asynchronous code — it doesn't block other code |

## Key Takeaways
- Sync = one task at a time, in strict order; async = multiple tasks can be "in flight" at once.
- Async programming exists because real-world tasks (network requests, file reads, DB queries) take time and shouldn't freeze the whole app while waiting.
- The core async tools in JS are callbacks, promises, and async/await — all covered later in this section.

## Quick Revision
- Sync = blocking, top-to-bottom, one at a time.
- Async = non-blocking, tasks run in background, notified on completion.
- JS is asynchronous-first by design.

---

# Synchronous Code Examples

## Definition
A practical look at how synchronous ("blocking") code behaves in JavaScript — both for simple instant code and for code that takes time to execute.

## Key Concepts
- Simple `console.log` statements execute strictly in the order they're written (top to bottom); reordering a line changes the order of output accordingly.
- A "blocking task" can be simulated with a `while` loop that keeps checking `Date.now() - startTime < duration` — this deliberately ties up the thread for a set amount of time (e.g., 5 seconds).
- While a blocking task like this runs, the browser UI freezes: content already on the page can disappear/not render, and nothing else executes, until the blocking function finishes.
- This demonstrates the core drawback of synchronous code: a single long-running task can make the entire application unresponsive.

## Important Terms
| Term | Meaning |
|------|---------|
| `Date.now()` | Returns the current timestamp in milliseconds, used here to measure elapsed time in a blocking loop |
| Blocking task | A function that ties up the call stack/thread for a period of time, preventing anything else from running |

## Workflow / Process
1. Write simple sequential `console.log` calls — observe strict top-to-bottom order.
2. Write a function with a `while` loop comparing elapsed time against a target duration to simulate a long-running task.
3. Call the function and observe that the page becomes unresponsive (freezes/blanks) until the loop finishes.

## Key Takeaways
- Order of execution in sync code always matches the order the code is written in.
- A long `while` loop is a simple way to simulate a blocking, time-consuming operation.
- Blocking tasks freeze the whole page/app — nothing else can run or render until they finish.

## Quick Revision
- Sync code runs top-to-bottom, no exceptions.
- A blocking loop = frozen UI until it's done.
- This is the exact problem asynchronous programming solves.

---

# What Is Asynchronous Programming

## Definition
Asynchronous programming allows tasks to run in the background without blocking the execution of subsequent code, using mechanisms like callbacks, promises, or async/await to handle operations that take time.

## Key Concepts
- Unlike synchronous code, async tasks don't wait for previous tasks to finish — they run concurrently.
- A notification mechanism (callback or promise) triggers the next step once the async task completes.
- Analogy: several shops serving customers independently and in parallel, rather than one queue where everyone waits for the person ahead.
- `setTimeout` can be used to simulate an async delay: code scheduled inside it runs later, without blocking the lines of code that come after it.

## Important Terms
| Term | Meaning |
|------|---------|
| `setTimeout(callback, delay)` | Schedules `callback` to run after `delay` milliseconds, without blocking the rest of the script |
| Concurrent execution | Multiple operations progressing during the same period, without one strictly blocking another |

## Workflow / Process
1. Log "task one".
2. Call `setTimeout(() => console.log('task two'), delay)`.
3. Log "task three" immediately after (no waiting).
4. Observed output order: task one → task three → task two (once the delay elapses) — proving the `setTimeout` call didn't block the rest of the script.

## Key Takeaways
- Async code lets the rest of the program keep running while a slow operation completes elsewhere.
- `setTimeout` is a simple way to demonstrate non-blocking behavior before moving to real async operations like API calls.
- The page/app stays responsive and interactive even while a background task is still pending.

## Quick Revision
- Async = tasks don't block each other.
- `setTimeout` schedules work for later without freezing the rest of the code.
- Output order proves code after an async call doesn't wait for it.

---

# The Event Loop

## Definition
The event loop is the mechanism that allows JavaScript's asynchronous operations to execute without blocking, by coordinating the call stack and the task queue.

## Key Concepts
- JavaScript is single-threaded: the call stack processes one function at a time.
- When a function contains an async operation (like `setTimeout` or an API call), that operation is handed off, and once it finishes, it's placed in the task queue rather than immediately resuming in the call stack.
- The event loop continuously checks whether the call stack is empty.
- Once the call stack is empty, the event loop moves the next completed task from the task queue into the call stack to be executed.
- This is exactly why a slow async function doesn't block other code — its continuation waits in the task queue until the stack is clear.

## Important Terms
| Term | Meaning |
|------|---------|
| Call stack | Where JavaScript functions are actually executed, one at a time |
| Task queue | Holds completed async callbacks (e.g., from `setTimeout` or API responses) until the call stack is free |
| Event loop | The mechanism that moves tasks from the task queue into the call stack whenever the stack is empty |

## Workflow / Process
1. Functions run in the call stack, one at a time, in order.
2. If a function involves an async operation, that operation is set aside (not run synchronously in the stack).
3. When the async operation finishes, its callback goes into the task queue.
4. The event loop watches the call stack; the moment it's empty, it pulls the next item from the task queue into the stack to run.

## Key Takeaways
- The event loop is what makes non-blocking async code possible in a single-threaded language.
- Call stack = current work; task queue = finished async work waiting to run.
- Async callbacks always run after the current synchronous code has completely finished (stack is empty).

## Quick Revision
- Single thread + call stack + task queue + event loop = how JS handles async.
- Event loop's job: "is the call stack empty? If yes, bring in the next task from the queue."
- This explains why `setTimeout(fn, 0)` still runs after all synchronous code.

---

# HTTP Requests

## Definition
An HTTP request is a message sent by a client (e.g., a browser or app) to a server, asking for a specific resource or requesting that an action be performed, using HTTP (HyperText Transfer Protocol) — the foundation of communication on the web.

## Key Concepts
- HTTP requests are how a frontend application retrieves or sends data to/from a server or API.
- HTTP methods (verbs) define the action being requested:
  - `GET` — retrieve data.
  - `POST` — create/send data to the server.
  - `PUT` — update existing data.
  - `DELETE` — remove data.
- On the frontend, `GET` is the most commonly used method; the others become more relevant on the backend.

## Important Terms
| Term | Meaning |
|------|---------|
| HTTP | HyperText Transfer Protocol — the protocol used for communication on the web |
| Client | The browser or app sending the request |
| Server | The system that receives the request, processes it, and sends back a response |

## Key Takeaways
- Every API call from the frontend is essentially an HTTP request to a server.
- Choosing the right HTTP method matters: reading data = GET, creating = POST, updating = PUT, removing = DELETE.
- Understanding HTTP requests is a prerequisite for working with any API.

## Quick Revision
- HTTP request = client asking a server for something (or to do something).
- Methods: GET (read), POST (create), PUT (update), DELETE (remove).
- Frontend work leans heavily on GET.

---

# APIs (Application Programming Interfaces)

## Definition
An API is a set of rules and tools that allows different software applications to communicate with each other, acting as a bridge so one system can access another system's functionality or data without needing to know its internal workings.

## Key Concepts
- Restaurant analogy: the client (application) orders through the waitress (API), who communicates with the chef (server) — the client never needs to know how the kitchen operates internally.
- Public API marketplaces (e.g., RapidAPI) let developers access and build on top of thousands of existing APIs (sports data, AI tools, translation, etc.).
- Later in a full curriculum, developers also learn to build their own APIs (backend); for now, the focus is consuming public ones.

## Important Terms
| Term | Meaning |
|------|---------|
| API | Application Programming Interface — rules/tools letting applications talk to each other |
| Public API | An API made available (often with free tiers) for external developers to consume |
| Endpoint | The specific URL an API exposes for a given resource or action |

## Key Takeaways
- APIs are the "middleman" between a frontend app and a server's data/functionality.
- You don't need to understand a server's internals to use its API correctly — just its documented rules (endpoints, methods, parameters).
- Public API marketplaces make it possible to quickly build apps on top of existing data/services (translation, movies, AI, currency, etc.).

## Quick Revision
- API = bridge between application and server.
- Client → API → Server → API → Client (response).
- RapidAPI-style marketplaces host many ready-to-use public APIs.

---

# Callback Functions

## Definition
A callback function is a function passed as an argument to another function, which gets executed after some operation completes — used to control the flow of code and to handle asynchronous tasks.

## Key Concepts
- Analogy 1: visiting a friend who isn't home, leaving your number with their mom, and being "called back" once the friend returns.
- Analogy 2: a shop that's out of stock takes your number and calls you back once new stock arrives.
- In code: a frontend app requests data from a server; other code keeps running while it waits; once the data arrives, the callback function is invoked with that data so it can be processed/displayed.
- Nesting one callback inside another (e.g., fetch user → then fetch that user's posts) is a common pattern for dependent asynchronous steps.

## Important Terms
| Term | Meaning |
|------|---------|
| Callback function | A function passed into another function, to be executed once a given operation finishes |
| Callback hell | The problem of deeply nested callbacks that becomes hard to read/maintain (solved later by promises) |

## Key Takeaways
- Callbacks let you say "do this, and once it's done, run this other function with the result."
- They're foundational to async JavaScript, even though promises and async/await often replace them in modern code.
- Dependent async steps (e.g., "fetch user, then fetch that user's posts") are a classic callback use case.

## Quick Revision
- Callback = "call me back when you're done."
- Passed as an argument, executed after the awaited operation completes.
- Common but can get messy with deep nesting — promises exist to fix that.

---

# Components of an HTTP Request

## Definition
An HTTP request is made up of several standard components that together describe what is being asked of the server and how.

## Key Concepts
- **Method / HTTP verb** — the action to perform: `GET` (retrieve), `POST` (send/create), `PUT` (update), `DELETE` (remove).
- **URL** (Uniform Resource Locator) — identifies the resource/endpoint being requested, e.g. `https://example.com`.
- **Headers** — provide additional metadata about the request (e.g., content type, authentication).
- **Body** — used to send data to the server (mainly with `POST`/`PUT` requests).
- For simple data-fetching in the frontend, a `GET` method plus a URL is often all that's needed.

## Important Terms
| Term | Meaning |
|------|---------|
| Method | The HTTP verb specifying the action (GET/POST/PUT/DELETE) |
| URL | The address of the resource/endpoint being requested |
| Headers | Metadata sent along with the request |
| Body | The data payload sent to the server (used with POST/PUT) |

## Key Takeaways
- Every HTTP request can be broken down into method + URL + headers + body.
- Not every request needs all four — a basic GET request typically only needs a method and URL.
- Understanding these components makes reading any API's documentation much easier.

## Quick Revision
- Method (verb) + URL + Headers + Body = anatomy of an HTTP request.
- GET requests mainly just need the method and URL.
- Headers = metadata; Body = data payload (mostly for POST/PUT).

---

# Making Your First HTTP Request

## Definition
The practical process of using JavaScript's built-in `fetch` function (an HTTP client) to request data from an API endpoint and handle the response.

## Key Concepts
- An **HTTP client** is a tool/library used to send HTTP requests and receive responses. Options: `fetch` (built into JavaScript by default) or `Axios` (a third-party library).
- `fetch(url)` returns a Promise; `.then()` is used to handle the response once it arrives.
- The raw response from `fetch` isn't the final data — calling `response.json()` (which itself returns a Promise) parses the body into usable JSON, so it needs its own `.then()`.
- `.catch()` handles any errors (e.g., network failures) during the request.
- JSONPlaceholder was used as a free dummy/test API (endpoints like `/posts` return 100 sample posts, comments, albums, photos, todos, users).

## Important Terms
| Term | Meaning |
|------|---------|
| `fetch()` | JavaScript's built-in function for making HTTP requests; returns a Promise |
| Axios | A popular third-party HTTP client library, alternative to `fetch` |
| `response.json()` | Parses an HTTP response body into JSON; also returns a Promise |

## Workflow / Process
1. Identify the API endpoint/URL (e.g., JSONPlaceholder's `/posts`).
2. Call `fetch(url)`.
3. Chain `.then(response => response.json())` to parse the JSON body.
4. Chain another `.then(data => ...)` to work with the actual parsed data (e.g., log it).
5. Chain `.catch(error => ...)` to handle any errors.

## Key Takeaways
- `fetch` is promise-based by default — no manual Promise creation needed to use it.
- Getting real data out of a `fetch` call takes two resolution steps: the response itself, then `.json()` on that response.
- Always pair a request with error handling via `.catch()`.

## Quick Revision
- `fetch(url).then(res => res.json()).then(data => ...).catch(err => ...)`.
- API responses are typically JSON.
- JSONPlaceholder = handy free fake API for practice.

---

# Promises

## Definition
A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation and its resulting value — a placeholder for data that isn't immediately available.

## Key Concepts
- Promises make async code cleaner and help avoid "callback hell" (deeply nested callbacks).
- Three states:
  - **Pending** — operation still in progress (e.g., a loading spinner).
  - **Fulfilled** — operation completed successfully; the resulting value is available.
  - **Rejected** — operation failed; an error/reason is available.
- Creating a promise: `new Promise((resolve, reject) => { ... })`. Inside, call `resolve(value)` when the task succeeds, or `reject(reason)` when it fails.
- Consuming a promise: `.then(value => ...)` handles the fulfilled state, `.catch(error => ...)` handles the rejected state, and `.finally(() => ...)` runs regardless of the outcome.

## Important Terms
| Term | Meaning |
|------|---------|
| Promise | An object representing the future result (success or failure) of an async operation |
| `resolve` | Function called inside a promise executor to mark it as fulfilled, with a value |
| `reject` | Function called inside a promise executor to mark it as failed, with a reason/error |
| Pending / Fulfilled / Rejected | The three possible states of a promise |

## Workflow / Process
1. Create: `const myPromise = new Promise((resolve, reject) => { /* async work, then call resolve() or reject() */ });`
2. Consume: `myPromise.then(data => ...).catch(error => ...).finally(() => ...);`

## Key Takeaways
- A promise always ends up in one of three states: pending, fulfilled, or rejected.
- `resolve` and `reject` are just functions — you call whichever applies once your operation's outcome is known.
- `.then()` gets the resolved value; `.catch()` gets the rejection reason; `.finally()` always runs.

## Quick Revision
- Promise states: pending → fulfilled or rejected.
- Create with `new Promise((resolve, reject) => {...})`.
- Consume with `.then()`, `.catch()`, `.finally()`.

---

# Promises in a Real Example (Fetch)

## Definition
Applying promise concepts to a real `fetch()` call — since `fetch` is promise-based by default, there's no need to manually construct a `new Promise()`; instead, the promise it returns is simply consumed.

## Key Concepts
- Logging the direct result of `fetch(url)` shows a `Promise` object in a pending state — proof that it needs to be consumed, not used directly as data.
- `.then(response => ...)` gives access to the raw `Response` object — useful metadata is available, but the body often appears as a `ReadableStream`, meaning the actual data isn't extracted yet.
- Calling `response.json()` also returns a Promise, so it needs its own `.then()` to get the parsed data.
- `.catch(error => ...)` handles failures — e.g., an invalid/mistyped URL causes a `TypeError: Failed to fetch`.
- Rather than storing each intermediate step in a separate variable, the common cleaner style is to chain `.then()` calls directly.

## Important Terms
| Term | Meaning |
|------|---------|
| `Response` object | What `fetch`'s promise resolves to initially — contains status/headers, but not parsed data yet |
| `ReadableStream` | The raw, unparsed form of a response body before `.json()` is called |
| Promise chaining | Linking multiple `.then()` calls together to resolve nested promises step by step |

## Workflow / Process
1. `fetch(url)` → returns a Promise.
2. `.then(response => response.json())` → resolves the response into actual JSON data (still returns a Promise).
3. `.then(data => { /* use data */ })` → finally work with the real data.
4. `.catch(error => { /* handle error */ })` → catch any failure along the way.

## Key Takeaways
- Seeing "Promise" logged instead of real data is a signal that further resolution (another `.then()`) is needed.
- `fetch` requires resolving twice: once for the response, once for `response.json()`.
- Chaining `.then()` calls is cleaner than assigning each intermediate promise to its own variable.

## Quick Revision
- `fetch` is promise-based already — don't wrap it in `new Promise()`.
- Two resolution steps: response → then `.json()`.
- Chain `.then().then().catch()` for clean, readable async code.

---

# Async/Await

## Definition
Async/await is a feature built on top of promises that simplifies handling asynchronous operations, letting async code be written and read in a way that looks more like ordinary synchronous code.

## Key Concepts
- Mark a function as `async` to use `await` inside it.
- Use `try { ... } catch (error) { ... }`: the `try` block plays the role of the resolved/success path, `catch` plays the role of the rejected/error path.
- Place `await` in front of any expression that returns a Promise (e.g., `await fetch(url)`, then `await response.json()`) to pause execution until it resolves, and work directly with the resolved value instead of chaining `.then()`.
- If you forget `await` on a promise-returning call, logging the result will show `Promise` instead of the resolved value — a useful way to spot where `await` is missing.

## Important Terms
| Term | Meaning |
|------|---------|
| `async` function | A function that implicitly returns a Promise and can use `await` inside it |
| `await` | Pauses execution inside an `async` function until the given Promise resolves, then returns its value |
| `try / catch` | Used with async/await to handle success and error paths respectively |

## Workflow / Process
1. Mark the function `async`.
2. Wrap the logic in `try { ... } catch (error) { ... }`.
3. `const response = await fetch(url);`
4. `const data = await response.json();`
5. Use `data` directly — no `.then()` chaining needed.
6. Handle any failure in the `catch` block.

## Key Takeaways
- Async/await doesn't replace promises — it's built on top of them and simplifies their syntax.
- It removes the need for chained `.then().then().then()` calls, making multi-step async logic easier to read.
- `try/catch` replaces `.then()/.catch()` for handling success and failure.

## Quick Revision
- `async function foo() { try { const res = await fetch(url); const data = await res.json(); } catch (e) { ... } }`
- `await` = "pause here until this promise resolves."
- Seeing `Promise` logged = you forgot an `await`.

---

# Project: Awesome Posts

## Definition
A project that fetches posts from the JSONPlaceholder API and dynamically renders them onto the page using async/await, replacing an initial "loading" message with the fetched content (or an error message on failure).

## Key Concepts
- Wait for the DOM to fully load via `document.addEventListener('DOMContentLoaded', callback)` before selecting elements or making requests.
- An `async` function (e.g., `fetchPosts`) wrapped in `try/catch` performs the request: `await fetch(apiUrl)` for the response, then `await response.json()` for the actual posts array.
- Clear the "loading" placeholder by resetting the container's `innerHTML = ''` once data has arrived.
- Loop through the posts array with `.forEach()`, building a DOM element for each post via a separate helper function (`createPostElement(post)`) — keeping element-creation logic separate from the fetch logic (separation of concerns).
- The helper function creates an `<article>` (with a CSS class), then a title `<h2>` and body `<p>`, sets their `textContent` from the post's data, appends them to the article, and returns the finished element to be appended to the page.
- On failure (`catch` block), show a styled, user-facing error message instead of just logging to the console.

## Important Terms
| Term | Meaning |
|------|---------|
| `DOMContentLoaded` | Event fired once the HTML has been fully loaded and parsed by the browser |
| Separation of concerns | Keeping element-creation logic in its own function, separate from data-fetching logic |
| `textContent` | Property used to set the plain text inside an element |

## Workflow / Process
1. Listen for `DOMContentLoaded`.
2. Define the API URL (JSONPlaceholder `/posts`).
3. `async function fetchPosts()`: `try` → `await fetch()`, `await response.json()`, clear loading message, loop and render posts; `catch` → show error message.
4. `function createPostElement(post)`: build and return an `<article>` with title and body populated from `post`.
5. Call `fetchPosts()` to kick off the whole flow.

## Key Takeaways
- Always show a loading state and clear it once real data is available.
- Keep DOM-element creation in its own function apart from fetch/async logic.
- Handle the error path with a real, visible message — not just a console log.

## Quick Revision
- DOMContentLoaded → fetchPosts() → createPostElement() per post → append to container.
- try/catch around the fetch + json parsing.
- Clear loading text before rendering; show error text if the request fails.

---

# Project: Country Explorer

## Definition
A project that lets a user search for a country by name and displays its details (e.g., name, region, currencies) using the REST Countries API.

## Key Concepts
- API used: REST Countries (`restcountries.com`), specifically the "search by full name" endpoint, which accepts either the common or official country name (e.g., `/v3.1/name/{country}`).
- Wait for `DOMContentLoaded` before wiring up logic, since the HTML/CSS structure (input field, search button, results area) is provided as a starter template.
- The country name entered by the user is used to dynamically build the request URL for the search endpoint.
- The JSON response is parsed and specific fields (name, region, currencies, etc.) are extracted and rendered into the results container.

## Important Terms
| Term | Meaning |
|------|---------|
| REST Countries API | A public API providing country data, searchable by name |
| Dynamic endpoint | A URL built at runtime using a variable (here, the user's search input) |

## Workflow / Process
1. Wait for `DOMContentLoaded`.
2. Select the input field, search button, and results container.
3. On search, read the entered country name and build the endpoint: base URL + `/name/` + the entered name.
4. Fetch the endpoint, parse the JSON response, and extract the needed country fields.
5. Render those fields into the results container.

## Key Takeaways
- The REST Countries "search by name" endpoint accepts both common and official names, making it flexible for user input.
- Building the endpoint dynamically from user input is the same core pattern used across all these projects (Movie Finder, Currency Converter, etc.).
- The heavy lifting is standard fetch → parse JSON → render — only the specific API and displayed fields change per project.

## Quick Revision
- Endpoint: `restcountries.com/v3.1/name/{country}`.
- Read input → build URL → fetch → parse → render.
- Same fetch pattern as other projects, different API/fields.

---

# Project: Movie Finder

## Definition
A project that lets users search for movies by title and displays results (poster, title, year) with a loading indicator, using the OMDb API.

## Key Concepts
- API used: OMDb API (`omdbapi.com`) — requires a free API key (obtained by signing up) to track usage.
- Endpoint pattern: base URL + `?apikey={key}&s={searchTerm}` — the `s` parameter is required and represents the movie title to search for.
- The search form's `submit` event is intercepted with `event.preventDefault()` to stop the page from reloading, and the movie name is read from the input's `.value`.
- An `async` search function shows a loading message, then uses `try/catch` around `await fetch()` and `await response.json()`.
- The API itself returns a `Response` field (e.g., `"False"`) inside the data when no results are found — this is checked explicitly and used to `throw new Error('No movies found')` so the `catch` block can show a friendly message.
- A separate `displayMovies(movies)` function uses `.map()` to turn each movie into an HTML card (poster, title, year), then `.join('')` to combine the array of HTML strings into a single string before inserting it into the DOM (avoiding stray commas that `.map()` alone would leave behind).

## Important Terms
| Term | Meaning |
|------|---------|
| OMDb API | A public movie-database API requiring a free API key |
| `.map()` + `.join('')` | Pattern for turning an array of data into an array of HTML strings, then combining them into one HTML string |
| API-level error flag | A field in the response data itself (not an HTTP error) indicating the operation didn't succeed |

## Workflow / Process
1. Listen for the search form's `submit` event; call `event.preventDefault()`.
2. Read the movie name from the input field.
3. `async function searchMovies(movieName)`: show loading → `try` → `await fetch()` the OMDb endpoint (built with a template literal) → `await response.json()` → check for the API's "no results" flag and throw if needed → call `displayMovies(data.Search)`; `catch` → show an error message.
4. `function displayMovies(movies)`: `movies.map(movie => `...card html...`).join('')`, then set that HTML into the results container.

## Key Takeaways
- Some APIs signal failure inside a 200-OK JSON body (not via HTTP status) — always check the documented response shape.
- `.map()` on its own leaves an array; `.join('')` is needed to turn it into a single valid HTML string.
- `event.preventDefault()` on form submission is essential to stop a full page reload from wiping out the app's state.

## Quick Revision
- Endpoint: `omdbapi.com/?apikey={key}&s={movieName}`.
- Check `data.Response === "False"` → throw a custom error.
- `movies.map(...).join('')` before inserting into innerHTML.

---

# Project: AI Chat App (Gemini API)

## Definition
A chat interface built with vanilla HTML/CSS/JavaScript that sends user messages to Google's Gemini AI API and displays the AI's responses, complete with a typing indicator while waiting.

## Key Concepts
- Requires a free Gemini API key (from Google AI Studio/console) and uses Gemini's REST endpoint directly from the frontend (no backend needed for this project).
- The input textarea auto-resizes as the user types, by resetting `style.height = 'auto'` then setting it to `scrollHeight + 'px'` on the `input` event.
- On the chat form's `submit` event (handler marked `async`):
  - `event.preventDefault()`, read and `.trim()` the message, and `return` early if it's empty.
  - Add the user's message to the chat, clear/reset the input, disable the send button, and show a typing indicator.
  - `try` → `await generateResponse(message)` → remove the typing indicator → display the AI's reply. `catch` → remove the indicator, show an error message. `finally` → re-enable the send button regardless of outcome.
- `generateResponse(prompt)` is an `async` function that calls `fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) })` — matching the request body shape Gemini's API requires.
- Checks `response.ok`; throws an error if the request failed.
- Extracts the AI's reply text from the nested response shape: `data.candidates[0].content.parts[0].text`.
- Helper functions build the chat UI: `addMessage(text, isUser)` (styles user vs. AI messages differently, includes an avatar), `showTypingIndicator()` (returns the created element so it can be removed later), and `addErrorMessage(text)`.
- After adding any message, the chat container is scrolled to the bottom via `chatMessages.scrollTop = chatMessages.scrollHeight`.

## Important Terms
| Term | Meaning |
|------|---------|
| Gemini API | Google's generative AI API, called here via a REST endpoint |
| Typing indicator | A temporary UI element shown while waiting for the AI's response, removed once the reply arrives |
| `response.ok` | Boolean on a `fetch` Response indicating whether the HTTP status was successful |

## Workflow / Process
1. Auto-resize input on typing.
2. On submit: prevent default → validate message → add user message to chat → disable send button → show typing indicator.
3. `generateResponse(prompt)`: POST to Gemini endpoint with the required JSON body → check `response.ok` → parse JSON → extract reply text.
4. Back in the submit handler: remove typing indicator → add AI message (or error message) → re-enable send button in `finally`.

## Key Takeaways
- Calling a third-party AI API from the frontend follows the same fetch/async pattern as any other API — only the request body shape and response structure differ.
- Always account for the "waiting" state visually (typing indicator, disabled button) so the UI doesn't feel unresponsive.
- `finally` is ideal for cleanup that must happen regardless of success or failure (like re-enabling a button).

## Quick Revision
- POST request with a JSON body shaped as `{ contents: [{ parts: [{ text }] }] }`.
- Reply text lives at `data.candidates[0].content.parts[0].text`.
- Typing indicator shown before the call, removed after — success or failure.

---

# Project: Currency Converter

## Definition
A two-mode app — "Convert" (convert an amount between two currencies) and "Exchange Rate" (show current rates for a base currency against others) — built using the ExchangeRate-API.

## Key Concepts
- Requires a free API key from ExchangeRate-API (obtained via email sign-up).
- UI toggle: two buttons switch between "Convert" and "Exchange Rate" views using a `data-mode` attribute, read via `button.getAttribute('data-mode')`; the matching section's CSS `display` is toggled between `flex` and `none`, and an `active` class highlights the selected button.
- **Convert flow:** read the entered amount plus the "from" and "to" currency selections; build a pair-conversion endpoint (API key + from-currency + to-currency); fetch and resolve the promise chain (`.then(response => response.json())`, `.then(data => ...)`, `.catch(...)`); read `conversion_rate` from the response, multiply by the entered amount, and format to two decimal places for the final converted value; inject the result into the page dynamically.
- **Exchange Rate flow:** read the selected base currency; build a "latest rates" endpoint (API key + base currency); fetch and resolve the promise chain to get an object of currency-code → rate pairs; use `Object.entries(data.conversion_rates)` to turn that object into an iterable array of `[currency, rate]` pairs; loop through with a `for...of` loop (destructuring `[currency, rate]`), skipping the base currency itself, and build a list item per currency showing the code and its rate (formatted to a fixed number of decimals); inject the combined HTML into the results list.
- Both flows use `try/catch` (or `.catch()` on the promise chain) to show a fallback error message if the request fails.

## Important Terms
| Term | Meaning |
|------|---------|
| `data-mode` attribute | A custom HTML attribute used to identify which UI section a button should activate |
| `conversion_rate` | The API field giving the exchange rate between two specific currencies (used in the Convert flow) |
| `Object.entries()` | Converts an object into an array of `[key, value]` pairs, enabling it to be looped over |

## Workflow / Process
1. Toggle buttons switch visible section (`display: flex` / `none`) and toggle an `active` class, based on each button's `data-mode`.
2. **Convert:** read amount + from/to currencies → fetch pair-conversion endpoint → `conversion_rate * amount` → format to 2 decimals → render result.
3. **Exchange Rate:** read base currency → fetch latest-rates endpoint → `Object.entries(data.conversion_rates)` → loop and render each currency/rate as a list item.

## Key Takeaways
- Reading a custom `data-*` attribute is a clean way to drive UI logic (like which section to show) directly from the clicked element.
- `Object.entries()` is the standard way to loop over an API response that comes back as a plain object (like a currency-rate map) rather than an array.
- Both features (convert and get-rate) reuse the same fetch → resolve promise → extract data → render pattern seen throughout the section.

## Quick Revision
- Toggle buttons use `data-mode` to switch visible sections.
- Convert: `conversion_rate * amount`, 2 decimal places.
- Exchange Rate: `Object.entries(conversion_rates)` → loop → render list.

############################################################################
**Date:16 July 2026
**Epic & Task:**P2.3-D12 — PROJECT: Project Management App Part 1 — Sidebar + Forms + Refs (Section 9, part 1)
**Day segment (if multi-day task):** Seg 2 of 7 · GitHub Issue #258 (OPEN by design)
***************************course trans***********************************
# Adding a Projects Sidebar Component

## Definition
The `ProjectsSidebar` component is a persistent UI panel that lets the user switch between projects and start creating a new one.

## Key Concepts
- Created as `components/ProjectsSidebar.jsx`, exporting a component function `ProjectsSidebar`.
- Returns a built-in `<aside>` wrapper containing:
  - An `<h2>` title ("Your Projects").
  - A `<div>` with an "Add Project" button (later the list of projects goes here too).
- Used inside the `App` component by importing it and rendering it inside a `<main>` element (replacing a placeholder `<h1>`/fragment) so it sits alongside the project details area.

## Important Terms

| Term | Meaning |
|------|---------|
| `aside` | Built-in HTML element used as a semantic sidebar wrapper |
| `main` | Wraps the sidebar + project details as the page's main content |

## Workflow / Process
1. Create `components` folder → add `ProjectsSidebar.jsx`.
2. Export a component function returning `<aside>` with heading + add-project div/button.
3. Import and render `ProjectsSidebar` in `App`, wrapped by a `<main>` element.

## Key Takeaways
- Sidebar starts as a bare structural skeleton before any styling.
- Component composition begins with a clear separation: sidebar vs. main project details area.
- `main` replaces a fragment so both sidebar and details can sit side by side.

## Quick Revision
- New file → new component function → export → import into `App`.
- Structure first, styling later.

---

# Styling the Sidebar & Button with Tailwind CSS

## Definition
Applying Tailwind CSS utility classes to give the sidebar and its button a finished visual look, including responsive behavior.

## Key Concepts
- **App-level styling:** `h-screen` (full viewport height), `my-8` (vertical margin).
- **Sidebar (`aside`) styling:**
  - `w-1/3` — takes 1/3 width on small screens.
  - `px-8`, `py-16` — horizontal/vertical padding.
  - `bg-stone-900`, `text-stone-50` — dark background, light readable text.
  - `md:w-72` — fixed width (18rem) on medium+ screens (responsive prefix).
  - `rounded-r-xl` — rounded corners on the right side only.
- **`h2` title styling:** bottom margin, `font-bold`, `uppercase`, larger text on bigger screens, adjusted light gray color.
- **Button styling:** horizontal/vertical padding, `text-xs` (small text) with `md:text-base` (bigger on larger screens), `rounded-md`, `bg-stone-700`, `text-stone-400`, plus `hover:bg-stone-600` and `hover:text-stone-100` for hover state.

## Important Terms

| Term | Meaning |
|------|---------|
| `md:` prefix | Applies a Tailwind rule only on medium (and larger) screens — responsive design |
| `hover:` prefix | Applies a Tailwind rule only when the element is hovered |
| Utility classes | Small, single-purpose CSS classes combined to style an element |

## Workflow / Process
1. Style `App` container (`h-screen`, `my-8`).
2. Style `aside` for base + responsive width, padding, colors, rounded corner.
3. Style `h2` title (bold, uppercase, color, spacing).
4. Style the button (padding, responsive text size, color, hover states).

## Key Takeaways
- Tailwind uses many small utility classes stacked together, especially on buttons.
- Responsive design is handled with breakpoint prefixes like `md:`.
- Interactive states (hover) are handled with prefixes like `hover:`.

## Quick Revision
- `w-1/3` + `md:w-72` = responsive sidebar width.
- `hover:` + `md:` prefixes = state- and screen-size-based styling.
- Buttons typically accumulate the most utility classes.

---

# Adding the New Project Component & A Reusable Input Component

## Definition
`NewProject` is the component that collects new-project data (title, description, due date); `Input` is a reusable wrapper component for label + input/textarea pairs.

## Key Concepts
- **`NewProject` component:**
  - Returns a `<div>` containing a `<menu>` with Cancel and Save buttons.
  - Below the menu, a `<div>` holds the project detail fields (title, description, due date).
  - A `<form>` was considered (semantically better) but avoided here since forms are covered in a dedicated course section.
- **Reusable `Input` component:**
  - Created as `Input.jsx`, exporting function `Input`.
  - Configurable via props:
    - `isTextarea` (or just `textarea`) — if truthy, renders a `<textarea>`, otherwise renders an `<input>`.
    - `label` — sets the label text.
    - Remaining/rest props are spread onto the `<input>`/`<textarea>` for full configurability (e.g., `type`, `name`).
  - `NewProject` uses three `Input` components for Title, Description (with `textarea` prop set), and Due Date — avoiding repeated JSX/markup.
- **App-level layout:** `NewProject` imported and rendered next to the sidebar; `main` given `flex` and `gap-8` so sidebar and new-project panel sit side-by-side with spacing.

## Important Terms

| Term | Meaning |
|------|---------|
| Props spreading (`{...rest}`) | Passing along all remaining props to the underlying native element |
| Truthy prop shorthand | Writing `textarea` instead of `textarea={true}` — equivalent |
| `flex` / `gap-8` | Enables flexbox layout with spacing between children |

## Workflow / Process
1. Create `NewProject.jsx` with menu (Cancel/Save) + fields div.
2. Create reusable `Input.jsx` accepting `label`, `isTextarea`, and rest props.
3. Replace repeated paragraph/label/input markup in `NewProject` with three `Input` instances.
4. Import and render `NewProject` in `App`; add `flex`/`gap-8` to `main` for layout.

## Key Takeaways
- Reusable components (like `Input`) reduce duplicated JSX and Tailwind classes.
- Prop spreading makes wrapper components flexible and configurable from outside.
- Flexbox (`flex`, `gap-8`) enables the sidebar-stretch and side-by-side layout automatically.

## Quick Revision
- `Input` component: label + conditional textarea/input + spread rest props.
- `flex` on `main` = sidebar and content sit side by side and stretch full height.

---

# Styling Buttons & Inputs with Tailwind CSS

## Definition
Detailed Tailwind styling applied to the `NewProject` panel, its Cancel/Save buttons, and the `Input` component's label/input/textarea elements — plus extracting a reusable `Button` component.

## Key Concepts
- **`NewProject` wrapper div:** custom width `w-[35rem]` (Tailwind arbitrary value syntax), `mt-16` to align with sidebar title.
- **`menu` styling:** `flex`, `items-center` (vertical centering), `justify-end` (push buttons right), gap, `my-4`.
- **Cancel button:** `text-stone-800` with darker `hover:` color — a flat, low-emphasis style.
- **Save button:** dark background, `text-stone-50`, darker `hover:bg-stone-800` (approx.), margin, `rounded-md` — a bold, high-emphasis style.
- **Input.jsx styling:**
  - Paragraph wrapper: `flex`, `flex-col` (vertical stacking), gap, vertical margin.
  - Label: `text-sm`, `font-bold`, `uppercase`, mid-gray color.
  - Input/textarea shared classes (stored in a `classes` constant to avoid duplication):
    - `w-full`, `p-1`, `border-b-2`, `rounded` (implied), `border-stone-300`, `bg-stone-200`, `text-stone-600`.
    - Focus state: `focus:outline-none`, `focus:border-stone-600`.
- **Extracted `Button` component:**
  - New `Button.jsx` exporting a `Button` function that returns the button markup copied from `ProjectsSidebar`.
  - Accepts a `children` prop (destructured from props) rendered between the button tags.
  - Spreads remaining props onto the native `<button>` so things like `onClick` can be passed in from outside.
  - `ProjectsSidebar` and `NoProjectSelected` (see next section) both replaced their raw `<button>` markup with this shared `Button` component, removing duplicated class strings.

## Important Terms

| Term | Meaning |
|------|---------|
| Arbitrary value syntax (`w-[35rem]`) | Tailwind syntax for custom values not built into the default scale |
| `children` prop | Special prop holding whatever is nested between a component's opening/closing tags |
| Shared `classes` constant | Storing a repeated class string once and reusing it on multiple elements |

## Workflow / Process
1. Style `NewProject` wrapper (custom width, top margin).
2. Style `menu` (flex, alignment, spacing).
3. Style Cancel button (flat) and Save button (bold/high emphasis).
4. Style `Input`'s paragraph, label, and input/textarea (with shared `classes` constant).
5. Extract common button markup into `Button.jsx` using `children` + prop spreading; reuse in `ProjectsSidebar` and `NoProjectSelected`.

## Key Takeaways
- Tailwind's arbitrary value syntax (`w-[35rem]`) allows custom, non-standard sizing.
- Repeated class strings can be stored in a JS constant and reused across elements.
- Extracting a shared `Button` component avoids copy-pasting the same Tailwind classes everywhere.

## Quick Revision
- `w-[35rem]` = custom Tailwind width.
- Cancel = flat/subtle styling; Save = bold/prominent styling.
- `Button` component = `children` prop + spread props for reuse.

---

# Collecting User Input with Refs & Forwarded Refs

## Definition
Using `useRef` to read input values directly (without controlled-state on every keystroke), and `forwardRef` to pass refs through a custom `Input` component to the underlying native element.

## Key Concepts
- Instead of tracking every keystroke with state, refs are used because values are only needed once (on Save click).
- Three refs created in `NewProject` via `useRef` (imported from React): `title`, `description`, `dueDate`.
- **React 19+:** the custom `Input` component can accept a `ref` prop directly like any other prop (no extra wrapping needed) — refs are just a normal prop in newer React.
- **React 18 and earlier:** ref forwarding must be done manually:
  - Wrap the `Input` component function with `forwardRef` (imported from React).
  - Store the wrapped result in a constant and export it as the default export.
  - The wrapped component function receives a second parameter (after `props`): the forwarded `ref`.
  - That `ref` is then set on the native `ref` prop of both the `<textarea>` and `<input>` elements inside `Input`.
- This allows refs set on the custom `<Input>` component in `NewProject` to actually reach the real DOM `<input>`/`<textarea>` elements.

## Important Terms

| Term | Meaning |
|------|---------|
| `useRef` | React hook to create a mutable reference object (`{ current: ... }`) that can attach to a DOM element |
| `forwardRef` | React function that allows a custom component to receive and forward a `ref` to an inner native element |
| Ref forwarding | The mechanism of passing a `ref` through a custom component down to a native DOM node |

## Workflow / Process
1. Import `useRef` from React in `NewProject`.
2. Create `title`, `description`, `dueDate` refs.
3. Pass each ref to the corresponding `Input` component via the `ref` prop.
4. If React 18 or earlier: wrap `Input` with `forwardRef`, accept `ref` as second param, attach it to the internal `<input>`/`<textarea>` via their native `ref` prop.
5. If React 19+: no wrapping needed — `ref` works as a normal prop.

## Key Takeaways
- Refs are a lighter-weight alternative to state when values are only needed on-demand (e.g., button click) rather than on every change.
- Custom components need special handling (`forwardRef`) to expose refs to their internal native elements in React 18 and earlier; React 19 simplifies this.
- Ref version behavior differs — always check the React version in use.

## Quick Revision
- Refs = read value once, no re-renders per keystroke.
- React 18: `forwardRef` needed for custom components. React 19+: `ref` works like a normal prop.

---

# Handling Project Creation & Updating the UI

## Definition
Wiring up state, event handlers, and prop-drilling so that clicking "Add Project" opens the new-project form, saving creates a project object, and the sidebar/UI update to reflect the new state.

## Key Concepts
- **State shape in `App`:** `projectsState` object (via `useState`) with:
  - `selectedProjectId`: `undefined` (nothing selected/adding), `null` (adding a new project), or a project's ID (a project is selected).
  - `projects`: array of created project objects.
- **`handleStartAddProject`:** updates state (using the functional/previous-state form and spreading old state) to set `selectedProjectId` to `null`, signaling "now adding a project." Passed down as `onStartAddProject` prop to both `ProjectsSidebar` and `NoProjectSelected`, and connected to their buttons' `onClick`.
- **Conditional rendering in `App`:** a `content` variable decides what to render next to the sidebar:
  - `selectedProjectId === null` → render `NewProject`.
  - `selectedProjectId === undefined` → render `NoProjectSelected`.
  - (Later extendable to render selected project details.)
- **Collecting form values (`handleSave` in `NewProject`):** reads `.current.value` from each ref (`title`, `description`, `dueDate`) to get entered values.
- **Lifting state up:** `NewProject` calls an `onAdd` prop (passed from `App` as `handleAddProject`) with an object `{ title, description, dueDate }`.
- **`handleAddProject` in `App`:**
  - Updates state via the previous-state function form, spreading existing state.
  - Builds `newProject` by spreading the incoming project data and adding a generated `id` (via `Math.random()` — simple/non-guaranteed-unique but sufficient for the demo).
  - Adds `newProject` to a new copy of the `projects` array (spread old projects + new one).
  - Resets `selectedProjectId` back to `undefined` so the form closes and the UI returns to the fallback screen after saving.
- **Displaying projects in the sidebar:** `App` passes `projectsState.projects` to `ProjectsSidebar` via a `projects` prop; `ProjectsSidebar` maps over `projects` to render a `<li>`/button per project (with `key={project.id}`), styled with Tailwind (`w-full`, `text-left`, padding, rounded corners, margin, `text-stone-400`, hover state).
- **Input type refinement:** due date input's `type` set to `date` (native date picker); title input's `type` set to `text`.
- **StrictMode note:** components render twice in development under `StrictMode`, which can cause duplicate console logs — expected behavior, not a bug.

## Important Terms

| Term | Meaning |
|------|---------|
| Lifting state up | Moving shared state to the closest common parent component so multiple children can read/update it |
| Functional state update | Using `setState(prevState => ...)` to safely update state based on its previous value |
| `Math.random()` | Built-in JS function used here as a simple (non-guaranteed-unique) ID generator |
| `StrictMode` | React development mode that intentionally double-invokes functions to help surface bugs |

## Workflow / Process
1. Add `projectsState` (`selectedProjectId`, `projects`) via `useState` in `App`.
2. Add `handleStartAddProject` → sets `selectedProjectId` to `null`; wire to both buttons via `onStartAddProject` prop.
3. Conditionally render `NewProject` vs. `NoProjectSelected` based on `selectedProjectId`.
4. In `NewProject`, read ref values in `handleSave` and call `onAdd` with the project data object.
5. In `App`, add `handleAddProject` → build `newProject` (spread data + generated `id`), append to `projects` array, reset `selectedProjectId` to `undefined`.
6. Pass `projects` array down to `ProjectsSidebar`; map over it to render a button per project with a `key`.
7. Set proper input `type`s (`date` for due date, `text` for title).

## Key Takeaways
- A single `selectedProjectId` state value (undefined/null/ID) can compactly drive multiple UI states instead of several separate booleans.
- Data flows up from `NewProject` (via `onAdd`) to `App`, and the resulting `projects` array flows back down to `ProjectsSidebar` — a classic "lift state up" pattern.
- Always update state immutably: spread previous state/arrays rather than mutating them directly.
- Resetting `selectedProjectId` after save is what closes the form and returns to the fallback view.

## Quick Revision
- `selectedProjectId`: `undefined` = nothing, `null` = adding, ID = selected.
- `onStartAddProject` → opens form; `onAdd`/`handleAddProject` → saves project; reset to `undefined` → closes form.
- Sidebar renders `projects.map(...)` with `key={project.id}`.
################################################################################

############################################################################
**Date:16 July 2026
**Epic & Task:**P3.3-D14 — Fibonacci Sequence up to N Terms (GFG #17 + Codedamn)

**Day segment (if multi-day task):** Seg 2 of 5 · GitHub Issue #194 (OPEN by design)
***************************course trans***********************************
# Print the Fibonacci Sequence (5th Grade Explanation)

## What is the Fibonacci Sequence?

The **Fibonacci sequence** is a special number pattern.

Each new number is made by **adding the previous two numbers**.

It always starts with:

```text
0, 1
```

Then:

```text
0 + 1 = 1

1 + 1 = 2

1 + 2 = 3

2 + 3 = 5

3 + 5 = 8

5 + 8 = 13
```

So the Fibonacci sequence becomes:

```text
0, 1, 1, 2, 3, 5, 8, 13, ...
```

---

# Problem

Print the Fibonacci sequence up to **n terms**.

For example,

If

```text
n = 7
```

Output

```text
0
1
1
2
3
5
8
```

---

# Simple Code

```javascript
function fibonacci(n) {

    let first = 0;
    let second = 1;

    for (let i = 1; i <= n; i++) {

        console.log(first);

        let next = first + second;

        first = second;

        second = next;
    }
}

fibonacci(7);
```

Output

```text
0
1
1
2
3
5
8
```

---

# Step 1: Create a Function

```javascript
function fibonacci(n) {
```

We create a function called **fibonacci**.

It needs **one input**.

```javascript
n
```

This tells the computer

> "How many numbers should I print?"

Example

```javascript
fibonacci(7);
```

means

```text
Print 7 numbers.
```

---

# Step 2: Create Two Variables

```javascript
let first = 0;
let second = 1;
```

These two variables remember the last two Fibonacci numbers.

At the beginning,

```text
first = 0

second = 1
```

Think of them as two boxes.

```text
┌────────┐      ┌────────┐
│ first  │      │ second │
├────────┤      ├────────┤
│   0    │      │   1    │
└────────┘      └────────┘
```

---

# Step 3: Start the Loop

```javascript
for (let i = 1; i <= n; i++) {
```

The loop repeats **n times**.

If

```text
n = 7
```

The loop runs

```text
1

↓

2

↓

3

↓

4

↓

5

↓

6

↓

7
```

---

# Step 4: Print the Current Number

```javascript
console.log(first);
```

First time

```text
first = 0
```

Print

```text
0
```

---

Second time

```text
first = 1
```

Print

```text
1
```

---

# Step 5: Find the Next Number

```javascript
let next = first + second;
```

We add the last two numbers.

First time

```text
0 + 1 = 1
```

So

```text
next = 1
```

---

Second time

```text
1 + 1 = 2
```

So

```text
next = 2
```

---

Third time

```text
1 + 2 = 3
```

So

```text
next = 3
```

---

# Step 6: Move the Numbers

```javascript
first = second;
```

Move the second number into the first box.

Before

```text
first = 0

second = 1
```

After

```text
first = 1

second = 1
```

---

Now

```javascript
second = next;
```

Move the new number into the second box.

Before

```text
second = 1
```

After

```text
second = 2
```

Now the boxes become

```text
┌────────┐      ┌────────┐
│ first  │      │ second │
├────────┤      ├────────┤
│   1    │      │   2    │
└────────┘      └────────┘
```

The process repeats again.

---

# Complete Dry Run

Suppose

```text
n = 7
```

| Loop | first | second | Printed | next |
|------|------:|-------:|--------:|-----:|
| Start | 0 | 1 | - | - |
| 1 | 0 | 1 | **0** | 1 |
| 2 | 1 | 1 | **1** | 2 |
| 3 | 1 | 2 | **1** | 3 |
| 4 | 2 | 3 | **2** | 5 |
| 5 | 3 | 5 | **3** | 8 |
| 6 | 5 | 8 | **5** | 13 |
| 7 | 8 | 13 | **8** | 21 |

Output

```text
0
1
1
2
3
5
8
```

---

# Complete Flow

```text
Start
   │
   ▼
first = 0
second = 1
   │
   ▼
Print first
   │
   ▼
next = first + second
   │
   ▼
first = second
   │
   ▼
second = next
   │
   ▼
Repeat until n terms
```

---

# Another Example

### Input

```javascript
fibonacci(5);
```

Output

```text
0
1
1
2
3
```

---

# Another Example

### Input

```javascript
fibonacci(10);
```

Output

```text
0
1
1
2
3
5
8
13
21
34
```

---

# Easy Memory Trick 🎒

Imagine two friends are holding numbers.

At first:

```text
Friend 1 → 0

Friend 2 → 1
```

They make a new number by adding their numbers.

```text
0 + 1 = 1
```

Now everyone moves one step.

```text
Friend 1 → 1

Friend 2 → 1
```

Again,

```text
1 + 1 = 2
```

Move again.

```text
Friend 1 → 1

Friend 2 → 2
```

Again,

```text
1 + 2 = 3
```

This continues forever!

---

# Quick Revision

| Code | Meaning |
|------|---------|
| `first` | First Fibonacci number |
| `second` | Second Fibonacci number |
| `next` | New Fibonacci number |
| `for` | Repeat n times |
| `console.log()` | Print the number |
| `first + second` | Find the next Fibonacci number |

---

# Final Output

### Input

```javascript
fibonacci(7);
```

### Output

```text
0
1
1
2
3
5
8
```

### In Simple Words

> Start with **0** and **1**. Print the first number, then add the two numbers to make the next one. Move the numbers forward and repeat until you have printed **n** terms.