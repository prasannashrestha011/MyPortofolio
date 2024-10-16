"use client"
import React from 'react'


import NavBar from './NavBar'
import { Element } from 'react-scroll'

import {RevealMotion} from '@/app/Components/Animations/RevealMotion'
import { Props } from '@/Utils/ViewProps'
const Index = ({className}:Props) => {
  return (

      
      <Element name='home' suppressHydrationWarning>
      <div 
   
   className={`kadamThmor
    ${className}
  h-screen min-h-screen 
   flex  justify-between  
  
    mx-auto md:w-10/12 md:mt-10 lg:mt-10  `}
   
   >
   <span className='  flex flex-col items-start  justify-evenly h-72 mt-10 ml-4  bg-cover  bg-no-repeat p-4'  style={{backgroundImage:"url('/Ui_imgs/design.png')"}}>
 
      <RevealMotion>
      <p className='md:text-4xl text-2xl bg-uri()  '
     
      >Prasanna Shrestha</p>
      </RevealMotion>
   
      <RevealMotion>
      <p className='md:text-2xl text-xl w-60 md:w-auto '>fullstack developer, build Web & Desktop apps</p>
      </RevealMotion>
     </span>
     <NavBar/>
   </div>
      </Element>
  
  
  )
}

export default Index
