/* eslint-disable no-unused-vars */
import React from "react";
import bgImg from "../assets/image.png";
import { Link } from "react-router-dom";

const Eyes = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-persistent
      className="eyes relative px-5 py-5 w-full h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        "@media (max-width: 640px)": {
          backgroundSize: "contain",
        },
      }}
    >
      <button className="absolute bottom-10 md:bottom-10 left-1/2 transform -translate-x-1/2 bg-red-500 rounded-full text-white font-semibold text-lg py-2 px-5 md:py-3 md:px-6">
        <Link to="/contact">Contribute</Link>
      </button>
    </div>
  );
};

export default Eyes;
