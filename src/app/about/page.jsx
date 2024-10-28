"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { delay, motion } from "framer-motion";
import { Poppins, Raleway } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);
const font = Raleway({
  weight: ["400", "100", "200", "900", "500", "600", "800", "700"], // Choose the weights you need
  subsets: ["latin"], // Specify the subsets
});
function About() {
  useEffect(() => {
    gsap.set("header p", { y: 200, opacity: 0, skewY: "60deg" });

    gsap.to("header p", {
      scrollTrigger: { trigger: "header" },
      y: 0,
      skewY: "0deg",
      opacity: 1,
      duration: 1,
      ease: "power3.out",

      stagger: 0.1,
    });
  }, []);
  return (
    <div className="tablet:h-screen h-fit py-5 tablet:px-10 px-2 ">
      <header
        className="font-poppins flex letters overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {"Our Story".split("").map((letter, i) => (
          <p
            className={`text-[7vw] tablet:text-[25px] font-normal`}
            style={{
              letterSpacing: "0.05em",
              margin: letter === " " ? "0.1em" : "0",
            }} // Adds spacing between words
            key={i}
          >
            {letter}
          </p>
        ))}
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0
        animate={{ opacity: 1, y: 0 }} // Animate to opacity 1
        transition={{ duration: 1, delay: 1 }}
        className={`flex flex-col gap-5 tablet:px-1 px-3 font-normal ${font.className}`}
      >
        <p>
          {" "}
          {`Estilo Fashions, one of India's best fashion destinations, is based in
          Chennai. The company is led by Mr. Pandian, who has a strong
          background in textiles and has been a part of the fashion industry for
          over 30 years.`}
        </p>
        <p>
          {`Starting with fabrics, Mr. Pandian envisioned making the latest
          fashion accessible to everyone at affordable prices, which led to the
          opening of the first retail store on Nelson Manickam Road in 2005.`}
        </p>
        <p>
          {`The store caters to all types of consumers, offering a wide range of
          garments for newborns, men, women, and kids, featuring the latest
          branded fashion at affordable prices. Following the success of the
          first store, Estilo Fashions expanded to two more prime shopping
          locations in Chennai: Anna Nagar and M.C. Road.`}
        </p>
        <p>
          {`Today, Estilo Fashions operates three branches along with a wholesale
          division, and its corporate office is situated in Royapuram.`}
        </p>
        <p>
          {`With the same Vision of giving the Best dress online shopping at an
          affordable price, is on the growth path planning 10 stores in Chennai
          at major shopping locations.`}
        </p>
        <p>
          {" "}
          {`With over 500,000 satisfied customers, the company is committed to
          providing a continuously updated collection of fashionable apparel,
          supported by the latest software, security systems, and a dedicated
          team. Staying true to the vision of offering the best fashion at
          affordable prices, Estilo Fashions is on a growth path, planning to
          open more stores in major shopping areas across Chennai.`}
        </p>
      </motion.div>
    </div>
  );
}

export default About;
