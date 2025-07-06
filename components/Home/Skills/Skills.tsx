"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillsCard";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { id: 1, title: "C", image: "/images/clanguage.svg", percent: "85%" },
      { id: 2, title: "C++", image: "/images/c-.png", percent: "80%" },
      { id: 3, title: "HTML5", image: "/images/html.svg", percent: "90%" },
      { id: 4, title: "CSS3", image: "/images/css.svg", percent: "85%" },
      { id: 5, title: "JavaScript", image: "/images/js.svg", percent: "90%" },
      { id: 6, title: "TypeScript", image: "/images/ts.svg", percent: "75%" },
      { id: 7, title: "SQL", image: "/images/my-sql.svg", percent: "80%" },
    ],
  },
  {
    category: "Libraries/Frameworks",
    skills: [
      { id: 8, title: "React.js", image: "/images/react.svg", percent: "90%" },
      { id: 9, title: "Next.js", image: "/images/next.svg", percent: "85%" },
      {
        id: 10,
        title: "Redux Toolkit",
        image: "/images/redux.svg",
        percent: "80%",
      },
      { id: 11, title: "Axios", image: "/images/axios.svg", percent: "75%" },
      {
        id: 12,
        title: "Tailwind CSS",
        image: "/images/tailwindcss.svg",
        percent: "85%",
      },
      {
        id: 13,
        title: "Bootstrap5",
        image: "/images/bootstrap.svg",
        percent: "80%",
      },
      {
        id: 14,
        title: "Framer Motion",
        image: "/images/framermotion.svg",
        percent: "70%",
      },
      {
        id: 15,
        title: "Material UI",
        image: "/images/materialui.svg",
        percent: "75%",
      },
      { id: 16, title: "PWA", image: "/images/pwa.svg", percent: "70%" },
    ],
  },
  {
    category: "Backend/Databases",
    skills: [
      { id: 17, title: "Node.js", image: "/images/node.svg", percent: "80%" },
      {
        id: 18,
        title: "Express.js",
        image: "/images/express.svg",
        percent: "80%",
      },
      { id: 19, title: "MongoDB", image: "/images/mongo.svg", percent: "85%" },
      { id: 20, title: "MySQL", image: "/images/my-sql.svg", percent: "75%" },
      { id: 21, title: "JWT", image: "/images/jwt.svg", percent: "70%" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { id: 22, title: "Figma", image: "/images/figma.svg", percent: "70%" },
      { id: 23, title: "Git", image: "/images/git.svg", percent: "85%" },
      { id: 24, title: "GitHub", image: "/images/github.svg", percent: "85%" },
      {
        id: 25,
        title: "Redux DevTools",
        image: "/images/redux.svg",
        percent: "75%",
      },
      { id: 26, title: "Vercel", image: "/images/vercel.svg", percent: "70%" },
      { id: 27, title: "VS Code", image: "/images/vscode.svg", percent: "90%" },
      {
        id: 28,
        title: "Postman",
        image: "/images/postman.svg",
        percent: "80%",
      },
      {
        id: 29,
        title: "ThunderClient",
        image: "/images/thunderclient.png",
        percent: "75%",
      },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    skillsData[0].category
  );

  return (
    <div className="pt-24 pb-32 bg-gradient-to-b from-[#0a0412] via-[#1a0d2e] to-[#2a1b4a] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles with 3D Effect */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 shadow-lg"
            style={{
              width: Math.random() * 10 + 4 + "px",
              height: Math.random() * 10 + 4 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              transform: `translateZ(${Math.random() * 50}px)`,
            }}
            animate={{
              y: [0, Math.random() * 120 - 60],
              x: [0, Math.random() * 80 - 40],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}

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
        {/* Enhanced Section Header - Same as Services */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-10 mt-[-50px]">
            My Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        <div className="w-[90%] mx-auto">
          {/* Category Tabs */}
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            {skillsData.map((category) => (
              <motion.button
                key={category.category}
                className={`px-4 py-2 rounded-lg text-white font-medium text-sm sm:text-base
                  ${
                    selectedCategory === category.category
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                      : "bg-gray-700 hover:bg-gray-600"
                  } 
                  transition-all duration-300`}
                onClick={() => setSelectedCategory(category.category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.category}
              </motion.button>
            ))}
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
            {skillsData
              .find((cat) => cat.category === selectedCategory)
              ?.skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
