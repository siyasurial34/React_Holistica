import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Skincare from "./components/Skincare";
import Moisturiser from "./components/moisturiser"; // ✅ Existing
import Login from "./components/Login";
import Signup from "./components/Signup";
import SleepRelax from "./components/sleep_relax"; // ✅ New Sleep & Relaxation page

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/moisturiser" element={<Moisturiser />} />
        <Route path="/sleep_relax" element={<SleepRelax />} /> {/* ✅ New route */}

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
