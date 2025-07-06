"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaBuilding,
  FaCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRoute,
  FaChevronRight,
  FaUsers,
  FaChartLine,
  FaTools,
  FaClock,
} from "react-icons/fa";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  distance: string;
  achievements: string[];
  technologies: string[];
  metrics: Record<string, string>;
  color: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Big Data (Technical Society)",
    role: "Full Stack Developer",
    duration: "September 2023 - November 2023",
    location: "College Campus",
    type: "Technical Society",
    distance: "College Campus",
    achievements: [
      "Developed a real estate website with 10+ property listings and advanced search features",
      "Integrated interactive maps enhancing user engagement through streamlined navigation",
      "Created a responsive expense tracker app with real-time visual analytics",
      "Utilized React, MongoDB, and NodeJS for full-stack development",
    ],
    technologies: [
      "React.js",
      "MongoDB",
      "Node.js",
      "Material UI",
      "Interactive Maps",
    ],
    metrics: {
      listings: "10+",
      engagement: "Enhanced",
      projects: "2",
      responsive: "100%",
    },
    color: "from-green-600 to-teal-600",
  },
  {
    id: 2,
    company: "Medifinder Healthcare Solutions Pvt Ltd",
    role: "Full Stack Developer Intern",
    duration: "January 2025 - April 2025",
    location: "Remote",
    type: "Internship",
    distance: "Remote",
    achievements: [
      "Integrated a real-time symptom checker into the Medifinder platform, processing 50+ user queries daily",
      "Improved diagnostic accuracy by 15% through data-driven insights and machine learning algorithms",
      "Engineered a dual-interface diagnosis testing module enhancing operational efficiency by 25%",
      "Built and deployed full-stack applications across 2+ projects using MERN stack, reducing load time by 30%",
    ],
    technologies: [
      "MERN Stack",
      "PWA",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js, API Integration",
    ],
    metrics: {
      queries: "50+",
      accuracy: "85%",
      efficiency: "75%",
      loadTime: "30%",
    },
    color: "from-blue-600 to-purple-600",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Experience = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<null | number>(
    null
  );

  return (
    <div className="min-h-screen pt-24 pb-32 bg-gradient-to-b from-[#0a0412] via-[#1a0d2e] to-[#2a1b4a] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 shadow-lg"
            style={{
              width: Math.random() * 10 + 4 + "px",
              height: Math.random() * 10 + 4 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 120 - 60],
              x: [0, Math.random() * 80 - 40],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Journey Path Background */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Dynamic Gradient Blobs */}
        <motion.div
          className="absolute -top-40 -left-40 w-112 h-112 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-128 h-128 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            My Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 to-purple-500/50 rounded-full hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={cardVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
                onHoverStart={() => setHoveredId(experience.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg border-4 border-slate-800"
                    animate={{
                      scale: hoveredId === experience.id ? 1.3 : 1,
                      boxShadow:
                        hoveredId === experience.id
                          ? "0 0 20px rgba(59, 130, 246, 0.6)"
                          : "0 0 0px rgba(59, 130, 246, 0)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Experience Card */}
                <motion.div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                  animate={{
                    x:
                      hoveredId === experience.id
                        ? index % 2 === 0
                          ? -10
                          : 10
                        : 0,
                    scale: hoveredId === experience.id ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-600/70 rounded-2xl p-8 shadow-2xl border border-slate-600/30 backdrop-blur-sm relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-5 rounded-2xl`}
                    />

                    {/* Header */}
                    <div className="relative z-10 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-r ${experience.color} shadow-lg`}
                        >
                          <FaBuilding className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {experience.company}
                          </h3>
                          <p className="text-blue-400 font-semibold text-lg">
                            {experience.role}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-purple-400 mb-1">
                            <FaCalendarAlt className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {experience.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-green-400">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span className="text-sm">
                              {experience.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Distance Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <FaRoute className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400 text-sm font-medium bg-orange-400/10 px-3 py-1 rounded-full">
                          {experience.distance}
                        </span>
                        <span className="text-indigo-400 text-sm font-medium bg-indigo-400/10 px-3 py-1 rounded-full">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="relative z-10 mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FaChartLine className="w-4 h-4 text-blue-400" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3 text-gray-300 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            <FaChevronRight className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="relative z-10 mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FaChartLine className="w-4 h-4 text-green-400" />
                        Impact Metrics
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(experience.metrics).map(
                          ([key, value]) => (
                            <motion.div
                              key={key}
                              className="text-center p-3 bg-slate-700/50 rounded-lg border border-slate-600/30"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="text-lg font-bold text-white mb-1">
                                {value}
                              </div>
                              <div className="text-xs text-gray-400 capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="relative z-10">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FaTools className="w-4 h-4 text-purple-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl"
                      animate={{
                        borderColor:
                          hoveredId === experience.id
                            ? "rgba(59, 130, 246, 0.3)"
                            : "transparent",
                        boxShadow:
                          hoveredId === experience.id
                            ? "0 0 30px rgba(59, 130, 246, 0.2)"
                            : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  } hidden md:block`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey Stats */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Journey Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-gray-300">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1+</div>
              <div className="text-gray-300">Year Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">4+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
