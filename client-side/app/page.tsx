"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import TechStack from "./ViewComponents/TechStack";
import Profile from "./ViewComponents/Profile";
import Project from "./ViewComponents/Project";
import Bio from "./ViewComponents/Bio";
import RunningApplications from "./ViewComponents/RunningApplications";

// Animation variants - Faster animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 150,
      duration: 0.4,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 200,
      duration: 0.3,
    },
  },
};

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`  min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white`}
    >
      <motion.div
        className="max-w-2xl mx-auto px-6 py-4 md:py-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Section */}
        <Profile itemVariants={itemVariants} />
        {/* Bio Section */}
        <Bio itemVariants={itemVariants} />
        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 my-4"
          variants={itemVariants}
        ></motion.div>
        {/* Tech Stack Section */}
        <TechStack
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          iconVariants={iconVariants}
        />

        <RunningApplications />
        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 my-4"
          variants={itemVariants}
        ></motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 my-4"
          variants={itemVariants}
        ></motion.div>

        {/* Projects Section */}
        <Project
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </motion.div>
    </div>
  );
}
