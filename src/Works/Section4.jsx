import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
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
    <>
      <motion.div
        style={{ scale, rotate }}
        className="sticky tablet:top-16 h-screen pb-[10vh]"
      >
        {/* <Image
          src={
            "https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/men/2024/collection/lv-fall-24/M_BC_LVFall_Aug24_08_DI3.jpg?wid=2400"
          }
          alt="img"
          placeholder="blur"
          blurDataURL="cxc"
          fill
          className="hidden tablet:block"
        /> */}
        <video
          autoPlay
          className="w-full h-full object-cover hidden tablet:block"
          muted
          loop
          src="/clothing.mp4"
        ></video>
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1664202526580-444f042c475b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="block tablet:hidden"
          alt="img"
          placeholder="blur"
          blurDataURL="cxc"
          fill
        />
      </motion.div>
    </>
  );
}
function Section2({ scrollYProgress }) {
  const data = [
    {
      img: "/men1.jpg",
      title: "Only LV Mini Comfy Scarf",
      price: 999,
    },
    {
      img: "/men2.jpg",
      title: "Monogram Short-Sleeved Cotton Crewneck",
      price: 999,
    },
    {
      img: "/men3.jpg",
      title: "LV Gradient Bracelet",
      price: 999,
    },

    {
      img: "/men4.jpg",
      title: "Multiple Wallet",
      price: 999,
    },
  ];
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [-5, 0]);
  return (
    <>
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
                  className="shadow-md bg-gradient-to-br
                   from-black/20
                 via-gray-100 to-white overflow-hidden laptop:h-[350px] laptop:w-[250px] tablet:h-[180px] tablet:w-[180px] 
              w-[120px] h-[180px]"
                >
                  <Image
                    src={data.img}
                    className="object-cover h-full w-full hover:scale-100 transition-all ease-in-out duration-700"
                    fill
                    priority
                    quality={100}
                    alt="img"
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
    </>
  );
}
