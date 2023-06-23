import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useLocation } from "react-router-dom";
import logo from "../Pos-logo1.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/pos">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        {user && <div className="welcome-message">Welcome, {user}!</div>}
      </div>
      <div className="nav-items-container">
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
          className={`nav-item ${
            location.pathname === "/units" ? "active" : ""
          }`}
        >
          Units
        </Link>
        <Link
          to="/pos"
          className={`nav-item ${location.pathname === "/pos" ? "active" : ""}`}
        >
          POS
        </Link>
        {user ? (
          <button className="nav-item" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            className={`nav-item ${
              location.pathname === "/login" ? "active" : ""
            }`}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
