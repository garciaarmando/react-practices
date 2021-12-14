import { memo } from "react";

const ContadorChild = () => {
  console.log("Children of component counter re-rendered");

  return (
    <div
      style={{
        border: "thin solid #000",
        margin: "1rem",
        padding: "1rem",
      }}>
      <h2>Children of component counter</h2>
    </div>
  );
};

export default memo(ContadorChild);
