import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Card = ({ item }) => {
  return (
    <div className="w-full md:w-1/2 rounded-xl bg-[#1B2936] p-5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-2">
        {item.word}
      </h1>
      <p className="text-sm uppercase text-yellow-300 mb-4">{item.language}</p>
      <div className="text-lg text-white mb-4">
        <h2 className="font-medium">{item.background}</h2>
        <p className="italic text-sm font-thin mt-2">{item.definition}</p>
      </div>
      <div className="text-md text-white mb-4">
        <p className="font-semibold">Example: "{item.example}"</p>
        <p className="font-semibold">Tags: {item.tags}</p>
        <p className="font-bold text-red-500">By {item.by}</p>
      </div>
      <div className="flex text-white font-bold">
        <div className="flex gap-2 items-center border border-blue-700 rounded-full p-2">
          <AiFillLike />
          <span>{item.likes}</span>
          <div className="pl-2"></div>
          <AiFillDislike />
          <span>{item.dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
