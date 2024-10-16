"use client"
import React, { ReactNode } from 'react'
import {motion} from 'framer-motion'
const FramerWrapper:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <motion.div
   
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default FramerWrapper
