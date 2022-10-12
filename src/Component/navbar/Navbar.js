import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ title, button }) => {
  return (
    <div className="navbar">
      <span>Navbar </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link state={"About from navbar"} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
