import React from "react";
import Navbar from "./components/Navbar";
import home from "./pages/home/index";
import Home from "./pages/home/index";
import About from "./pages/about/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
