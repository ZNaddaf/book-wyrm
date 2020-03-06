import React from "react";
import banner from "../assets/banner_green.png";

const Hero = () => (
  <div className="text-center text-white" style={{ fontFamily: "cursive" }}>
    <div className="m-5">
      <h1 className="text-4xl md:text-6xl">Welcome, fellow Book Wyrm!</h1>
      <h2 className="text-xl md:text-2xl">Log in or sign up to view and save your personalized reading list.</h2>
    </div>
    <img className="m-auto app-banner w-2/3 md:w-2/5" src={banner} alt="wyrm banner" />
  </div>
);

export default Hero;
