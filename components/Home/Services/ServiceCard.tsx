"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Service, iconMap } from "@/Data/data";

const colorMap = {
  "from-purple-600/80": {
    gradient: "from-purple-600/80 to-purple-900/50",
    hex: "#9333EA",
  },
  "from-blue-600/80": {
    gradient: "from-blue-600/80 to-blue-900/50",
    hex: "#2563EB",
  },
  "from-green-600/80": {
    gradient: "from-green-600/80 to-green-900/50",
    hex: "#16A34A",
  },
  "from-yellow-600/80": {
    gradient: "from-yellow-600/80 to-yellow-900/50",
    hex: "#CA8A04",
  },
  "from-pink-600/80": {
    gradient: "from-pink-600/80 to-pink-900/50",
    hex: "#DB2777",
  },
  "from-red-600/80": {
    gradient: "from-red-600/80 to-red-900/50",
    hex: "#DC2626",
  },
  "from-indigo-600/80": {
    gradient: "from-indigo-600/80 to-indigo-900/50",
    hex: "#4F46E5",
  },
  "from-cyan-600/80": {
    gradient: "from-cyan-600/80 to-cyan-900/50",
    hex: "#06B6D4",
  },
} as const;

const ServiceCard = ({ service }: { service: Service }) => {
  const IconComponent = iconMap[service.iconName];
  const colors = colorMap[service.color] || {
    gradient: "from-gray-600/80 to-gray-900/50",
    hex: "#6B7280",
  };

  return (
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor={colors.hex}
      glarePosition="all"
      glareBorderRadius="16px"
      perspective={800}
      className="h-full"
    >
      <motion.div
        className={`relative h-full p-6 rounded-xl bg-gradient-to-br ${colors.gradient} border border-white/20 backdrop-blur-xl shadow-xl flex flex-col overflow-hidden transition-transform duration-500`}
        whileHover={{
          rotateY: 8,
          rotateX: 8,
          scale: 1.05,
          boxShadow: `0 15px 30px ${colors.hex}33`,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glowing Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(45deg, ${colors.hex}40, transparent)`,
            filter: "blur(12px)",
            zIndex: -1,
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Inner Glow Reflection */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${colors.hex}20, transparent)`,
            zIndex: -1,
          }}
        />

        {/* Icon */}
        <motion.div
          className="p-3 bg-white/15 rounded-lg w-fit mb-4"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.7 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {IconComponent ? (
            <IconComponent className="w-6 h-6 text-white drop-shadow-md" />
          ) : null}
        </motion.div>

        {/* Title */}
        <h1 className="text-xl font-bold text-white mb-3 drop-shadow-lg tracking-tight">
          {service.title}
        </h1>

        {/* Description */}
        <p className="text-gray-100 text-opacity-90 flex-grow text-xs leading-relaxed">
          {service.description}
        </p>

        {/* Animated Bar */}
        <motion.div
          className="mt-4 w-12 h-1 bg-gradient-to-r from-white/90 to-transparent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
