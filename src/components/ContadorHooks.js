import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <h1>Hooks - useState</h1>
      <nav>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>Contador de {props.titulo}</p>
    </>
  );
}

//Functional components also accepts the defaultProps functionality
ContadorHooks.defaultProps = {
  titulo: "Clicks",
};
