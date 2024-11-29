import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteriorServices from "./pages/InteriorServices";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr className="" />
      <div className=" px-smallScreen sm:px-smallScreen md:px-mediumScreen lg:px-largeScreen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/interior" element={<InteriorServices />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
