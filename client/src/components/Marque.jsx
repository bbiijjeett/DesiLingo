/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.3"
      className="marque w-full py-10 md:py-20 rounded-tl-3xl rounded-tr-3xl bg-red-600 text-white"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="uppercase tracking-tighter text-[8vw] md:text-[25vw] leading-none font-sans font-bold pt-1 md:pt-5 -mt-[2vw] md:-mt-[5vw] pr-5 md:pr-20"
        >
          Desi Slangs
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="uppercase tracking-tighter text-[8vw] md:text-[25vw] leading-none font-sans  font-bold pt-1 md:pt-5 -mt-[2vw] md:-mt-[5vw] pr-5 md:pr-20"
        >
          Desi Slangs
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
