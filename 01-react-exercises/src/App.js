import React from "react";
import ContactForm from "./components/ContactForm";
import { CrudApi } from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import Modals from "./components/Modals";
import NestedSelects from "./components/NestedSelects";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <Modals />
      <hr />
      <ContactForm />
      <hr />
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
