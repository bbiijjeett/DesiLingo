// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Loader.css"; // CSS file for styling

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress increment every 50 milliseconds
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 2;
        }
        clearInterval(interval); // Stop the interval when progress reaches 100%
        return 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-bar" style={{ width: `${progress}%` }}>
        <div className="loader-text">{progress}%</div>
      </div>
      <div className="background-letters">
        {Array.from({ length: 50 }, (_, i) => (
          <span
            key={i}
            className="letter"
            style={{
              "--x": Math.random(),
              "--y": Math.random(),
            }}
          >
            {getRandomLetter()}
          </span>
        ))}
      </div>
    </div>
  );
};

const getRandomLetter = () => {
  const lettersPool = [
    "A",
    "B",
    "C",
    "अ",
    "इ",
    "க்",
    "ம்",
    "ક",
    "મ",
    "ਕ",
    "ਮ",
    "କ",
    "ମ",
    "క",
    "మ",
    "ಕ",
    "ಮ",
    "ക",
    "മ",
    "ਕ੍ਰ",
    "ਕ੍ਵ",
    "ക്യ",
    "ക്വ",
    "ક્ર",
    "ક્વ",
    "କ୍ର",
    "କ୍ଵ",
    "క్ర",
    "క్వ",
    "ಕ್ರ",
    "ಕ್ವ",
    "ക്ര",
    "ക്വ",
  ];
  return lettersPool[Math.floor(Math.random() * lettersPool.length)];
};

export default Loader;
