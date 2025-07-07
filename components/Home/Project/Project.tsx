"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaCode, FaEye } from "react-icons/fa";
import type { Project } from "@/Data/data";
import { projectData } from "@/Data/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Project = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const handleCardClick = (projectId: number) => {
    setFlippedId(flippedId === projectId ? null : projectId);
  };

  const handleViewDetailsClick = (e: React.MouseEvent, projectId: number) => {
    e.stopPropagation();
    setFlippedId(flippedId === projectId ? null : projectId);
  };

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
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
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
          <h2 className="text-5xl font-bold text-white mb-4 mt-[-50px]">
            My Creative{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectData?.length > 0 ? (
            projectData.map((project: Project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="relative h-96 group cursor-pointer"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => handleCardClick(project.id)}
                style={{ perspective: 1000 }}
              >
                {/* Card Container */}
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    rotateY:
                      hoveredId === project.id || flippedId === project.id
                        ? 180
                        : 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Face */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-600/70 rounded-xl shadow-2xl border border-slate-600/30 overflow-hidden backdrop-blur-sm"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative overflow-hidden rounded-t-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {project.description.slice(0, 100)}...
                      </p>
                      <button
                        onClick={(e) => handleViewDetailsClick(e, project.id)}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        <FaCode className="w-4 h-4" />
                        <span className="text-xs font-medium">
                          View Details
                        </span>
                      </button>
                    </div>

                    {/* Subtle Border Animation */}
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-500/30 rounded-xl"
                      animate={{
                        scale: [1, 1.01, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-slate-700/90 via-slate-600/80 to-slate-500/70 rounded-xl shadow-2xl border border-slate-500/30 flex flex-col p-6 backdrop-blur-sm"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-white drop-shadow-md">
                        {project.title}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFlippedId(null);
                        }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="flex-grow space-y-3">
                      <div>
                        <p className="text-gray-200 text-sm leading-relaxed overflow-auto max-h-24">
                          {project.description.slice(0, 180)}...
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <span className="text-blue-400 font-semibold text-xs">
                            Technologies:
                          </span>
                          <p className="text-gray-200 text-xs">
                            {project.technologies}
                          </p>
                        </div>
                        <div>
                          <span className="text-purple-400 font-semibold text-xs">
                            Duration:
                          </span>
                          <p className="text-gray-200 text-xs">
                            {project.duration}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-white text-sm bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>GitHub</span>
                      </Link>
                      <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-4 py-2 rounded-lg">
                        <FaEye className="w-4 h-4" />
                        <span>Source Only</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3D Shadow Lift Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl shadow-2xl"
                  animate={{
                    scale:
                      hoveredId === project.id || flippedId === project.id
                        ? 1.02
                        : 1,
                    y:
                      hoveredId === project.id || flippedId === project.id
                        ? -8
                        : 0,
                    rotateX:
                      hoveredId === project.id || flippedId === project.id
                        ? 5
                        : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    zIndex: -1,
                    background: "rgba(0, 0, 0, 0.4)",
                    filter: "blur(8px)",
                  }}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center text-gray-300 col-span-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-600/30">
                <FaCode className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <p className="text-lg font-medium">
                  No projects available at the moment.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Check back soon for updates!
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;