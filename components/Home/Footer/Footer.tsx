"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Removed setCurrentYear
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      const navHeight = 80;
      const targetPosition = homeElement.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/krishnabansal583",
      label: "GitHub",
      color: "hover:text-gray-900 hover:bg-white",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/krishnab583/",
      label: "LinkedIn",
      color: "hover:text-white hover:bg-blue-600",
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/krishn2345/",
      label: "LeetCode",
      color: "hover:text-white hover:bg-orange-500",
    },
    {
      icon: Mail,
      href: "mailto:krishnabansal583@gmail.com",
      label: "Email",
      color: "hover:text-white hover:bg-green-600",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navHeight = 80;
        const targetPosition = targetElement.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Krishna Bansal
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Full Stack Developer passionate about creating innovative
                digital solutions with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="flex flex-wrap gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm hover:scale-105 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Let's Connect
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-300 hover:scale-110 transform ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 transition-all duration-300" />

                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                      {social.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; {currentYear} Krishna Bansal. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-2">
                <span>•</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>in India</span>
              </div>
            </div>

            <div className="text-xs text-gray-500">
              Crafted with passion and precision
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default Footer;