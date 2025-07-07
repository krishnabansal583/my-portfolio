"use client";
import { servicesData, Service } from "@/Data/data";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
            My Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData?.length > 0 ? (
            servicesData.map((service: Service) => (
              <motion.div
                key={service.id}
                style={{ transformStyle: "preserve-3d" }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No services available at the moment.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;