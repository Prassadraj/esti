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
      className="sticky top-0 h-screen pb-[10vh]"
    >
      <Image
        src={
          "https://images.unsplash.com/photo-1499348338237-577efb282849?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="img"
        placeholder="blur"
        blurDataURL="cxc"
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
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_bags/Women_Bags_WW_HP_Category_Push_V20240726_DII.jpg?wid=490",
      title: "Womens Bag's",
    },
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_slg/Women_SLG_WW_HP_Category_Push_V20240726_DII.jpg?wid=490",
      title: "  Women's Small Leather Goods",
    },
    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_shoes/Men_Shoes_Sneakers_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title: " Men's Shoes",
    },

    {
      img: "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_fashionjewelry/Women_FashionJewelry_Category_Push_20240425_DII.jpg?wid=490",
      title: "Women's Fashion Jewellery",
    },
  ];
  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div className="h-screen w-full grid grid-cols-2 tablet:grid-cols-4 bg-white place-items-center">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center mt-10"
          >
            <Tilt
              tiltMaxAngleX={10} // Customize tilt angles
              tiltMaxAngleY={10}
              glareEnable={true} // Enable glare effect if needed
              glareMaxOpacity={0.45}
              scale={1.05} // Slightly scale on hover
              transitionSpeed={500} // Smooth transition
            >
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  className="object-cover h-full w-full hover:scale-105 transition-all ease-in-out duration-700"
                  width={200}
                  height={200}
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
    </motion.div>
  );
};
