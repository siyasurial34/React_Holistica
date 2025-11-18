import React, { useState } from "react";
import "./style.css";

const LoginSignup = () => {
  const [active, setActive] = useState("login");

  return (
    <div className="container">
      <div className="form-box">

        <div className="toggle-buttons">
          <button
            className={active === "login" ? "active" : ""}
            onClick={() => setActive("login")}
          >
            Login
          </button>

          <button
            className={active === "signup" ? "active" : ""}
            onClick={() => setActive("signup")}
          >
            Signup
          </button>
        </div>

        {/* LOGIN FORM */}
        {active === "login" && (
          <form className="form active">
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="btn">Login</button>
            <p className="switch-text">
              Don’t have an account?{" "}
              <span onClick={() => setActive("signup")}>Signup</span>
            </p>
          </form>
        )}

        {/* SIGNUP FORM */}
        {active === "signup" && (
          <form className="form active">
            <h2>Signup</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="btn">Signup</button>
            <p className="switch-text">
              Already have an account?{" "}
              <span onClick={() => setActive("login")}>Login</span>
            </p>
          </form>
        )}

      </div>
    </div>
  );
};

export default LoginSignup;
