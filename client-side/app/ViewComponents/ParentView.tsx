"use client"
import React, { ReactNode } from 'react'
import FramerWrapper from '../Components/Animations/FramerMotion'

const ParentView:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <div>
      <FramerWrapper>
        {children}
      </FramerWrapper>
    </div>
  )
}

export default ParentView
