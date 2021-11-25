/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import ConceptsMenu from "./ConceptsMenu";

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
