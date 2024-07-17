import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/common/header/Header";
import Home from "../components/home/Home";
import BestSeller from "../components/BestSeller/BestSeller";
import Favorites from "../components/favorites/Favorites";
import Footer from "../components/common/footer/Footer";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/BestSeller" element={<BestSeller />} />
          <Route exact path="/Favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Pages;
