"use client"; // Mark this file as a client component

import React from "react";

import { Jacques_Francois_Shadow } from "next/font/google";

const jacquesFrancoisShadow = Jacques_Francois_Shadow({
  weight: "400", // Specify the font weight
  subsets: ["latin"], // Specify the font subsets
});

function Section1() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/14327386/pexels-photo-14327386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-end pb-20 justify-center h-full">
        <div className="flex flex-col items-center">
          <p
            //   style={{
            //     background: "linear-gradient(90deg, white, #f4a690, white)",
            //     WebkitBackgroundClip: "text",
            //     backgroundClip: "text",
            //     color: "transparent",
            //     WebkitTextFillColor: "transparent",
            //   }}
            className={`tablet:font-semibold font-medium tablet:text-4xl text-white capitalize `}
          >
            Step into Elegance
          </p>
          <p className="tablet:text-xl text-white text-center text-xs px-2">
            Discover timeless styles and unmatched quality. Your perfect dress
            awaits.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
