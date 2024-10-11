'use client'
import React from 'react'

import { NavItems } from '@/Ui_data/NavItems'

const NavBar:React.FC = () => {
  return (
    <div className='flex   mt-2 gap-2 h-16  shadow-lg mx-auto w-11/12 LexendDeca ' >
     <ul className='flex  flex-1 justify-evenly md:text-2xl items-center  '>
    {NavItems.map((item,idx)=>(
      <li key={idx} className='hover:bg-blue-600 hover:text-slate-100 md:w-24 md:h-14 h-12  p-2 rounded-md flex justify-center items-center'>
        <a href={item.link}>{item.name}</a>
        </li>
    ))}
     </ul>
   
    </div>
  )
}

export default NavBar
