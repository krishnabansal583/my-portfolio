"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaChevronRight,
  FaBook,
  FaStar,
  FaAward,
  FaUserGraduate,
  FaMedal,
  FaCalculator,
} from "react-icons/fa";

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  location: string;
  grade: string;
  gradeType: string;
  achievements: string[];
  subjects: string[];
  activities: string[];
  color: string;
  icon: React.ReactNode;
  type: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: "Gayatri Public School",
    degree: "High School",
    duration: "2008 - 2021",
    location: "Agra, Uttar Pradesh, India",
    grade: "90%",
    gradeType: "Percentage",
    achievements: [
      "Secured 90% in High School examinations",
      "Strong foundation in Mathematics and Science",
      "Active participation in coding competitions",
      "Developed early interest in Computer Science",
    ],
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
      "English",
    ],
    activities: ["Sports", "Science Exhibition", "Mathematics Olympiad"],
    color: "from-green-600 to-emerald-600",
    icon: <FaSchool className="w-6 h-6" />,
    type: "High School",
  },
  {
    id: 2,
    institution: "Boston Public School",
    degree: "Intermediate (12th Grade)",
    duration: "March 2021 - April 2022",
    location: "Agra, Uttar Pradesh, India",
    grade: "80%",
    gradeType: "Percentage",
    achievements: [
      "Secured 80% in Intermediate examinations",
      "Qualified for JEE Advanced with rank 27,525",
      "Completed intermediate education successfully",
      "Prepared extensively for engineering entrance exams",
      "Focused on PCM (Physics, Chemistry, Mathematics)",
    ],
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "English",
      "Physical Education",
    ],
    activities: ["JEE Preparation", "Mock Tests", "Study Groups"],
    color: "from-blue-600 to-cyan-600",
    icon: <FaCalculator className="w-6 h-6" />,
    type: "Intermediate",
  },
  {
    id: 3,
    institution: "Abdul Kalam Technical University",
    degree: "B.Tech",
    field: "Computer Science and Information Technology (FW)",
    duration: "November 2022 - June 2026",
    location: "Uttar Pradesh, India",
    grade: "7.4 / 10.0",
    gradeType: "SGPA",
    achievements: [
      "Maintaining consistent academic performance with 7.4 SGPA",
      "Specializing in Full Stack Web Development",
      "Focused on DSA with consistency on Leetcode",
      "Hands-on experience with modern technologies",
      "Working on real-world projects and internships",
    ],
    subjects: [
      "Data Structures & Algorithms",
      "Web Technologies",
      "Database Management Systems",
      "Software Engineering",
      "Machine Learning",
      "Computer Networks",
      "Operating Systems",
      "Object-Oriented Programming",
    ],
    activities: [
      "Big Data Technical Society",
      "Badminton Sports Mentor",
      "Hackathons",
      "Technical Workshops",
      "Project Development",
    ],
    color: "from-purple-600 to-pink-600",
    icon: <FaGraduationCap className="w-6 h-6" />,
    type: "Bachelor's Degree",
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
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Education = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const stats = {
    institutions: educationData.length,
    gpa: "7.4/10",
    jeeRank: "27,525",
  };

  return (
    <div className="min-h-screen pt-24 pb-32 bg-gradient-to-b from-[#0a0412] via-[#1a0d2e] to-[#2a1b4a] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Gradient Blobs */}
        <motion.div
          className="absolute -top-40 -left-40 w-112 h-112 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-128 h-128 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
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
            My Academic{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 to-purple-500/50 rounded-full hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                variants={cardVariants}
                className={`flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
                onHoverStart={() => setHoveredId(education.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg border-4 border-slate-800 flex items-center justify-center"
                    animate={{
                      scale: hoveredId === education.id ? 1.4 : 1,
                      boxShadow:
                        hoveredId === education.id
                          ? "0 0 25px rgba(59, 130, 246, 0.6)"
                          : "0 0 0px rgba(59, 130, 246, 0)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white text-xs">{education.icon}</div>
                  </motion.div>
                </div>

                {/* Education Card */}
                <motion.div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                  animate={{
                    x:
                      hoveredId === education.id
                        ? index % 2 === 0
                          ? -15
                          : 15
                        : 0,
                    scale: hoveredId === education.id ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-600/70 rounded-2xl p-8 shadow-2xl border border-slate-600/30 backdrop-blur-sm relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${education.color} opacity-5 rounded-2xl`}
                    />

                    {/* Header */}
                    <div className="relative z-10 mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-4 rounded-full bg-gradient-to-r ${education.color} shadow-lg`}
                          >
                            {education.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {education.institution}
                            </h3>
                            <p className="text-blue-400 font-semibold text-lg">
                              {education.degree}
                            </p>
                            {education.field && (
                              <p className="text-purple-400 text-sm mt-1">
                                {education.field}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-green-400 mb-2">
                            <FaCalendarAlt className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {education.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-orange-400 mb-2">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span className="text-sm">
                              {education.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-yellow-400">
                            <FaMedal className="w-4 h-4" />
                            <span className="text-sm font-bold">
                              {education.grade} {education.gradeType}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-indigo-400 text-sm font-medium bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/30">
                          {education.type}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="relative z-10 mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FaAward className="w-4 h-4 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {education.achievements.map((achievement, i) => (
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

                    {/* Subjects */}
                    <div className="relative z-10 mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FaBook className="w-4 h-4 text-blue-400" />
                        Core Subjects
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.subjects.map((subject, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="relative z-10">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FaUserGraduate className="w-4 h-4 text-green-400" />
                        Activities & Involvement
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.activities.map((activity, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-green-600/20 to-teal-600/20 text-green-300 text-xs rounded-full border border-green-500/30"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                          >
                            {activity}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl"
                      style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                      animate={{
                        borderColor:
                          hoveredId === education.id
                            ? "rgba(59, 130, 246, 0.4)"
                            : "rgba(0, 0, 0, 0)",
                        boxShadow:
                          hoveredId === education.id
                            ? "0 0 40px rgba(59, 130, 246, 0.2)"
                            : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                  } hidden md:block`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
