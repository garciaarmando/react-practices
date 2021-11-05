import React from "react";
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyles from "./Estilos.module.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  return (
    <>
      <section className="styles">
        <h2>Styles CSS in React</h2>

        <h3 className="bg-react">Styles in extern sheet</h3>
        <h3
          className="bg-react"
          style={{ borderRadius: ".25rem", margin: "1rem" }}>
          Inline Styles
        </h3>

        <h3 className="bg-react" style={myStyles}>
          Inline Styles from an Object
        </h3>

        <h3 className="bg-react" style={myStyles}>
          Inline Styles from an Object
        </h3>

        <h3 className="bg-react">
          Adding normalize.css
          <br />
          <code>@import-normalize;</code>
        </h3>

        <h3 className={moduleStyles.error}>Styles as modules</h3>

        <h3 className={moduleStyles.success}>Styles as modules</h3>

        <h3 className="bg-sass">Styles from SASS</h3>
      </section>
    </>
  );
}
