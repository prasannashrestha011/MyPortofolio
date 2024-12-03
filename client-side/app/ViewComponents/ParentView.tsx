"use client"
import React, { ReactNode  } from 'react'
import { BackgroudGlow } from '../Components/BackgroudGlow'


const ParentView:React.FC<{children:ReactNode}> = ({children}) => {


 
  return (
    <div className='relative'>
         <BackgroudGlow/>
      
        {children}

    </div>
  )
}

export default ParentView
