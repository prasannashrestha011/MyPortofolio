"use client"
import { SkillsItems } from '@/Ui_data/NavItems'
import { motion,} from 'framer-motion';
import React, {   useRef } from 'react'
import { Element } from 'react-scroll';
import { useTheme } from 'next-themes';
import {RevealMotion} from '@/app/Components/Animations/RevealMotion';
const Skill = () => {
    const ref=useRef(null);
   const {theme,resolvedTheme}=useTheme();
    const isOceanTheme = theme === 'ocean' || resolvedTheme === 'ocean';
  return (
    <div>
       <Element name='skills'>
      <div className=' w-full mx-auto h-screen flex flex-col items-center  overflow-x-hidden kadamThmor' ref={ref} >
      <RevealMotion><h2 className='kadamThmor  text-3xl text-center font-bold'>Skills</h2></RevealMotion>
      <br/>
    
       <main className='w-full grid grid-cols-2    '>
       {SkillsItems.map((item,idx)=>{
          if(item.header==="Frontend"){
            return(
              <motion.div
              key={idx}
              className='flex flex-col items-center '
              initial={{x:-100,opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:0.4}} 
              >
              <div className={` ${isOceanTheme?"bg-gray-800":""} flex flex-col justify-center  items-center gap-3  w-40 h-40   md:w-52 md:h-52  shadow-2xl  rounded-full`} >
              <header className='kadamThmor  text-xl md:text-3xl pb-4 ' >{item.header}</header>
              <main className='flex gap-4 mb-2   flex-wrap'>
              {item.skills.map((skill,idx)=>(
                  
                   <img 
                 
                 draggable="false"
                alt="frontend"
                 src={skill} className='w-9 md:w-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125 ' key={idx}/>
                
              ))}
            
              </main>
              </div>
              </motion.div>
            )
          }
          if(item.header==="Backend"){
            return(
              <motion.div
              key={idx}
              className='flex flex-col items-center   '
              initial={{x:100,opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:0.4}} 
              >
              <div className={` ${resolvedTheme=="ocean"?"bg-gray-800":""} flex flex-col justify-center  items-center gap-3  w-40 h-40   md:w-52 md:h-52  shadow-2xl  rounded-full`} >
              <header className=' text-xl md:text-3xl ' >{item.header}</header>
              <main className=' grid grid-cols-2 gap-4    '>
              {item.skills.map((skill,idx)=>(
               
                  <img 
                  draggable="false"
                  alt="backend"
                  src={skill} className='w-9 md:w-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125 ' key={idx}/>
                 
              ))}
            
              </main>
              </div>
             
              </motion.div>
            )
          }
          if(item.header==="Languages"){
            return(
              <motion.div
              key={idx}
              className='flex flex-col items-center  col-span-2  '
              initial={{z:-100,opacity:0}}
              whileInView={{z:0,opacity:1}}
              transition={{duration:0.4}} 
              >
              <div className={` ${resolvedTheme=="ocean"?"bg-gray-800":""} flex flex-col justify-center  items-center gap-3  w-40 h-40   md:w-52 md:h-52  shadow-2xl  rounded-full`}  >
              <header className='text-xl md:text-3xl' >{item.header}</header>
              <main className=' grid grid-cols-2 gap-4    '>
              {item.skills.map((skill,idx)=>(
                  <img 
                  draggable="false"
                alt="languages"
                  src={skill} className='w-9 md:w-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125' key={idx}/>
              ))}
            
              </main>
              </div>
              </motion.div>
            )
          }
        })}
      </main>
    </div>
    </Element>
    </div>
  )
}

export default Skill
