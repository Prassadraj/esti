import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
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
    { name: "Business Opportunities", path: "/business" },
    { name: "Excess Inventory", path: "/inventory" },
    { name: "Find a Store", path: "/store" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`h-fit bg-gray-300 w-full py-10 gap-4 tablet:gap-5 flex flex-col items-center ${font.className}`}
    >
      <div className="flex gap-3">
        <Link target="_blank" href="https://www.instagram.com/gabinovida/">
          <FaInstagram className="laptop:text-4xl text-2xl text-red-700" />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/@gabinovidagv/shorts"
        >
          <FaYoutube className="laptop:text-4xl text-2xl text-red-600" />
        </Link>
        <Link href="#">
          <FaFacebook className="laptop:text-4xl text-2xl text-blue-700" />
        </Link>
        <Link target="_blank" href="https://wa.me/7358033233">
          <FaWhatsapp className="laptop:text-4xl text-2xl text-green-600" />
        </Link>
      </div>
      <div className="h-[1px] w-[80%] bg-black"></div>
      <div className="tablet:flex tablet:gap-10 grid-cols-3 grid gap-1 px-2 text-xs tablet:text-lg font-medium">
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
      <a
        className=""
        href="https://www.linkedin.com/in/prassad-raj-54805123a/"
        target="_blank"
      >
        <p className="text-gray-300">Prassad Raj R</p>
      </a>
    </div>
  );
}

export default Footer;
