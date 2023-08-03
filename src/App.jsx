import { useEffect, useState } from "react";

import "./App.css";
import { CurstonContext } from "./Context/Context";
import Nav from "./Pages/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
