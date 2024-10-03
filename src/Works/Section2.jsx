"use client"; // This marks the file as a client component

import Tilt from "react-parallax-tilt";
import Image from "next/image";
import React from "react";
const data = [
  {
    img: "/w1.webp",
    title: `Bags`,
  },
  {
    img: "/w2.webp",
    title: `Leather Goods`,
  },
  {
    img: "/w3.webp",
    title: `Shoes`,
  },
  {
    img: "/w4.webp",
    title: ` Small Leather Goods`,
  },
  {
    img: "/w4.webp",
    title: `Bags`,
  },
  {
    img: "/w3.webp",
    title: `Belts`,
  },
  {
    img: "/w2.webp",
    title: "Perfumes",
  },
  {
    img: "/w1.webp",
    title: `Fashion Jewellery`,
  },
];
function Section2() {
  return (
    <div className="h-fit w-full laptop:px-16 px-2">
      <div className="flex justify-center items-center w-full tablet:h-[10rem] h-[6rem]">
        <p className="tablet:text-4xl text-sm font-medium text-center ">
          {` Explore a Selection of the Maison's Creations`}
        </p>
      </div>
      <div className="grid grid-cols-2 tablet:grid-cols-4 tablet:gap-4 gap-3 laptop:gap-10">
        {data.map((item, i) => (
          <div key={i} className="flex items-center flex-col mb-5">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.05}
              transitionSpeed={500}
            >
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out duration-700"
                  width={200}
                  height={200}
                  alt={item.title} // Added alt prop
                />
              </div>
            </Tilt>
            <div className="tablet:py-5 py-2">
              <p className="text-xs max-w-md tablet:text-sm text-center laptop:text-base">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
