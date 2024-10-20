"use client"
import { SkillsItems } from '@/Ui_data/UI_Items'

import React, {   useRef } from 'react'
import { Element } from 'react-scroll';
import {RevealMotion} from '@/app/Components/Animations/RevealMotion';
import { Props } from '@/Utils/ViewProps'
const Skill = ({className}:Props) => {
    const ref=useRef(null);
  

  return (
 
       <Element name='skills'>
      <div className={` ${className} w-full mx-auto    min-h-screen  flex flex-col items-center  kadamThmor  `} ref={ref} >
      <RevealMotion><h2 className='kadamThmor  text-3xl text-center font-bold'>Skills</h2></RevealMotion>
      <br/>
    
       <main className='w-full  flex flex-col  items-center justify-center  '>
       {SkillsItems.map((item,idx)=>{
          
            return(
        
             <RevealMotion width='100%' key={idx}>
               <div className={`   flex flex-col justify-center  items-start gap-3 pl-5  h-40 w-72    md:w-96 md:h-52    `}  >
              <header className='text-xl md:text-3xl ' >{item.header}</header>
              <main className='  flex gap-4   items-center justify-center  '>
              {item.skills.map((skill,idx)=>(
                  <img 
                  draggable="false"
                alt="languages"
                onContextMenu={(e)=>e.preventDefault()}
                  src={skill} className='w-9 md:w-14 object-contain transition-transform duration-300 ease-in-out hover:scale-125 ' key={idx}/>
              ))}
            
              </main>
              </div>
             </RevealMotion>
            
            )
          
        })}
      </main>
    </div>
    </Element>
 
  )
}

export default Skill
