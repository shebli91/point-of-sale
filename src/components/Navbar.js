import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link
        to="/products"
        className={`nav-item ${
          location.pathname === "/products" ? "active" : ""
        }`}
      >
        Products
      </Link>
      <Link
        to="/categories"
        className={`nav-item ${
          location.pathname === "/categories" ? "active" : ""
        }`}
      >
        Categories
      </Link>
      <Link
        to="/units"
        className={`nav-item ${location.pathname === "/units" ? "active" : ""}`}
      >
        Units
      </Link>
      <Link
        to="/pos"
        className={`nav-item ${location.pathname === "/pos" ? "active" : ""}`}
      >
        POS
      </Link>
      <Link
        to="/login"
        className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}
      >
        Login
      </Link>
    </div>
  );
};

export default Navbar;
