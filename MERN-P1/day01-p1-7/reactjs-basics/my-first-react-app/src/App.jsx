const App = () => {
  //!Example 1: Basic jsx with variables
  const name = "React Learner";
  const greeting = "Welcome to JSX";
  //! Example 2: JSX with expressions
  const num1 = 10;
  const num2 = 5;
  //! Example 3: JSX with conditional rendering
  const isLoggedIn = false;
  //! Example 4: JSX with lists
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <div>
      <h1>JSX Examples</h1>
      {/*!Example 1: Basic jsx with variables*/}
      <section>
        <h2>1.Basic jsx with variables</h2>
        {greeting}, {name}
        <p>
          JSX lets you insert JavaScript expressions inside curly braces {"{}"}
        </p>
      </section>
      <section>
        {/* Example 2: JSX with expressions */}
        <h2>JSX with expressions</h2>
        {num1} + {num2} = {num1 + num2}
      </section>

      <section>
        {/* Example 3: JSX with conditional rendering */}
        <h2>JSX with conditional rendering</h2>
        {/* <p>{isLoggedIn && <span>Welcome back!</span>}</p> */}

        <p>
          {isLoggedIn ? (
            <span>Welcome back!</span>
          ) : (
            <span>Please login again</span>
          )}
        </p>
      </section>
      {/* Example 4: JSX with lists */}
      <section>
        <h1>SX with lists</h1>
        <ul>
          {fruits.map((fruit, index) => {
            return <li key={index}>{fruit}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

//JSX lets you write UI using HTML-like syntax inside JavaScript.
//You use {} to add dynamic content (like variables or logic).

// not HTML – there are a few syntax changes to remember.

//JSX is turned into real JavaScript functions behind the scenes by React (using a tool called Babel).

export default App;
