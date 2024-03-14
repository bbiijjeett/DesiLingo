// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import image1 from "../assets/images/image1.avif";
import image2 from "../assets/images/image2.avif";
import image3 from "../assets/images/image3.avif";
import image4 from "../assets/images/image4.avif";
import image5 from "../assets/images/image5.avif";

const imgLink = [image1, image2, image3, image4, image5];

const Middle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [bgColor, setBgColor] = useState("bg-black");

  const handleHover = (index) => {
    setHoveredIndex(index);
    setBgColor(`url(${imgLink[index]})`); // Set background image from imgLink array
  };

  const handleHoverOut = () => {
    setHoveredIndex(null);
    setBgColor("bg-black");
  };

  return (
    <div
      className="w-full h-screen bg-black"
      style={{ backgroundImage: bgColor, backgroundSize: "cover" }}
    >
      <div className="flex flex-col justify-center text-6xl md:text-9xl font-extrabold w-full h-full">
        {["Lost", "in", "translation", "butter", "chicken🍗"].map(
          (item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center relative text-white  hover:text-red-600"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHoverOut()}
            >
              <h1 className="z-10 relative   hover:italic">{item}</h1>
              <div
                id={`yellowDiv${index}`}
                className="absolute z-0 w-full h-8 bg-yellow-400"
                style={{
                  visibility: hoveredIndex === index ? "visible" : "hidden",
                }}
              ></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Middle;
