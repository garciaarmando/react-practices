import { memo, useMemo } from "react";

const ContadorChild = ({ contador, sumar, restar }) => {
  /* let superNum = 0;

  for (let i = 0; i < 1000000000; i++) {
    superNum++;
  } */

  const superNum = useMemo(() => {
    let num = 0;

    for (let i = 0; i < 1000000000; i++) {
      num++;
    }

    return num;
  }, []);
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
      <h3>{superNum}</h3>
    </div>
  );
};

export default memo(ContadorChild);
