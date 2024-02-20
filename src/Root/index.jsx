import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../Pages/Shop";
import ShopDetail from "../Pages/ShopDetail";
import PageCart from "../Pages/PageCart";
import Checkout from "../Pages/Checkout";
import Testiminonals from "../Pages/Testimonial";
import Notfound from "../Pages/404";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NavbarTwo from "../Components/NavbarTwo";

function Root() {
  return (
    <div className="">
      <div className="mx-7">
        <NavbarTwo />
      </div>
      <Navbar />
      <div className="pb-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopdetail" element={<ShopDetail />} />
          <Route path="/cart" element={<PageCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/testiminionals" element={<Testiminonals />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notfound" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
