"use client"; // This marks the file as a client component

import Tilt from "react-parallax-tilt";
import Image from "next/image";
import React, { useState } from "react";
const data = [
  {
    video: "/ad/ad7.mp4",
    // title: `Bags`,
  },
  {
    video: "/ad/ad8.mp4",
    // title: `Leather Goods`,
  },
  {
    video: "/ad/ad3.mp4",
    // title: `Shoes`,
  },
  {
    video: "/ad/ad9.mp4",
    // title: ` Small Leather Goods`,
  },
];
const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-300 w-full h-full"></div>
);
function Extra() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="h-fit w-full laptop:px-16 px-2">
      <div className="flex justify-center items-center w-full tablet:h-[10rem] h-[6rem]">
        <p className="tablet:text-4xl text-sm font-medium text-center ">
          {`Sharp Looks for Modern Men`}
        </p>
      </div>
      <div className="grid grid-cols-2 tablet:grid-cols-4 tablet:gap-4 gap-1 laptop:gap-10">
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
              <div
                className="overflow-hidden laptop:h-[350px] laptop:w-[250px] tablet:h-[260px] tablet:w-[180px] 
              w-[180px] h-[40vh] shadow-md shadow-gray-600  rounded-md"
              >
                {isLoading && <SkeletonLoader />}
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    priority
                    className="object-cover  rounded-md h-full w-full hover:scale-100 transition-all ease-in-out duration-700"
                  ></video>
                ) : (
                  <Image
                    src={item.img}
                    className="object-cover rounded-md h-full w-full hover:scale-100 transition-all ease-in-out duration-700"
                    fill
                    priority
                    quality={100}
                    onLoadingComplete={() => setIsLoading(false)}
                    alt={item.title} // Added alt prop
                  />
                )}
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

export default Extra;
// fzyd iqiv rkvn clsi