import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../graphql/auth";
import "./auth.css";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const [register] = useMutation(REGISTER_MUTATION);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const res = await register({ variables: form });
    console.log("REGISTER SUCCESS:", res.data);
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

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

      <button onClick={handleSignup}>Signup</button>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;
