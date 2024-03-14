// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader"; // Import the Loader component
// import Eyes from "../components/Eyes";
// import Marque from "../components/Marque";
import Landing from "../components/Landing";
import LastBanner from "../components/LastBanner";
import Middle from "../components/Middle";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#201B79]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Landing />
          {/* <Marque /> */}
          {/* <Eyes /> */}
          <Middle />
          <LastBanner />
        </>
      )}
    </div>
  );
};

export default Home;
