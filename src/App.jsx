import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Contact from "./Pages/Contact";
import Works from "./Pages/Works";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      }
    </>
  );
}
export default App;
