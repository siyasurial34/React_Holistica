import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql/auth";
import "./auth.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const [login] = useMutation(LOGIN_MUTATION);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await login({ variables: form });
    console.log("LOGIN SUCCESS:", res.data);
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
