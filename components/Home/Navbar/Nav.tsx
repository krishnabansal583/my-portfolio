"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/contants";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();
    const targetId = url.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navHeight =
        window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 80 : 100;
      const targetPosition = targetElement.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[12vh] md:h-[12vh] sm:h-[10vh] h-[8vh] z-[1000] w-full transition-all duration-300 ${
        navBg
          ? "bg-[#240b39]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO - Left */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logoo.png"
            alt="LOGO"
            width={120}
            height={120}
            className="ml-[0.5rem] sm:ml-0 w-auto h-[45px] sm:h-[50px] md:h-[55px] lg:h-[60px]"
          />
        </div>

        {/* Nav Links - Center */}
        <div className="hidden lg:flex items-center justify-center flex-grow">
          <div className="flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link
                key={navlink.id}
                href={navlink.url}
                scroll={false}
                onClick={(e) => handleSmoothScroll(e as any, navlink.url)}
                className="nav__link relative text-white transition-colors duration-200 hover:text-purple-400 cursor-pointer group"
              >
                {navlink.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Button and Mobile Menu - Right */}
        <div className="flex items-center flex-shrink-0 ml-auto space-x-4">
          <button
            className="hidden lg:block px-4 py-2 sm:px-6 sm:py-2.5 text-white font-semibold text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 rounded-lg shadow-lg hover:shadow-purple-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            onClick={(e) => handleSmoothScroll(e as any, "#contact")}
            type="button"
          >
            Contact me
          </button>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={openNav}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 group"
            aria-label="Open mobile menu"
          >
            <HiBars3BottomRight className="w-7 h-7 text-white group-hover:text-purple-400 transition-colors duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
