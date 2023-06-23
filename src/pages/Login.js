import React from "react";
import logo from "../Pos-logo1.png";
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <img src={logo} style={{ width: "100px" }} alt="logo" />
          <h2>We are The POS Team</h2>
          <p>Please login to your account</p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className={styles.loginButton}>LOG IN</button>
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
