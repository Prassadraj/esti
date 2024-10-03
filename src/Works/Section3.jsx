"use client";
import Image from "next/image";
// import Pic1 from "../../public/images/1.jpg";
// import Pic2 from "../../public/images/2.jpeg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import Tilt from "react-parallax-tilt";
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
      className="sticky top-16 h-screen pb-[10vh]"
    >
      {/* <Image
        src={
          "https://images.unsplash.com/photo-1499348338237-577efb282849?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="img"
        placeholder="blur"
        blurDataURL="cxc"
        fill
        className="hidden tablet:block"
      /> */}
      <video
        src="/hm.mp4"
        className="h-full w-full object-cover"
        autoPlay
        muted
      ></video>
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1701069513354-6ec4e6944d42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
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
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const data = [
    {
      img: "https://images.unsplash.com/photo-1677359040296-3d94c8286122?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Travel Stamp Flower T-Shirt ",
      price: 999,
    },
    {
      img: "https://images.unsplash.com/photo-1677443844012-7927843ad989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      title: " Neverfull Bandoulière Inside Out BB",
      price: 999,
    },
    {
      img: "https://images.unsplash.com/photo-1677359040296-3d94c8286122?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "LV Medallion Scarf",
      price: 999,
    },

    {
      img: "https://images.unsplash.com/photo-1677443844012-7927843ad989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      title: "Bella",
      price: 999,
    },
  ];
  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div
        className="grid grid-cols-2 tablet:grid-cols-4 tablet:gap-4 gap-3 bg-white
      h-full laptop:gap-10 p-2 tablet:pt-28 tablet:px-5 laptop:px-10"
      >
        {data.map((data, i) => (
          <div key={i} className="flex  flex-col mb-5">
            <Tilt
              tiltMaxAngleX={10} // Customize tilt angles
              tiltMaxAngleY={10}
              glareEnable={true} // Enable glare effect if needed
              glareMaxOpacity={0.45}
              scale={1.05} // Slightly scale on hover
              transitionSpeed={500} // Smooth transition
            >
              <div
                className="overflow-hidden shadow-md shadow-gray-300
                laptop:h-[350px] border bg-gradient-to-tr
                   from-gray-400
                 via-slate-200 to-slate-200"
              >
                <Image
                  src={data.img}
                  className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out duration-700"
                  width={200}
                  height={200}
                  alt="image"
                />
              </div>
            </Tilt>
            <div className="tablet:py-3 py-2">
              <p
                className="text-xs
              max-w-md tablet:text-sm text-left"
              >
                {data.title}
              </p>
              <p
                className="text-xs
              max-w-md text-left"
              >
                ₹{data.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
