"use client"
import React from 'react'


import NavBar from './NavBar'
import { Element } from 'react-scroll'

import {RevealMotion} from '@/app/Components/Animations/RevealMotion'
import { Props } from '@/Utils/ViewProps'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import BorderAnimation from '../Components/Animations/BorderAnimation'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IntroDescs } from '@/Ui_data/UI_Items'


const Index = ({className}:Props) => {


  
  return (


      <Element name='home' suppressHydrationWarning>
      <div 
   
   className={`kadamThmor
    ${className}
    
  h-screen min-h-screen 
   flex  md:justify-center 
   
    items-start
    flex-col
    md:flex-row
    mx-auto md:w-10/12 md:mt-10 lg:mt-10   `}
   
   >
   <span className='flex-1 flex flex-col items-center gap-16  justify-evenly h-auto mt-10   bg-cover  bg-no-repeat p-4 md:w-auto w-11/12' 
    >
 
      <RevealMotion>
      <div className=' md:w-96 flex flex-col items-center justify-center'>
      <p className='md:text-4xl text-2xl mb-2  mt-8  '>Prasanna Shrestha</p>
      <div className='flex'>
        <BorderAnimation>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/prasannashrestha011/' >
        <FaGithub size={25} className='rounded-full bg-gray-800' />
        </a>
        </BorderAnimation>
        <a target='blank' rel='noopener noreferrer' className='p-1' href='https://www.linkedin.com/in/prasanna-s-10a5062a4/'><FaLinkedin size={25}/></a>
      </div>
     
      </div>
      </RevealMotion>
   
      <RevealMotion>
   
      <ul className='flex flex-col gap-1 md:text-xl  md:w-96  md:mr-4' >
        {IntroDescs.map((desc,idx)=>(
          <li key={idx} className='flex items-center'>
            <MdKeyboardArrowRight/>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
      
       
      </RevealMotion>
     </span>
   

   <NavBar/>
   
  
   </div>
      </Element>
  
  
  )
}

export default Index
