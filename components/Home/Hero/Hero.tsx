"use client";
import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
  FaCode,
} from "react-icons/fa";
import {
  HiArrowDown,
  HiSparkles,
  HiEye,
  HiChatBubbleBottomCenterText,
} from "react-icons/hi2";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState("");
  const [downloadStatus, setDownloadStatus] = useState("");

  const roles = [
    BaseInfo.position,
    "Software Developer",
    "Full Stack Developer",
    "Problem Solver",
  ];

  // Handle CV download
  const handleDownloadCV = () => {
    setDownloadStatus("Starting download...");

    // Simulate download process
    setTimeout(() => {
      try {
        const link = document.createElement("a");
        link.href = "/images/Krishna_Bansal_Resume.pdf"; // Path to your PDF in public/images
        link.download = "Krishna_Bansal_Resume.pdf"; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadStatus("Download complete!");
      } catch (error) {
        setDownloadStatus("Download failed. Please try again.");
      }

      // Clear status message after 3 seconds
      setTimeout(() => setDownloadStatus(""), 3000);
    }, 500);
  };

  // Handle contact button click
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get time of day greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Good Morning");
    else if (hour < 17) setTimeOfDay("Good Afternoon");
    else setTimeOfDay("Good Evening");
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing animation
  useEffect(() => {
    setIsVisible(true);
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      const currentRole = roles[textIndex];
      if (currentText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setTextIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isTyping, textIndex, roles]);

  const quickInfo = [
    {
      icon: FaMapMarkerAlt,
      text: "Available Worldwide",
      color: "text-green-400",
    },
    {
      icon: FaCalendarAlt,
      text: "Available for Projects",
      color: "text-blue-400",
    },
    { icon: FaHeart, text: "Passionate Developer", color: "text-pink-400" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/krishnabansal583",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/krishnab583/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/u/krishn2345/",
      label: "LeetCode",
      color: "hover:text-orange-400",
    },
    {
      icon: SiCodingninjas,
      href: "https://www.naukri.com/code360/profile/c6f75857-7fab-4c7a-a677-5f0144d4e9c9",
      label: "Coding Ninjas",
      color: "hover:text-red-400",
    },
    {
      icon: FaEnvelope,
      href: "mailto:krishnabansal583@gmail.com",
      label: "Email",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0d2e] to-[#0f172a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,60,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,60,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* Interactive cursor glow */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex justify-center flex-col w-[90%] lg:w-4/5 h-full min-h-screen mx-auto pt-[15vh] md:pt-[18vh] pb-8 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
          {/* Text Content - Made Larger */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Dynamic Greeting */}
            <div className="flex items-center space-x-3 mb-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                  <HiSparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-gray-300 text-lg">{timeOfDay}, I'm</span>
            </div>

            {/* Name - Moderately Larger */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 leading-tight">
              {BaseInfo.name}
            </h1>

            {/* Animated Role - Moderately Larger */}
            <div className="h-14 md:h-16">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 flex items-center">
                {currentText}
                <span className="ml-2 w-1 h-6 md:h-7 bg-gradient-to-b from-purple-400 to-pink-400 animate-pulse rounded-full" />
              </h2>
            </div>

            {/* Description - Moderately Larger */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg font-light lg:text-sm ">
              {BaseInfo.description}
            </p>

            {/* Quick Info Cards - Mobile horizontal scroll with hidden scrollbar */}
            <div className="flex flex-row md:flex-wrap gap-3 my-6 overflow-x-auto scrollbar-hide pb-2">
              {quickInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-2 border border-white/10 whitespace-nowrap flex-shrink-0"
                >
                  <info.icon className={`w-4 h-4 ${info.color}`} />
                  <span className="text-gray-300 text-sm">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons - Single line, smaller size */}
            <div className="flex flex-row gap-3 mt-8 items-center justify-center sm:justify-start">
              <button
                onClick={handleDownloadCV}
                className="group relative px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <FaDownload className="w-3 h-3" />
                  <span>Download CV</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={handleContactClick}
                className="group relative px-4 py-2 border border-purple-500/50 text-purple-300 font-medium text-sm rounded-lg transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Contact Me</span>
                </span>
              </button>
            </div>

            {/* Download Status */}
            {downloadStatus && (
              <div className="mt-3 text-sm text-purple-300 animate-pulse text-center sm:text-left">
                {downloadStatus}
              </div>
            )}
          </div>

          {/* Image Content with Social Links Below - Moderately Larger */}
          <div className="relative mx-auto max-w-sm lg:max-w-md">
            {/* Profile Image Container */}
            <div className="relative group mb-8">
              {/* Glowing effect - moderate size */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl group-hover:blur-2xl transition-all duration-500" />

              {/* Main image - moderately larger square */}
              <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl border-2 border-white/20 overflow-hidden backdrop-blur-sm w-72 h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px]">
                <Image
                  src={BaseInfo.profilePic}
                  alt={BaseInfo.name}
                  width={340}
                  height={340}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating badges - adjusted for moderate size */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-sm border border-white/30 rounded-lg p-2 shadow-lg">
                <HiEye className="w-4 h-4 text-white" />
              </div>

              <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-blue-500 to-cyan-500 backdrop-blur-sm border border-white/30 rounded-lg p-2 shadow-lg">
                <HiChatBubbleBottomCenterText className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Social Links - Positioned below the image with proper spacing */}
            <div className="flex items-center justify-center space-x-4 mb-8 lg:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:scale-110 transform ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />

                  {/* Tooltip - positioned above */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 border border-gray-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                    {social.label}
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator - Adjusted position for mobile */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="p-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <HiArrowDown className="w-6 h-6 text-purple-400 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Hide scrollbar for mobile horizontal scroll */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Hero;
