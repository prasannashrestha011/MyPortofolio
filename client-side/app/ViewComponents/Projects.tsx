"use client"
import {RevealMotion, RevealMotionWithoutLine} from '@/app/Components/Animations/RevealMotion'

import { ProjectItems } from '@/Ui_data/UI_Items'
import React, { useRef } from 'react'
import { Element } from 'react-scroll'
import { FaGithub  } from 'react-icons/fa6'
import { Props } from '@/Utils/ViewProps'
const Projects = ({className}:Props) => {
  const ref=useRef(null)
 
  return (
   <Element name='projects'>
     <div 
    className={`${className} min-h-screen flex flex-col  kadamThmor w-11/12 mx-auto pb-20`} ref={ref}>
      <header className=' font-bold text-3xl   w-fit mx-auto'>
        <RevealMotion>
        <span>Projects</span>
        </RevealMotion>
        </header>

    <main className=' md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 p-2 md:gap-4 gap-4'>
      {ProjectItems.map((project,idx)=>(
        <RevealMotionWithoutLine key={idx}>
          <section key={idx} 
            className=' bg-[#0A192F] flex flex-col justify-between items-center  rounded-md overflow-hidden shadow-lg'>

            <header style={{ }}
             className='w-full flex justify-between items-center h-12  text-sm md:text-xl'>
            
              <span className='flex-1 flex justify-center item-center ml-8 text-slate-50'>{project.name}</span>
                <a href={project.githubUrl} target='_blank' rel="noopener noreferrer">
                 
                  <FaGithub size={38} className='pr-2'/>
                
                </a>
              </header>

            <main className='overflow-hidden border-2 border-gray-600 md:h-48'>
              <img   
            className='md:w-auto  '
              draggable="false"
            alt='project-img'
            src={project.imgSrc}/>
            </main>
            <footer className='w-full md:h-auto p-2  flex flex-col justify-center items-center md:text-xl' 
            >
              <img src={project.language} className='md:w-8 w-4' alt='icon'/>
              <span className='md:text-sm LexendDeca w-10/12 text-slate-50 md:h-20'>
                {project.des}
              </span>
            </footer>
        </section>
        </RevealMotionWithoutLine>
      ))}
    </main>
    </div>
   </Element>
  )
}

export default Projects
