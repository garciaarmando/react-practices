import logo from "./logo.svg";
import "./App.css";

function App() {
  let nombre = "Armando";
  let auth = false;
  let seasons = ["spring", "summer", "fall", "winter"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Test</label>
        <input type="text" id="nombre" />
        <h1>Hola {nombre}</h1>
        <p>
          {auth ? "El usuario esta logeado" : "El usuario debe iniciar sesión"}
        </p>
        <ul>
          {seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <p>{2 + 1}</p>
        <p>
          Edit <code> src / App.js </code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
