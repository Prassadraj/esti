import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-300 w-full h-full"></div>
);

function Section4() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div className="h-[10rem] justify-start laptop:justify-center items-center flex flex-col gap-3">
        <p className="text-center text-sm font-medium">Men</p>
        <p className="text-center capitalize text-4xl font-light">LV Fall</p>
      </div>
      <div className="relative h-[200vh]" ref={container}>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </div>
    </>
  );
}

export default Section4;

function Section1({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky tablet:top-16 h-screen pb-[10vh]"
    >
      {/* Video for tablets and larger screens */}
      <video
        autoPlay
        className="w-full h-full object-cover hidden tablet:block"
        muted
        loop
        src="/clothing.mp4"
      ></video>

      {/* Fallback image for mobile devices */}
      <Image
        src="/mobile2.avif"
        className="block tablet:hidden"
        alt="LV Fall Collection"
        placeholder="blur"
        blurDataURL="/fallback-placeholder.png" // Add valid placeholder image
        fill
        loading="lazy" // Lazy load the image
      />
    </motion.div>
  );
}

function Section2({ scrollYProgress }) {
  const data = [
    {
      img: "/men1.jpg",
      title: "Only LV Mini Comfy Scarf",
    },
    {
      img: "/men2.jpg",
      title: "Monogram Short-Sleeved Cotton Crewneck",
    },
    {
      img: "/men3.jpg",
      title: "LV Gradient Bracelet",
    },
    {
      img: "/men4.jpg",
      title: "Multiple Wallet",
    },
  ];

  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [-5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div
        className="grid grid-cols-2 tablet:grid-cols-4 tablet:gap-4 gap-3 bg-white place-items-center
          h-full laptop:gap-10 p-2 tablet:pt-28 tablet:px-5 laptop:px-10"
      >
        {data.map((item, index) => (
          <ImageCard key={index} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

function ImageCard({ item }) {
  const [isLoading, setIsLoading] = useState(true);

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
          {/* Skeleton loader displayed until image loads */}
          {isLoading && <SkeletonLoader />}

          {/* Image with onLoadingComplete callback to hide loader */}
          <Image
            src={item.img}
            className={`object-cover h-full w-full transition-transform ease-in-out duration-500 ${
              isLoading ? "hidden" : "block"
            }`}
            fill
            quality={100}
            priority
            alt={item.title}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </Tilt>
      <div className="tablet:py-3 py-2 h-10">
        <p className="text-xs max-w-md tablet:text-xs laptop:text-sm text-left">
          {item.title}
        </p>
      </div>
    </div>
  );
}
