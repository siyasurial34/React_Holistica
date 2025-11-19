import React, { useState } from "react";
import "./auth.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await fetch(
      `http://localhost:5000/users?email=${form.email}&password=${form.password}`
    );

    const data = await res.json();

    if (data.length > 0) {
      alert("Login Successful!");

      // Save user in Local Storage
      localStorage.setItem("user", JSON.stringify(data[0]));

      // Redirect to home
      window.location.href = "/";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don’t have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}

export default Login;
