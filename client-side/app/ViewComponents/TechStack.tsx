import { motion, Variants } from "framer-motion";
import React from "react";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  // Frontend
  { icon: SiReact, name: "React", category: "Frontend", color: "#61DAFB" },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    category: "Frontend",
    color: "#000000",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    category: "Frontend",
    color: "#3178C6",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    category: "Frontend",
    color: "#F7DF1E",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    category: "Frontend",
    color: "#06B6D4",
  },

  // Backend
  { icon: SiNodedotjs, name: "Node.js", category: "Backend", color: "#339933" },
  { icon: SiPython, name: "Python", category: "Backend", color: "#3776AB" },
  {
    icon: SiExpress,
    name: "Express.js",
    category: "Backend",
    color: "#000000",
  },

  { icon: SiGo, name: "Go", category: "Backend", color: "#4169E1" },
  // AI/ML
  {
    icon: SiPytorch,
    name: "Pytorch",
    category: "AI/ML",
    color: "#FF6F00",
  },

  // Database
  { icon: SiMongodb, name: "MongoDB", category: "Database", color: "#47A248" },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    category: "Database",
    color: "#4169E1",
  },
  { icon: SiRedis, name: "Redis", category: "Database", color: "#DC382D" },

  // DevOps
  { icon: SiDocker, name: "Docker", category: "DevOps", color: "#2496ED" },
  {
    icon: SiFirebase,
    name: "Fire base",
    color: "#4285F4",
  },
  { icon: SiGit, name: "Git", category: "DevOps", color: "#F05032" },
];
interface props {
  containerVariants: Variants;
  itemVariants: Variants;
  iconVariants: Variants;
}
const TechStack: React.FC<props> = ({
  containerVariants,
  itemVariants,
  iconVariants,
}) => {
  return (
    <motion.section className="mb-4" variants={itemVariants}>
      <motion.h2
        className="text-xl font-semibold text-white text-center mb-3"
        variants={itemVariants}
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-8  justify-items-center"
        variants={containerVariants}
      >
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon;

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-3"
              variants={iconVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              custom={index}
            >
              <motion.div
                className="p-2 rounded-lg bg-gray-900/30 border border-gray-800 transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-600 hover:shadow-xl hover:shadow-black/30"
                whileHover={{ scale: 1.1 }}
              >
                <IconComponent
                  className="w-5 h-5 transition-all duration-300 filter hover:brightness-110 hover:drop-shadow-lg"
                  style={{
                    color: tech.color,
                    filter: "brightness(0.9)",
                    ...(tech.color === "#000000" && { color: "#ffffff" }),
                  }}
                />
              </motion.div>

              {/* Always visible label - mobile and desktop friendly */}
              <span className="text-xs text-gray-400 font-medium text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default TechStack;
