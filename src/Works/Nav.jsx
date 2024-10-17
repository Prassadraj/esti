"use client";
import MenuBtn from "@/components/MenuBtn/MenuBtn";
import { Raleway as RalewayFont } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useContext } from "react";
import { BtnContext } from "@/context/MobileBtn"; // Import your context
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social icons

const Raleway = RalewayFont({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Business Opportunities", path: "/business" },
  { name: "Excess Inventory", path: "/inventory" },
  { name: "Find a Store", path: "/store" },
  { name: "Contact", path: "/contact" },
];

function Nav() {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isToggled, setIsToggled } = useContext(BtnContext); // Access context state

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMobileMenu]);

  return (
    <div className="w-full flex items-center justify-between px-2 tablet:px-10 h-[3rem] bg-white fixed border-b-2 top-0 left-0 z-40">
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
      <div className="block md:hidden w-fit bg-transparent mt-2">
        <button
          aria-label="Toggle Menu"
          onClick={() => {
            setShowMobileMenu((prev) => !prev);
          }}
        >
          <MenuBtn />
        </button>
      </div>

      <div
        className={`hidden tablet:flex justify-center gap-10 tablet:text-xs laptop:text-base font-medium w-full ${Raleway.className}`}
      >
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path}>
            <p
              className={`transition-colors duration-150 hover:text-orange-600 cursor-pointer ${
                pathname === link.path ? "text-orange-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMobileMenu ? "flex" : "hidden"
        } flex-col md:hidden bg-white absolute top-10 left-0 w-full px-4 py-1 shadow-md border-t-2 h-screen font-lato`}
      >
        <div className="h-96 overflow-y-scroll border-b-2 flex flex-col gap-1">
          <Link
            className="text-xl font-semibold py-2"
            href="/"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Home
          </Link>
          <Link
            className="text-xl font-semibold py-2"
            href="/business"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Business Opportunities
          </Link>
          <Link
            className="text-xl font-semibold py-2"
            href="/inventory"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Excess Inventory
          </Link>
          <Link
            className="text-xl font-semibold py-2"
            href="/store"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Find a Store
          </Link>

          <Link
            className="text-xl font-semibold py-2"
            href="/contact"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setIsToggled((e) => !e);
            }}
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-evenly mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
