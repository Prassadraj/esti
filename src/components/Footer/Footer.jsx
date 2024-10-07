import { Raleway } from "next/font/google";
import Link from "next/link";
import React from "react";
const font = Raleway({
  weight: ["400", "100", "200", "900", "500", "600", "800", "700"], // Choose the weights you need
  subsets: ["latin"], // Specify the subsets
});
function Footer() {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Excess Inventory", path: "/inventory" },
    { name: "Find a Store", path: "/store" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div
      className={`h-fit bg-gray-300 w-full py-10 gap-4  mt-10 tablet:gap-5 flex flex-col items-center ${font.className}`}
    >
      <div className="laptop:text-2xl">
        {" "}
        <Link href="#">Follow us on Instagram</Link>
      </div>
      <div className="h-[1px] w-[80%] bg-black"></div>
      <div className="flex tablet:gap-10 gap-4 text-xs tablet:text-lg font-medium">
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path}>
            <p className="hover:scale-105 hover:text-orange-900 cursor-pointer transition-all duration-500">
              {link.name}
            </p>
          </Link>
        ))}
      </div>
      <div>
        <p className="text-center">
          Estilo Fashions © 2024 | All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
