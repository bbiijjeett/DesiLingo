/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Suspense } from "react";
import Card from "./Card";

// Skeleton Loader Component
const SkeletonLoader = () => {
  return (
    <div className="w-full md:w-1/2 rounded-xl  p-5 animate-pulse">
      <div className="h-8 w-3/4 bg-gray-300 mb-2 rounded-sm"></div>
      <div className="h-4 w-1/2 bg-gray-300 mb-4 rounded-sm"></div>
      <div className="h-4 bg-gray-300 mb-2 rounded-sm"></div>
      <div className="h-3 bg-gray-300 mb-2 rounded-sm"></div>
      <div className="h-3 bg-gray-300 mb-2 rounded-sm"></div>
      <div className="h-3 bg-gray-300 rounded-sm"></div>
    </div>
  );
};

const Cards = () => {
  const [slangs, setSlangs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlangs = async () => {
      try {
        const response = await fetch(
          "https://desi-lingo-api.vercel.app/api/slangs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch slangs");
        }
        const data = await response.json();
        setSlangs(data);
        setTimeout(() => {
          setLoading(false); // Data loaded, set loading to false after 3 seconds
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSlangs();
  }, []);

  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center px-10 py-10">
      {loading ? ( // Show skeleton loader while loading
        <Suspense fallback={<SkeletonLoader />}>
          {[...Array(5)].map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </Suspense>
      ) : (
        slangs.map((item, index) => <Card key={index} item={item} />)
      )}
    </div>
  );
};

export default Cards;
