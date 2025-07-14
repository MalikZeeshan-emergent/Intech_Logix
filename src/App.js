import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SEO from "./pages/services/SEO";
import WordPress from "./pages/services/WordPress";
import HubSpot from "./pages/services/HubSpot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/wordpress" element={<WordPress />} />
          <Route path="/services/hubspot" element={<HubSpot />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;