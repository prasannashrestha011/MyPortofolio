import { motion, Variants } from "framer-motion";
import { Mail } from "lucide-react";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
interface prop {
  itemVariants: Variants;
}
const Bio: React.FC<prop> = ({ itemVariants }) => {
  return (
    <motion.section
      className="text-center mb-4 space-y-2"
      variants={itemVariants}
    >
      <motion.p
        className="text-gray-300 leading-relaxed"
        variants={itemVariants}
      >
        A <strong className="text-white">Full-Stack Developer</strong>{" "}
        passionate about building efficient and scalable web applications. My
        journey with <strong className="text-white">Next.js</strong>,{" "}
        <strong className="text-white">React</strong>, and{" "}
        <strong className="text-white">Node.js</strong> has taught me to think
        in terms of performance, user experience, and backend logic.{" "}
      </motion.p>

      <motion.p
        className="text-gray-300 leading-relaxed"
        variants={itemVariants}
      >
        you can find me on{" "}
        <motion.a
          href="https://www.linkedin.com/in/prasanna-s-10a5062a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="w-3 h-3" />
          LinkedIn
        </motion.a>
        ,{" "}
        <motion.a
          href="https://github.com/prasannashrestha011"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub className="w-3 h-3" />
          Github
        </motion.a>
        , or{" "}
        <motion.a
          href="mailto:shresthaprashanna27@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
        >
          <Mail className="w-3 h-3" />
          Email
        </motion.a>
      </motion.p>
    </motion.section>
  );
};

export default Bio;
