import React, { useState, useEffect } from "react";
import "./Loader.css"; // CSS file for styling

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval); // Stop the interval when progress reaches 100%
        return 100;
      });
    }, 50); // Change the interval duration for faster/slower animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-bar" style={{ width: `${progress}%` }}>
        <div className="loader-text">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
