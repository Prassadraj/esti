import React from "react";
import { motion } from "framer-motion";
function Section3() {
  return (
    <div className="h-[200vh]">
      <Heading />
      <Section1 />
    </div>
  );
}

export default Section3;

const Heading = () => {
  return (
    <div className="flex h-[5rem] tablet:h-[8rem] laptop:h-[10rem] justify-center flex-col items-center">
      <p className="text-sm">Women</p>
      <p className="text-2xl font-semibold">Flight Mode</p>
    </div>
  );
};

const Section1 = () => {
  return <motion.div>dsdsd</motion.div>;
};
