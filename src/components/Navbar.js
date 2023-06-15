import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link className="navbar-link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/categories">
            Categories
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/units">
            Units
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/pos">
            POS
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
