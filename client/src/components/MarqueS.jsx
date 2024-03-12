// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/img/ss1.png";
import image2 from "../assets/img/ss2.png";
import image3 from "../assets/img/ss3.png";

const MarqueS = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.3"
      className="marque w-full py-10 md:py-20 rounded-tl-3xl rounded-tr-3xl bg-white/20 shadow-lg ring-1 ring-black/4 text-white"
    >
      <div className="text border-t-[1px] border-b-[1px] py-5 border-zinc-300 flex gap-5 overflow-hidden whitespace-nowrap">
        <motion.img
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          src={image1}
          className="w-[40vw] rounded-3xl px-5 py-5 "
        />
        <motion.img
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          src={image2}
          className="w-[40vw] rounded-3xl px-5 py-5  "
        />
        <motion.img
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          src={image3}
          className="w-[40vw] rounded-3xl px-5 py-5 "
        />
      </div>
    </div>
  );
};

export default MarqueS;
