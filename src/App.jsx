import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Skincare from "./components/Skincare";
<<<<<<< HEAD
import LoginSignup from "./components/LoginSignup";

=======
import Login from "./components/Login";
import Signup from "./components/Signup";
>>>>>>> 7bb1716 (done)

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/skincare" element={<Skincare />} />
<<<<<<< HEAD
        <Route path="/login" element={<LoginSignup />} />   {/* Add this */}
=======

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
>>>>>>> 7bb1716 (done)
      </Routes>
    </Router>
  );
}


export default App;
