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
   flex  md:justify-between  
    flex-col
    md:flex-row
    mx-auto md:w-10/12 md:mt-10 lg:mt-10   `}
   
   >
   <span className='  flex flex-col items-start  justify-evenly h-72 mt-10 ml-4  bg-cover  bg-no-repeat p-4 md:w-auto w-11/12' 
    style={{backgroundImage:"url('/Ui_imgs/design2.png')"}}>
 
      <RevealMotion>
      <p className='md:text-4xl text-2xl md:mb-8 mb-16  '
     
      >Prasanna Shrestha</p>
      </RevealMotion>
   
      <RevealMotion>
      <p className='md:text-2xl text-xl w-60 md:w-96 '>
      I am a full stack software developer.
      I build things on web and desktop application.
      
        </p>
      </RevealMotion>
     </span>
    <span className='w-10/12'>
      <img src='/Ui_imgs/mainimg.png' alt='main_img' draggable="false" onContextMenu={(e)=>e.preventDefault()}/>
    </span>
     <NavBar/>
  
   </div>
      </Element>
  
  
  )
}

export default Index
