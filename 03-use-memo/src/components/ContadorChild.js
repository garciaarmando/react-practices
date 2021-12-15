import { memo } from "react";

const ContadorChild = ({ contador, sumar, restar }) => {
  console.log("Children of component counter re-rendered");

  return (
    <div
      style={{
        border: "thin solid #000",
        margin: "1rem",
        padding: "1rem",
      }}>
      <h2>Children of component counter </h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </div>
  );
};

export default memo(ContadorChild);
