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
    <div className=" tablet:px-10 px-2 laptop:mb-10">
      <header
        className="font-poppins flex letters overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {"Our Story".split("").map((letter, i) => (
          <p
            className={`text-[10vw] tablet:text-[25px] font-normal`}
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
          India best fashion website Estilo Fashions is based in Chennai, whose
          director Mr. Pandian is a graduate from the textile back ground, and
          fashion industry from past 30 years.
        </p>
        <p>
          Started the business with fabrics and had got an idea of getting into
          retail stores with the Vision of giving the latest fashion to everyone
          at an affordable price. With the Vision launched the first store in
          Nelson manickam road in 2005, catering to all types of consumers from
          newborn, men’s, women’s and kids outfits with new fashion branded
          garments at affordable prices. Looking at the success of the store,
          started two more stores at Anna Nagar and M.C.road, which are also
          prime shopping places in Chennai.
        </p>
        <p>
          Currently Estilo Fashion Cloth Shop has 3 branches and a wholesale
          division, with its corporate office in Royapuram. Catering the entire
          are a group of consumers with above 5 lacs satisfied consumers.
        </p>
        <p>
          They have already kept the company on a forever new dress track, with
          the latest software, security systems with a strong team.
        </p>
        <p>
          With the same Vision of giving the Best dress online shopping at an
          affordable price, is on the growth path planning 10 stores in Chennai
          at major shopping locations.
        </p>
        <p>
          {" "}
          Now, we are launching the e-store of Estilo Fashion for all who are
          craving online dress shopping and the easiest way to buy the best
          apparel at an affordable price.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
