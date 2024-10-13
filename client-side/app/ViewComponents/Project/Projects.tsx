"use client"
import {RevealMotionWithoutLine} from '@/app/Components/Animations/RevealMotion'
import {motion} from 'framer-motion'
import { ProjectItems } from '@/Ui_data/NavItems'
import React, { useRef } from 'react'
import { Element } from 'react-scroll'

const Projects:React.FC = () => {
  const ref=useRef(null)
 
  return (
   <Element name='projects'>
     <div 
    className='flex flex-col h-screen kadamThmor w-11/12 mx-auto ' ref={ref}>
      <header className=' font-bold text-3xl text-center '>Projects</header>
    <main className=' md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 p-2 gap-2'>
      {ProjectItems.map((project,idx)=>(
        <RevealMotionWithoutLine key={idx}>
          <section key={idx} 
        className=' flex flex-col justify-between items-center  rounded-md overflow-hidden shadow-lg'>

            <header style={{ backgroundImage: 'linear-gradient(to right, #6611C0 86%, #5F4D73 100%)' }}
             className='w-full flex justify-between items-center h-12 text-slate-50 text-sm md:text-xl'>
            
              <span className='flex-1 flex justify-center item-center ml-8'>{project.name}</span>
                <a href={project.githubUrl} target='_blank' rel="noopener noreferrer">
                  <span >
                  <img 
              
              src="/icons/github_logo.png"  className='w-11 pr-2'/>
                  </span>
                </a>
              </header>

            <main className='overflow-hidden border-2 border-gray-600 md:h-48'>
              <motion.img 
              initial={{rotate:0}}
              whileTap={{rotate:8}}
              transition={{duration:0.2}}
            className='md:w-auto  '
              draggable="false"
            alt='project-img'
            src={project.imgSrc}/>
            </main>
            <footer className='w-full md:h-auto p-2  flex flex-col justify-center items-center md:text-xl' style={{ backgroundImage: 'linear-gradient(to right, #6611C0 86%, #5F4D73 100%)' }}
            >
              <img src={project.language} className='md:w-8 w-4' alt='icon'/>
              <span className='md:text-sm LexendDeca w-10/12 '>
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
