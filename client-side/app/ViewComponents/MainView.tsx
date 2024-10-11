
import React from 'react'
import SlideInMotion from '../Components/Animations/SlideInMotion'

const MainView = () => {
  return (
    <SlideInMotion>
      <div className='border border-black h-screen'>
      <div className='LexendDeca 
      
      flex  justify-between  
      h-96 mx-auto w-8/12 md:mt-10 lg:mt-10'
      >
      <span className='text-4xl  justify-start items-center   '>
        <p className='font-semibold'>Prasanna Shrestha</p>
        <br/>
        <p className='text-2xl  '>fullstack developer, build Web & Desktop apps</p>
        </span>
      
      </div>
    </div>
    </SlideInMotion>
  )
}

export default MainView
