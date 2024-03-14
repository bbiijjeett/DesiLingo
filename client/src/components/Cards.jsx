import React, { useState, useEffect, Suspense } from "react";
import Card from "./Card";

// Skeleton Loader Component
const SkeletonLoader = () => {
  return (
    <div className="w-full md:w-1/2 rounded-xl p-5 animate-pulse">
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
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSlangs = async () => {
      try {
        const response = await fetch(
          `https://desi-lingo-api.vercel.app/api/slangs?page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch slangs");
        }
        const data = await response.json();
        if (data.length === 0) {
          setHasMore(false); // No more data to load
        } else {
          setSlangs((prevSlangs) => [...prevSlangs, ...data]);
          setTimeout(() => {
            setLoading(false); // Data loaded, set loading to false after 3 seconds
          }, 3000);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSlangs();
  }, [page]);

  // Track scroll position to implement infinite scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (hasMore) {
          setPage((prevPage) => prevPage + 1); // Load more data when user reaches the bottom
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center px-10 py-10">
      {loading && slangs.length === 0 ? ( // Show skeleton loader while loading
        <Suspense fallback={<SkeletonLoader />}>
          {[...Array(3)].map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </Suspense>
      ) : (
        slangs.map((item, index) => <Card key={index} item={item} />)
      )}
      {loading && slangs.length > 0 && <SkeletonLoader />}{" "}
      {/* Show loader if more data is being loaded */}
    </div>
  );
};

export default Cards;
