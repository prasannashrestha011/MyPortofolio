
import React from 'react'
import SlideInMotion from '../Components/Animations/SlideInMotion'

import NavBar from './NavBar'

const MainView = () => {
  return (
    <SlideInMotion>
      
      <div className='kadamThmor
      h-screen
      flex  justify-between  
      
       mx-auto md:w-10/12 md:mt-10 lg:mt-10  '
      
      >
      <span className='  flex flex-col items-start  justify-between h-60 mt-10 '>
        <p className='font-semibold md:text-4xl text-2xl '>Prasanna Shrestha</p>
      
        <p className='md:text-2xl text-xl '>fullstack developer, build Web & Desktop apps</p>
        </span>
        <NavBar/>
      </div>
  
    </SlideInMotion>
  )
}

export default MainView
