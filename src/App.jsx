import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/homePage/homePage";
import Footer from "./components/footer/footer";
import About from "./pages/About/about";
import Career from "./pages/career/career";
import "./App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      once: false,     // whether animation should happen only once
    });
  }, []);
  return (
    <>
     
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    
    </>
  );
}

export default App;
