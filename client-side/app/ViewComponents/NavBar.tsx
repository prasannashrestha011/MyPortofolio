'use client'
import React, { useEffect, useState } from 'react'
import { FaFacebook,FaGithub  } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaX,FaBars } from 'react-icons/fa6'
import { NavItems } from '@/Ui_data/NavItems'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
import RevealMotion from '../Components/Animations/RevealMotion'

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
              className=' md:w-28 w-14 md:h-14 h-12  flex justify-center items-center md:text-2xl text-xl'>
              <Link
              onClick={toggleNavigation}
              to={item.link} smooth={true} duration={500}>
              {item.name}
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
          <RevealMotion>
          <NavBarLinks/>
          </RevealMotion>
        </nav>


      {/* for mobile devices */}
      <div className=' md:hidden w-full fixed flex flex-col  h-screen '>

      <div className='md:hidden flex justify-end'>   
        {isOpen? <FaX  size={24} onClick={()=>toggleNav()}/>:<FaBars size={24} onClick={()=>toggleNav()} />}</div>
       
         <motion.nav
         initial={{y:"-130%"}}
         animate={{y:isOpen?"0%":"-130%"}}
         transition={{ type: "spring", stiffness: 400, damping: 70 }}
  
         className='    md:hidden flex flex-col  justify-start items-center   flex-1 bg-red-500 gap-10  '
         >
            <div className='mt-4 flex justify-center item-center gap-4'>
            <FaFacebook size={32}/>
            <FaGithub size={32}/>
            <MdEmail size={32}/>
            </div>
          <NavBarLinks/>
       
         </motion.nav>
          
      </div>
    </React.Fragment>
  )
}

export default NavBar
