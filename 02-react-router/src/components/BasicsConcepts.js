/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import { ReactTopics } from "../pages/ReactTopics";
import JSXInfo from "../pages/JSXInfo";
import User from "../pages/User";
import ConceptsMenu from "./ConceptsMenu";
import PropsInfo from "../pages/Props";
import StateInfo from "../pages/State";
import ComponentsInfo from "../pages/Components";

const BasicsConcepts = () => {
  return (
    <div>
      <h2>Basics Concepts</h2>
      <Router>
        <ConceptsMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/acerca" element={<Navigate to="/about" />} />
          <Route path="/contacto" element={<Navigate to="/contact" />} />

          {/* Nested Routes */}
          <Route path="react" element={<ReactTopics />}>
            <Route path=":jsx" element={<JSXInfo />} />
            <Route path=":props" element={<PropsInfo />} />
            <Route path=":state" element={<StateInfo />} />
            <Route path=":components" element={<ComponentsInfo />} />
          </Route>

          {/* Not found route */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default BasicsConcepts;

/* const BasicsConcepts = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default BasicsConcepts;
 */
