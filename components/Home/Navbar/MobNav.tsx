"use client";
import { navLinks } from "@/constants/contants";
import Link from "next/link";
import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showNav]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showNav) {
        closeNav();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showNav, closeNav]);

  const handleSmoothScroll = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
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

      setTimeout(() => {
        closeNav();
      }, 200);
    }
  };

  return (
    <div
      className={`lg:hidden ${
        showNav ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[1001] bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeNav}
        aria-hidden="true"
      />

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed top-0 left-0 z-[1002] h-full w-[85%] max-w-sm transform transition-all duration-300 ease-in-out ${navOpen} bg-gradient-to-br from-[#0a0a0a] via-[#1a0d2e] to-[#0f172a] shadow-2xl`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={closeNav}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Close navigation"
          >
            <CgClose className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-2">
          {navLinks.map((navlink, index) => (
            <Link
              key={navlink.id}
              href={navlink.url}
              scroll={false}
              onClick={(e) => handleSmoothScroll(e, navlink.url)}
              className="group relative flex items-center px-4 py-4 text-lg font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 border-l-4 border-transparent hover:border-purple-400"
              style={{
                animationDelay: showNav ? `${index * 50}ms` : "0ms",
              }}
            >
              <span className="relative">
                {navlink.label}
                <span className="absolute bottom-0 left-0 w-0 είναι-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-black/20 to-transparent">
          <button
            className="w-full px-6 py-4 text-white font-semibold text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 rounded-lg shadow-lg hover:shadow-purple-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            type="button"
          >
            Get In Touch
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-6 w-20 h-20 bg-purple-600/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-6 w-16 h-16 bg-blue-600/10 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default MobNav;
