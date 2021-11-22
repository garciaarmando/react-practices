import React from "react";
import { CrudApi } from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import NestedSelects from "./components/NestedSelects";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <h1>React exercises</h1>
      <NestedSelects />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
