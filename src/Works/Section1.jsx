"use client"; // Mark this file as a client component

import React, { useState, useEffect } from "react";
import { Jacques_Francois_Shadow } from "next/font/google";

// Import the font
const jacquesFrancoisShadow = Jacques_Francois_Shadow({
  weight: "400", // Specify the font weight
  subsets: ["latin"], // Specify the font subsets
});

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="h-screen flex justify-center items-center bg-gray-300 animate-pulse">
    <div className="w-40 h-8 bg-gray-400 rounded-md"></div>
  </div>
);

function Section1() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = "/coverpic.jpeg";

    image.onload = () => {
      setIsLoading(false); // Hide skeleton loader when the image is loaded
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <SkeletonLoader /> // Show the skeleton loader while the image is loading
      ) : (
        <div
          className="h-screen"
          style={{
            backgroundImage: "url('/coverpic.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-end tablet:pb-20 pb-32 justify-center h-full">
            <div className="flex flex-col items-center">
              <p
                className={`tablet:font-semibold font-medium tablet:text-4xl text-white capitalize`}
              >
                Step into Elegance
              </p>
              <p className="tablet:text-xl text-white text-center text-xs px-2">
                Discover timeless styles and unmatched quality. Your perfect
                dress awaits.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section1;
