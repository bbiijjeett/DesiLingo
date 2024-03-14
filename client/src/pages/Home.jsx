/* eslint-disable no-unused-vars */
import React from "react";

import Eyes from "../components/Eyes";
import Marque from "../components/Marque";
import Landing from "../components/Landing";
import LastBanner from "../components/LastBanner";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#201B79]">
      <Landing />
      {/* <Marque /> */}

      <Eyes />
      <LastBanner />
    </div>
  );
};

export default Home;
