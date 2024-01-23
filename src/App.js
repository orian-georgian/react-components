import Logo from "./components/Logo";
import PersonGreet from "./components/PersonGreet";
import { Card } from "./components/Card";
import Person from "./components/Person";
import "./App.css";

function App() {
  const person = {
    name: "Ionica",
    age: 21,
    hobby: "Tennis",
  };

  const person2 = {
    name: "Mia",
    age: 24,
    hobby: "Dance",
  };

  const grandGrandFatherAge = 86;

  return (
    <div id="ceva" class="App">
      <header className="App-header">
        <Logo />
        <PersonGreet person={person} />
      </header>
      <main>
        <section>
          <Card title="Fancy card">
            <p>This is a text</p>
            <Logo />
          </Card>
          <Card title="Another card">
            <h1>Ha HA HA</h1>
          </Card>
        </section>
        <section>
          <Person age={grandGrandFatherAge} difference={25} />
        </section>
      </main>
      <footer>
        <PersonGreet person={person2} />
      </footer>
    </div>
  );
}

export default App;
