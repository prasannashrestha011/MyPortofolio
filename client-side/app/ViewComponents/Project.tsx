import { motion, Variants } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";
interface prop {
  itemVariants: Variants;
  containerVariants: Variants;
}
const Project: React.FC<prop> = ({ itemVariants, containerVariants }) => {
  return (
    <motion.section variants={itemVariants}>
      <motion.h2
        className="text-xl font-semibold text-white text-center mb-3"
        variants={itemVariants}
      >
        I built
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        variants={containerVariants}
      >
        {/* AI Portrait Studio */}
        <motion.div
          className="space-y-1"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <motion.h3
            className="text-sm font-semibold text-white"
            variants={itemVariants}
          >
            Port craft
          </motion.h3>
          <motion.p
            className="text-gray-400 text-xs leading-relaxed"
            variants={itemVariants}
          >
            AI powered portfolio generator that takes up user&apos;s information
            and generate a html,css,js code
          </motion.p>
          <motion.a
            href="https://github.com/adarshp14/ai-portrait-frontend"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="w-3 h-3" />
            View Repo
          </motion.a>
        </motion.div>

        {/* Universal SQL Agent */}
        <motion.div
          className="space-y-1"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <h3 className="text-sm font-semibold text-white">
            Logic board simulator
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            AI-powered SQL query and database interaction tool bridging natural
            language with databases.
          </p>
          <motion.a
            href="https://github.com/adarshp14/universal-sql-agent"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="w-3 h-3" />
            View Repo
          </motion.a>
        </motion.div>

        {/* AgentInsights */}
        <motion.div
          className="space-y-1"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <h3 className="text-sm font-semibold text-white">Haven</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Haven is an AI-powered CLI tool built with Go (Cobra) that lets
            developers snapshot their local project directories, compress them
            into ZIP files, and securely send them to a remote Django server.
          </p>
          <motion.a
            href="https://github.com/prasannashrestha011/Haven"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="w-3 h-3" />
            View Repo
          </motion.a>
        </motion.div>

        {/* Deep Research V1 */}
        <motion.div
          className="space-y-1"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <h3 className="text-sm font-semibold text-white">Sql visualizer</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Tool that takes user-written SQL queries and transforms the results
            into interactive, easy-to-read tables—making data exploration and
            analysis more visual and intuitive.
          </p>
          <motion.a
            href="https://sql-visualizer-53wy.vercel.app/"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="w-3 h-3" />
            View Repo
          </motion.a>
        </motion.div>

        {/* Discord bot*/}
        <motion.div
          className="space-y-1"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <h3 className="text-sm font-semibold text-white">Discord bot</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            A simple Discord bot that welcomes new users, streams music from
            YouTube, and provides real-time weather updates.
          </p>
          <motion.a
            href="https://github.com/prasannashrestha011/Discord-bot"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="w-3 h-3" />
            View Repo
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Project;
