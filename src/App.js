import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import "./App.css";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponente from "./components/ComunicacionComponentes";
import CicloDeVida from "./components/CiclodeVida";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
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
        </section>
        <section>
          <Componente msg="I'm a functional component from a prop" />
          <hr />
          <Propiedades
            string="Prop as a string"
            number={26}
            boolean={true}
            array={[1, 2, 3, 4]}
            object={{ name: "Armando", email: "armandobfmv@gmail.com" }}
            func={num => num * num}
            reactElement={<i>This is a React Element</i>}
            componentReact={
              <Componente msg="I'm a component passed as a prop to another component" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponente />
          <hr />
          <CicloDeVida />
        </section>
      </header>
    </div>
  );
}

export default App;
