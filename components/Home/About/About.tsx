"use client";
import { aboutInfo, BaseInfo } from "@/Data/data";
import React from "react";
import {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaDatabase as FaMongoDB,
} from "react-icons/fa";
import {
  HiLightBulb,
  HiCommandLine,
  HiCog,
  HiChartBar,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const About = () => {
  const techIcons = [
    { icon: FaReact, name: "React", color: "text-blue-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express", color: "text-gray-300" },
    { icon: FaMongoDB, name: "MongoDB", color: "text-green-400" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-800/20",
      borderColor: "rgba(59, 130, 246, 0.3)",
      borderColorHover: "rgba(59, 130, 246, 0.5)",
      description:
        "Building responsive interfaces with React, Next.js, and modern CSS frameworks",
    },
    {
      title: "Backend Development",
      icon: FaServer,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-800/20",
      borderColor: "rgba(249, 115, 22, 0.3)",
      borderColorHover: "rgba(249, 115, 22, 0.5)",
      description:
        "Developing APIs and server logic with Node.js, Express, and MongoDB",
    },
    {
      title: "Full Stack Development",
      icon: FaLayerGroup,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-800/20",
      borderColor: "rgba(16, 185, 129, 0.3)",
      borderColorHover: "rgba(16, 185, 129, 0.5)",
      description: "End-to-end web application development with MERN stack",
    },
    {
      title: "Database Management",
      icon: FaDatabase,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-800/20",
      borderColor: "rgba(168, 85, 247, 0.3)",
      borderColorHover: "rgba(168, 85, 247, 0.5)",
      description: "Designing and optimizing MongoDB and MySQL databases",
    },
  ];

  const personalityTraits = [
    {
      icon: HiLightBulb,
      trait: "Problem Solver",
      description: "Developed solutions improving diagnostic accuracy by 15%",
    },
    {
      icon: HiCommandLine,
      trait: "Technical Specialist",
      description: "Proficient in MERN stack and modern web technologies",
    },
    {
      icon: HiCog,
      trait: "Detail Oriented",
      description: "Built systems with 30% performance improvements",
    },
    {
      icon: HiChartBar,
      trait: "Results Driven",
      description: "Increased operational efficiency by 25% in projects",
    },
  ];

  return (
    <div className="pt-24 pb-32 bg-gradient-to-b from-[#0a0412] via-[#1a0d2e] to-[#2a1b4a] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Gradient Blobs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-112 h-112 bg-blue-600/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-10 mt-[-50px]">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About Info */}
            <div className="space-y-8">
              {/* Main Title */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 leading-tight">
                  {aboutInfo.title}
                </h1>

                {/* Quote */}
                <motion.div
                  className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <HiOutlineSparkles className="absolute -top-3 -left-3 w-8 h-8 text-blue-400 bg-[#0a0412] p-1 rounded-full" />
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {aboutInfo.description}
                  </p>
                </motion.div>
              </motion.div>

              {/* Skills Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white">
                  Technical Expertise
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillCategories.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ borderColor: skill.borderColor }}
                      animate={{ borderColor: skill.borderColor }}
                      whileHover={{ y: -5, borderColor: skill.borderColorHover }}
                      className={`group relative p-4 ${skill.bgColor} backdrop-blur-sm rounded-xl border`}
                      style={{ borderColor: skill.borderColor }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}
                        >
                          <skill.icon className="text-white w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm">
                            {skill.title}
                          </h4>
                          <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500" />
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Personality and Tech */}
            <div className="space-y-8">
              {/* Personality Traits */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white">
                  Professional Strengths
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personalityTraits.map((trait, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <trait.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-base">
                          {trait.trait}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {trait.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  My Tech Stack
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center space-y-2"
                    >
                      <div
                        className={`w-14 h-14 ${tech.color} flex items-center justify-center text-3xl`}
                      >
                        <tech.icon />
                      </div>
                      <span className="text-sm text-gray-300">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;