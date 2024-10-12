'use client'
import React, { useEffect, useState } from 'react'
import { FaX,FaBars } from 'react-icons/fa6'
import { NavItems } from '@/Ui_data/NavItems'

const NavBarLinks=()=>{
 return(
  <>
   <ul className='flex flex-col '>
   {NavItems.map((item,idx)=>{
    return(
     
           <li key={idx} className=' md:w-28 w-14 md:h-14 h-12  flex justify-center items-center'>
      <a href={item.link}>{item.name}</a>
      </li>
  
    )
  })}
      </ul>
  </>
 )
}
const NavBar:React.FC = () => {
  const [isOpen,setIsOpen]=useState(false)
  const toggleNav=()=>{
    setIsOpen(!isOpen)
  }
  useEffect(()=>{
    if(isOpen){
      document.body.style.overflow="hidden"
    }else{
      document.body.style.overflow=""
    }
    return(()=>{document.body.style.overflow=""})
  },[isOpen])
  return (
    <React.Fragment>
        <nav className='    md:text-2xl md:flex hidden '>
          <NavBarLinks/>
      </nav>
      {/* for mobile devices */}
      <div className=' md:hidden w-full fixed flex flex-col  h-screen '>

      <div className='md:hidden flex justify-end'>   
        {isOpen? <FaX  size={24} onClick={()=>toggleNav()}/>:<FaBars size={24} onClick={()=>toggleNav()} />}</div>
      
      
      {isOpen&&(
        <nav className='md:hidden flex  justify-center items-start   flex-1 bg-red-500  '>
        <NavBarLinks/>
        </nav>
        )}
      

 
      </div>
    </React.Fragment>
  )
}

export default NavBar
