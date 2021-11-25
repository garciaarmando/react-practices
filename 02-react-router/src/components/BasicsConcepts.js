import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const BasicsConcepts = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h3>Home</h3> <p>Welcome to react Router</p>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route path="/about" element={<h3>About</h3>} />
      </Routes>

      <Routes>
        <Route path="/contact" element={<h3>Contact</h3>} />
      </Routes>
    </Router>
  );
};

export default BasicsConcepts;
