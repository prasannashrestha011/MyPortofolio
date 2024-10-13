"use client"
import React from 'react'
import SlideInMotion from '../../Components/Animations/SlideInMotion'

import NavBar from '../NavBar'
import { Element } from 'react-scroll'

const Index = () => {
  return (
    <SlideInMotion>
      
      <Element name='home' suppressHydrationWarning>
      <div 
   
   className='kadamThmor
   
   h-screen
   flex  justify-between  
   
    mx-auto md:w-10/12 md:mt-10 lg:mt-10  '
   
   >
   <span className='  flex flex-col items-start  justify-evenly h-60 mt-10 ml-4 '>
     <p className='font-semibold md:text-4xl text-2xl '>Prasanna Shrestha</p>
   
     <p className='md:text-2xl text-xl w-60 md:w-auto '>fullstack developer, build Web & Desktop apps</p>
     </span>
     <NavBar/>
   </div>
      </Element>
  
    </SlideInMotion>
  )
}

export default Index
