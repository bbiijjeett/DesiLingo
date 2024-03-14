// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Contact from "../pages/Contact";

const LastBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIsMobile();

    // Event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="last border-b-[1px] border-zinc-300 md:border-b-0 w-full h-[70vh]  md:h-[80vh] bg-[#201B79] text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-9xl font-extrabold leading-none text-center md:text-center">
        Community Stories
      </h1>
      <p className="mt-5 md:mt-10 text-lg md:text-5xl font-semibold leading-none tracking-tight text-center md:text-center">
        Local dialects enrich our understanding of culture and identity
      </p>

      {isMobile && <Contact />}
    </div>
  );
};

export default LastBanner;
