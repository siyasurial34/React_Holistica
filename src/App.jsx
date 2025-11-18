import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Skincare from "./components/Skincare";
import LoginSignup from "./components/LoginSignup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/login" element={<LoginSignup />} />   {/* Add this */}
      </Routes>
    </Router>
  );
}


export default App;
