"use client"
import ContactField from '@/app/ViewComponents/Contact/ContactField'
import React from 'react'
import { Element } from 'react-scroll'

import { SlideDownMotion } from '../../Components/Animations/SlideInMotion'
import { Toaster } from 'react-hot-toast'

const ContactForm = () => {
  return (
    <Element name='contact'>
      <div className='h-screen  flex flex-col  bg-yellow-400 border border-blue-500 '>
        
      <header className='kadamThmor mx-auto w-fit text-3xl flex items-center justify-center   '>
        <span className='text-gray-800 font-bold text-3xl'>Contact</span>
        
      </header>
        <div className='flex flex-1 md:flex-none flex-col md:flex-row  md:justify-between   justify-center items-center'>
         <span className='  md:w-96 w-80'>
        <SlideDownMotion >
        <img 
        draggable='false'
        onContextMenu={(e)=>e.preventDefault()}
        className='  md:flex ' src='https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/Untitled_design__1_-removebg.png'/>
        </SlideDownMotion>
         </span>
           <div className=' md:flex-1 flex justify-center items-center mt-2 w-full h-full rounded-md bg-blue-600'>
           <ContactField/>
         
           </div>
        </div>
        <Toaster/>
    </div>
    </Element>
  )
}

export default ContactForm
