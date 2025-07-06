"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, percent, title } = skill;

  return (
    <motion.div
      className="
        p-6 bg-gray-800 rounded-xl 
        hover:bg-gradient-to-br hover:from-blue-900 hover:to-indigo-800 
        transition-all duration-300 
        cursor-pointer text-center 
        shadow-md hover:shadow-xl
      "
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="mx-auto object-contain"
      />
      <h1 className="text-lg font-semibold text-white mt-4">{title}</h1>
      <div className="mt-4">
        <div className="bg-gray-900 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full"
            style={{ width: percent }}
            initial={{ width: 0 }}
            whileInView={{ width: percent }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
        <p className="text-sm text-gray-300 mt-2">{percent} Proficiency</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
