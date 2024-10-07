"use client";
import { Raleway as RalewayFont } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Raleway = RalewayFont({
  weight: ["400", "500", "600", "700"], // Remove extremely light and heavy weights
  subsets: ["latin"],
});

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Excess Inventory", path: "/inventory" },
  { name: "Find a Store", path: "/store" },
  { name: "Contact", path: "/contact" },
];

function Nav() {
  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-between px-2 tablet:px-10 h-[3rem] laptop:h-[4rem] tablet:h-[4rem] bg-white fixed border-b-2 top-0 left-0 z-10">
      <div>
        <Link href="/">
          <Image
            src="/estilo.png"
            alt="Logo"
            className="w-[100px] tablet:w-[150px] object-cover"
            width={600}
            height={150}
            quality={100}
            priority
          />
        </Link>
      </div>
      <div
        className={`hidden tablet:flex justify-center gap-10 tablet:text-lg laptop:text-xl w-full ${Raleway.className}`}
      >
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path}>
            <p
              className={`transition-colors duration-150 hover:text-orange-600 cursor-pointer 
              ${pathname === link.path ? "text-orange-600 font-semibold" : ""}`}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
