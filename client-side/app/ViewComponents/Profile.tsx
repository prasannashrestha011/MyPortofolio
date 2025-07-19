import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
interface prop {
  itemVariants: Variants;
}
const Profile: React.FC<prop> = ({ itemVariants }) => {
  return (
    <motion.section
      className="flex flex-col items-center text-center mb-4"
      variants={itemVariants}
    >
      <motion.div
        className="relative mb-3"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/156085738?s=400&u=a1f762b6354521f415cd88bf6dfd1a81b3f6ba64&v=4"
          alt="Prasanna shrestha"
          width={96}
          height={96}
          className="rounded-full object-cover shadow-lg border-2 border-gray-600"
        />
      </motion.div>

      <motion.h1
        className="text-2xl  font-semibold text-white mb-1"
        variants={itemVariants}
      >
        Prasanna shrestha
      </motion.h1>

      <motion.p className="text-gray-400 mb-3 text-sm" variants={itemVariants}>
        Nepal
      </motion.p>
    </motion.section>
  );
};

export default Profile;
