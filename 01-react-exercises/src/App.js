import React from "react";
import { CrudApi } from "./components/CrudApi";
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <>
      <h1>React exercises</h1>
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
