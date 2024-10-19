'use client'
import React, { useEffect, useState } from 'react'
import { FaFacebook,FaGithub  } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaX,FaBars } from 'react-icons/fa6'
import { NavItems } from '@/Ui_data/UI_Items'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'



const NavBar:React.FC = () => {

  const [isOpen,setIsOpen]=useState(false)
  const [isNavigated,setIsNavigated]=useState(false)
  const toggleNav=()=>{
    setIsOpen(!isOpen)
    setIsNavigated(false)
  }
  const toggleNavigation=()=>{
    
    setIsNavigated(!isNavigated);
    setIsOpen(false)
    console.log(isNavigated);
  }
  const NavBarLinks=()=>{
  
    return(
     <>
      <ul className='flex flex-col gap-2 '>
      {NavItems.map((item,idx)=>{
       return(
        

           <li 
              key={idx}
              className=' cursor-pointer md:w-28 w-14 md:h-14 h-12  flex justify-center items-center md:text-2xl text-xl  '>
        
            <Link
              className='relative group'
              onClick={toggleNavigation}
              to={item.link} smooth={true} duration={500}>
              {item.name}
             <span className='absolute -bottom-1 right-0 h-0.5 left-0 scale-0 group-hover:scale-100 bg-blue-600 transition-all duration-300 w-full rounded-md'></span>
              </Link>
              
        </li>
       
     
       )
     })} 
         </ul>
     </>
    )
   }
  useEffect(()=>{
    if(isOpen){
      document.body.style.overflow="hidden"
    }else{
      document.body.style.overflow=""
    }
    if(isNavigated){
      document.body.style.overflow=""
    }
    return(()=>{document.body.style.overflow=""})
  },[isOpen,isNavigated])
  return (
    <React.Fragment>
      {/* for destkop*/}
        <nav className='    md:text-2xl md:flex hidden '>
        
          <NavBarLinks/>
          
        </nav>


      {/* for mobile devices */}
      <div className=' md:hidden w-full fixed flex flex-col  h-screen z-20'>

        <div className='md:hidden flex justify-end mr-3 mt-2 '>   
        {isOpen? <FaX  size={24} onClick={()=>toggleNav()} />:<FaBars size={24} onClick={()=>toggleNav()} />}
        </div>
       
         <motion.nav
         initial={{y:"-130%"}}
         animate={{y:isOpen?"0%":"-130%"}}
         transition={{ type: "spring", stiffness: 400, damping: 70 }}
  
         className='    md:hidden flex flex-col  justify-start items-center   flex-1 bg-red-500 gap-10  '
         >
            <div className='mt-4 flex justify-center item-center gap-4'>
            <FaFacebook size={32}/>
           <a href='https://github.com/prasannashrestha011' rel='_blank'> <FaGithub size={32} /></a>
           <a href='https://mail.google.com/mail/u/0/#inbox' rel="_blank"> <MdEmail size={32}/></a>
          
            </div>
          <NavBarLinks/>
       
         </motion.nav>
          
      </div>
    </React.Fragment>
  )
}

export default NavBar
