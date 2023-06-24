import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import logo from "../Pos-logo1.png";
import styles from "../styles/Login.module.css";

function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "username") setUsername(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // make a request to your JSON server to check if the username and password are valid
    const response = await fetch("http://localhost:8000/users");
    const users = await response.json();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      const token = btoa(new Date().toISOString());
      const expiryTime = new Date().getTime() + 60 * 60 * 1000; // current time + 1 hour

      localStorage.setItem("token", JSON.stringify({ token, expiryTime }));
      setUser(user.username);
      navigate("/products");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <img src={logo} style={{ width: "100px" }} alt="logo" />
          <h2>We are The POS Team</h2>
          <p>Please login to your account</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />

            <button type="submit" className={styles.loginButton}>
              LOG IN
            </button>
          </form>
          <div className={styles.registerSection}>
            <p>Don't have an account?</p>
            <button className={styles.loginButton}>Create one</button>
          </div>
        </div>
        <div className={styles.right}>
          <h2>We are more than just a company</h2>
          <p>
            We don't just offer a Point of Sale system - we offer a commitment
            to partnership. We are dedicated to understanding your business and
            providing you with the best solutions to meet your unique needs.
            With us, you'll be equipped to streamline operations, boost
            efficiency, and ultimately, grow your business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
