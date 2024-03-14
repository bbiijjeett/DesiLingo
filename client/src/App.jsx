/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Browser from "./pages/Browser";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import CustomMsg from "./components/CustomMsg";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <CustomMsg /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/browser" element={<Browser />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
