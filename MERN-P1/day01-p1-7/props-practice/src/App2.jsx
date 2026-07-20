import DonationButton from "./components/DonationButton";
import Greeting from "./components/Greeting";

const App = () => {
  const donateFn = () => {
    alert("Thank you for donating");
  };
  return (
    <div>
      <Greeting name="Alex" message="Good morning" age="20 years" />
      <Greeting name="John" message="Good afternoon" age="22 years" />
      <Greeting name="Smith" message="Good evening" age="30 years" />

      <DonationButton onDonate={donateFn} />
    </div>
  );
};

export default App;

//!===children (Is a special prop)====
