// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div
      data-scroll-section
      className="w-full h-[20vh] flex items-center justify-center   bg-[#201B79] text-zinc-100"
    >
      <div
        data-scroll
        className="text-center p-4 flex flex-col items-center justify-center"
      >
        © 2024 Copyright. All rights reserved.
        <a data-scroll className="text-reset fw-bold" href="#">
          DesiLingo
        </a>
      </div>
    </div>
  );
};

export default Footer;
