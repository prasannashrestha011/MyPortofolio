import { ProjectItems } from '@/Ui_data/NavItems'
import React from 'react'

const Projects:React.FC = () => {
  return (
    <div className='flex flex-col h-screen '>
      <header className='LexendDeca font-bold text-3xl text-center '>Projects</header>
    <main className=' md:w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 p-2 gap-2'>
      {ProjectItems.map((project,idx)=>(
        <section key={idx} 
        className=' flex flex-col justify-between items-center LexendDeca rounded-md overflow-hidden shadow-lg'>
            <header style={{ backgroundImage: 'linear-gradient(to right, #6611C0 86%, #5F4D73 100%)' }}
             className='w-full flex justify-center items-center h-12 text-slate-50 text-sm md:text-xl'>{project.name}</header>
            <main><img 
            className='w-44 md:w-auto'
            alt='project-img'
            src={project.imgSrc}/></main>
            <footer className='w-full md:h-14 -10  flex justify-center items-center md:text-xl' style={{ backgroundImage: 'linear-gradient(to right, #6611C0 86%, #5F4D73 100%)' }}
            >
              <img src={project.language} className='md:w-8 w-4' alt='icon'/>
            </footer>
        </section>
      ))}
    </main>
    </div>
  )
}

export default Projects
