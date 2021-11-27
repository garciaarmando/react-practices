/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const ConceptsMenu = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>
            HTML links (not recommended due the entire application re-render)
          </span>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <span>Link Component (without re-render)</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="/no-place">Error 404</Link>
        </li>
        <li>
          <span>NavLink Component</span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? " activated" : "")}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? " activated" : "")}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "activated" : "")}>
            Contact
          </NavLink>
          <NavLink
            to="/no-place"
            className={({ isActive }) => (isActive ? "activated" : "")}>
            Error 404
          </NavLink>
        </li>
        <li>
          <span>useParams</span>
          <Link to="/user/armandopsi">armandopsi</Link>
          <Link to="/user/rambo">rambo</Link>
        </li>
      </ol>
    </nav>
  );
};

export default ConceptsMenu;
