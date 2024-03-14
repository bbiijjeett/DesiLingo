// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="main px-5 md:px-20 py-20 md:py-20 h-[80vh] flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 py-20 text-white md:text-left">
        <h1 className="text-4xl md:text-7xl font-bold">Discover Indian</h1>
        <h1 className="text-4xl md:text-7xl font-bold">Slang and Dialects</h1>
        <div className="flex flex-col md:flex-row gap-5 mt-10 text-[#9897CE]">
          <button className="bg-white font-semibold px-5 py-2">
            <Link to="/explore">Start Exploring</Link>
          </button>

          <button className="bg-red-600 text-white font-semibold px-5 py-2 mt-3 md:mt-0">
            <Link to="/add">Share Your Words</Link>
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://im.indiatimes.in/content/2019/Sep/national_language_1568547737.jpg?w=1200&h=900&cc=1"
          alt="Indian language"
        />
      </div>
    </div>
  );
};

export default Landing;
