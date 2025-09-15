import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import WhyChooseSohra from "./WhyChooseSohra";
import Products from "./Products";
import Footer from "./Footer";

function index() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Body/>
      <WhyChooseSohra/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default index;
