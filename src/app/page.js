"use client";
import Nav from "@/Works/Nav";
import Section1 from "@/Works/Section1";
import Section2 from "@/Works/Section2";
import Section3 from "@/Works/Section3";
import { useEffect } from "react";
import Lenis from "lenis";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <div className="">
        <Nav />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
