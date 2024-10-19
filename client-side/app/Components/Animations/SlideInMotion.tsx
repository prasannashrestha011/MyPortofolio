"use client"
import React, { ReactNode } from 'react'
import {motion} from 'framer-motion'
const SlideInMotion:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <motion.div
    initial={{x:-100}}
    animate={{x:0}}
    transition={{type:"keyframes",duration:'0.6'}}
    >
        {children}
    </motion.div>
  )
}
const SlideDownMotion:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <motion.div
    initial={{y:-100}}
    whileInView={{y:0}}
   
    transition={{ type: "spring", duration: 0.4, stiffness: 300,delay:0.2 }}
    >
        {children}
    </motion.div>
  )
}

export  {SlideInMotion,SlideDownMotion}
