// Package import
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// Assets import
import "./App.css";

// Components import
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";

// Pages import
import Home from "./pages/Home";
import Features from "./pages/Features";
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";

library.add(faBars, faXmark);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CookieConsent />
    </Router>
  );
}

export default App;
