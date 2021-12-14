import { useState } from "react";
import ContadorChild from "./ContadorChild";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        Counter with a children memorized using <mark>React Memo</mark>
      </h2>

      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>

      <h3>{contador}</h3>

      <ContadorChild />
    </div>
  );
};

export default Contador;
