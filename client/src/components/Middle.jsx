// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const imgLink = [
  "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555797487-a1f30b5d8d55?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603596311044-f19158b61f28?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

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
      <div className="flex flex-col justify-around text-9xl font-extrabold w-full h-full">
        {["Lost", "in", "translation", "butter", "chicken"].map(
          (item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center relative text-white  hover:text-red-600"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHoverOut()}
            >
              <h1 className="z-10 relative  hover:italic">{item}</h1>
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
