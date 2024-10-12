"use client"
import { SkillsItems } from '@/Ui_data/NavItems'
import { motion,} from 'framer-motion';
import React, {  useRef } from 'react'

const SkillsView:React.FC = () => {
   const ref=useRef(null);
   

  return (
   
        <div className=' w-8/12 mx-auto h-screen flex flex-col ' ref={ref}>
      <h2 className='LexendDeca font-bold text-3xl text-center'>Skills</h2>
      <br/>
    
       <main className='w-full grid grid-cols-2  '>
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
              <div className=' flex flex-col justify-center items-center w-40 h-40  md:w-48 md:h-48 shadow-2xl  rounded-full '>
              <header className='LexendDeca font-semibold text-xl md:text-3xl pb-4' >{item.header}</header>
              <main className='flex gap-4 mb-2   flex-wrap'>
              {item.skills.map((skill,idx)=>(
                  <img 
                  draggable="false"
                 alt="frontend"
                  src={skill} className='w-9 md:w-14 object-contain ' key={idx}/>
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
              <div className=' flex flex-col justify-center  items-center w-40 h-40   md:w-48 md:h-48  shadow-2xl  rounded-full  '>
              <header className='LexendDeca font-semibold text-xl md:text-3xl  ' >{item.header}</header>
              <main className=' grid grid-cols-2 gap-4    '>
              {item.skills.map((skill,idx)=>(
                  <img 
                  draggable="false"
                  alt="backend"
                  src={skill} className='w-9 md:w-14 object-contain ' key={idx}/>
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
              className='flex flex-col items-center  col-span-2 '
              initial={{z:-100,opacity:0}}
              whileInView={{z:0,opacity:1}}
              transition={{duration:0.4}} 
              >
              <div className=' flex flex-col justify-center  items-center  w-40 h-40   md:w-48 md:h-48  shadow-2xl  rounded-full  '>
              <header className='LexendDeca font-semibold text-xl md:text-3xl  ' >{item.header}</header>
              <main className=' grid grid-cols-2 gap-4    '>
              {item.skills.map((skill,idx)=>(
                  <img 
                  draggable="false"
                alt="languages"
                  src={skill} className='w-9 md:w-14 object-contain ' key={idx}/>
              ))}
            
              </main>
              </div>
              </motion.div>
            )
          }
        })}
      </main>
    </div>
   
  )
}

export default SkillsView
