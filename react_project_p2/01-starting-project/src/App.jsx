import reactImg from './assets/react-core-concepts.png';
import componentsImg from  './assets/components.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descrption = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descrption} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function coreConcept(props) {
  return (
    <li>
     <img src={props.image} alt={props.title} />
     <h3>{props.title}</h3>
     <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>core concepts</h2>
        <ul> 
          <coreConcept
          title="components" 
          description="the core UI building block"
          image={componentsImg}
          />
          <coreConcept />
          <coreConcept />
          <coreConcept />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;