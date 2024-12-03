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
    window.addEventListener('mousemove',(e)=>{
      setMousePosition({
        posX:e.clientX,
        posY:e.clientY
      })
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
      <div className={`w-20 h-20 rounded-full fixed  flex items-center justify-center pointer-events-none `}
      style={{
       top:`${mousePosition.posY}px`,
       left:`${mousePosition.posX}px`,
       transform: 'translate(-50%, -50%)',
       zIndex:30
      }}>
      <img
      className='w-5 h-5'
      src='/icons/custom-cursor.png'
      />
      </div>
    
        {children}

    </div>
  )
}

export default ParentView
