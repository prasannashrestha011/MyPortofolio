"use client"
import React, { ReactNode, useEffect, useState } from 'react'
import { BackgroudGlow } from '../Components/BackgroudGlow'

interface Prop{
  posX:number,
  posY:number,
}
const ParentView:React.FC<{children:ReactNode}> = ({children}) => {

  const [mousePosition,setMousePosition]=useState<Prop>({
    posX:0,
    posY:0
  })
  const onMouseMove=(e:MouseEvent)=>{
   
      setMousePosition({
        posX:e.clientX,
        posY:e.clientY
      })
    
  }
  useEffect(()=>{
   window.addEventListener('mousemove',onMouseMove)
   
   return()=>{
    window.removeEventListener('mousemove',onMouseMove)
   }
  },[])
  return (
    <div className='relative'>
         <BackgroudGlow/>
      
        {children}

    </div>
  )
}

export default ParentView
