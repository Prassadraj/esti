"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-300 w-full h-full"></div>
);

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div className="h-[10rem] justify-center items-center flex flex-col gap-3">
        <p className="text-center text-sm font-medium">Women</p>
        <p className="text-center capitalize text-4xl font-light">
          Flight mode
        </p>
      </div>
      <main ref={container} className="relative h-[200vh]">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky tablet:top-16 h-screen pb-[10vh]"
    >
      <video
        src="/hm.mp4"
        className="h-full w-full object-cover hidden tablet:block"
        autoPlay
        muted
        loop
      ></video>
      <Image
        src="/mobile1.avif"
        alt="img"
        placeholder="blur"
        blurDataURL="cxc"
        className="block tablet:hidden"
        fill
      />
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [5, 0]);

  const data = [
    {
      img: "/wo1.jpg",
      title: "Travel Stamp Flower T-Shirt",
    },
    {
      img: "/wo2.jpg",
      title: "Neverfull Bandoulière Inside Out BB",
    },
    {
      img: "/wo3.jpg",
      title: "LV Medallion Scarf",
    },
    {
      img: "/wo4.jpg",
      title: "T-Shirt",
    },
  ];

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div className="grid grid-cols-2 tablet:grid-cols-4 tablet:gap-4 gap-3 bg-white place-items-center h-full laptop:gap-10 p-2 tablet:pt-28 tablet:px-5 laptop:px-10">
        {data.map((item, i) => (
          <ProductCard key={i} data={item} />
        ))}
      </div>
    </motion.div>
  );
};

// Product Card Component with Skeleton Loading
const ProductCard = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true); // Track image load state

  return (
    <div className="flex flex-col mb-5">
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.05}
        transitionSpeed={500}
      >
        <div
          className="overflow-hidden laptop:h-[350px] laptop:w-[250px] tablet:h-[250px] tablet:w-[180px]
         h-[40vh] w-[180px] relative"
        >
          {isLoading && <SkeletonLoader />} {/* Show skeleton while loading */}
          <Image
            src={data.img}
            className={`object-cover h-full w-full transition-all ease-in-out duration-700 ${
              isLoading ? "hidden" : "block"
            }`}
            fill
            quality={100}
            priority
            alt="image"
            onLoadingComplete={() => setIsLoading(false)} // Set loading to false once image is loaded
          />
        </div>
      </Tilt>
      <div className="tablet:py-3 py-2 h-10">
        <p className="text-xs text-max-w-md w-full tablet:text-sm text-left">
          {data.title}
        </p>
      </div>
    </div>
  );
};
