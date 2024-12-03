"use client"
import React from 'react'


import NavBar from './NavBar'
import { Element } from 'react-scroll'

import {RevealMotion} from '@/app/Components/Animations/RevealMotion'
import { Props } from '@/Utils/ViewProps'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'


const Index = ({className}:Props) => {


  
  return (


      <Element name='home' suppressHydrationWarning>
      <div 
   
   className={`kadamThmor
    ${className}
    
  h-screen min-h-screen 
   flex  md:justify-between  
    items-start
    flex-col
    md:flex-row
    mx-auto md:w-10/12 md:mt-10 lg:mt-10   `}
   
   >
   <span className='  flex-1 flex flex-col items-start gap-16  justify-evenly h-auto mt-10 ml-4  bg-cover  bg-no-repeat p-4 md:w-auto w-11/12' 
    style={{backgroundImage:"url('/Ui_imgs/design2.png')"}}>
 
      <RevealMotion>
      <>
      <p className='md:text-4xl text-2xl md:mb-2 mb-1 mt-8  '>Prasanna Shrestha</p>
      <div className='flex gap-2'>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/prasannashrestha011/' ><FaGithub size={25}/></a>
        <a target='blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/prasanna-s-10a5062a4/'><FaLinkedin size={25}/></a>
      </div>
     
      </>
      </RevealMotion>
   
      <RevealMotion>
   
      <ul className='flex flex-col gap-1 text-xl w-60 md:w-96 ' >
        <li className=''>Interested in backend development.
       </li>
       <li>
       I build things for the web  applications.
       </li>
      </ul>
      
       
      </RevealMotion>
     </span>
    <span className='w-11/12 '>
      <img  src='/Ui_imgs/mainimg.png' alt='main_img' draggable="false" onContextMenu={(e)=>e.preventDefault()}/>
    </span>

   <NavBar/>
   
  
   </div>
      </Element>
  
  
  )
}

export default Index
