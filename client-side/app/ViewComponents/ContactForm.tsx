"use client"
import ContactField from '@/Utils/ContactField'
import React from 'react'
import { Element } from 'react-scroll'

import { SlideDownMotion } from '../Components/Animations/SlideInMotion'

const ContactForm = () => {
  return (
    <Element name='contact'>
      <div className='h-screen  flex flex-col  bg-yellow-400  '>
        
      <header className='kadamThmor mx-auto w-fit text-3xl flex items-center justify-center   '>
        <span className='text-gray-800'>Contact</span>
        <img className='md:hidden ' src='https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/Untitled_design__1_-removebg%202.png'/>
      </header>
        <div className='flex flex-col md:flex-row  md:justify-between   justify-center items-center'>
         <span className='  md:w-96 w-80'>
        <SlideDownMotion >
        <img className='  md:flex ' src='https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/Untitled_design__1_-removebg.png'/>
        </SlideDownMotion>
         </span>
           <div className=' md:flex-1 flex justify-center items-center mt-2 bg-blue-500 w-full h-96 rounded-md'>
           <ContactField/>
         
           </div>
        </div>
    </div>
    </Element>
  )
}

export default ContactForm
