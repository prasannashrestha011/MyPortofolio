"use client"
import React, { ReactNode } from 'react'


const ParentView:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <div className=''>
    
        {children}

    </div>
  )
}

export default ParentView
