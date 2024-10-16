"use client"
import { SkillsItems } from '@/Ui_data/UI_Items'
import { motion,} from 'framer-motion';
import React, {   useRef } from 'react'
import { Element } from 'react-scroll';
import {RevealMotion} from '@/app/Components/Animations/RevealMotion';
import { Props } from '@/Utils/ViewProps'
const Skill = ({className}:Props) => {
    const ref=useRef(null);
  

  return (
 
       <Element name='skills'>
      <div className={` ${className} w-full mx-auto h-screen min-h-screen  flex flex-col items-center  overflow-x-hidden kadamThmor`} ref={ref} >
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
              <div className={`  flex flex-col justify-center  items-center gap-3  w-40 h-40   md:w-52 md:h-52  shadow-2xl  rounded-full `} >
              <header className='kadamThmor  text-xl md:text-3xl pb  ' >{item.header}</header>
              <main className='grid grid-cols-2 gap-4   '>
              {item.skills.map((skill,idx)=>(
                  
                 <div key={idx} className={`flex w-9 md:w-14 ${idx===item.skills.length-1?' col-span-2 ml-8' :''} `}>
                    <img 
                 
                 draggable="false"
                alt="frontend"
                 src={skill} className={`object-contain transition-transform duration-300 ease-in-out hover:scale-125  `} />
                 </div>
                
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
              <div className={`  flex flex-col justify-center  items-center gap-3  w-40 h-40   md:w-52 md:h-52  shadow-2xl  rounded-full`} >
              <header className=' text-xl md:text-3xl pt-2' >{item.header}</header>
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
              <div className={`  flex flex-col justify-center  items-center gap-3  w-40 h-40   md:w-52 md:h-52  shadow-2xl  rounded-full`}  >
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
 
  )
}

export default Skill
