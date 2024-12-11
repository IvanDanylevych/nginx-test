import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getUsers = async () => {
      const users = await fetch("/api/users");
      return users.json();
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Данилевич Іван ІПЗм-24-2</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
