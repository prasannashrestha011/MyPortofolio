"use client"
import { ProjectItems } from '@/Ui_data/NavItems'
import {motion,useScroll} from 'framer-motion'
import React, { useRef } from 'react'

const Projects:React.FC = () => {
  const ref=useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["0 1.8","1 1.5"]
  })
  return (
    <motion.div 
    style={{
      scale:scrollYProgress,
      opacity:scrollYProgress
    }}
    className='flex flex-col h-screen kadamThmor ' ref={ref}>
      <header className=' font-bold text-3xl text-center '>Projects</header>
    <main className=' md:w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 p-2 gap-2'>
      {ProjectItems.map((project,idx)=>(
        <section key={idx} 
        className=' flex flex-col justify-between items-center  rounded-md overflow-hidden shadow-lg'>
            <header style={{ backgroundImage: 'linear-gradient(to right, #6611C0 86%, #5F4D73 100%)' }}
             className='w-full flex justify-center items-center h-12 text-slate-50 text-sm md:text-xl'>
              <span className='flex-1 flex justify-center item-center'>{project.name}</span>
             <a href={project.githubUrl} target='_blank' rel="noopener noreferrer">
             <img 
           
             src="/icons/github_logo.png" className='w-7 pr-2'/>
             </a>
              </header>
            <main>
              <img 
            className='w-44 md:w-auto'
              draggable="false"
            alt='project-img'
            src={project.imgSrc}/></main>
            <footer className='w-full md:h-14 -10  flex justify-center items-center md:text-xl' style={{ backgroundImage: 'linear-gradient(to right, #6611C0 86%, #5F4D73 100%)' }}
            >
              <img src={project.language} className='md:w-8 w-4' alt='icon'/>
            </footer>
        </section>
      ))}
    </main>
    </motion.div>
  )
}

export default Projects
