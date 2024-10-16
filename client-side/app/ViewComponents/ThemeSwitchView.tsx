"use client"
import React from 'react'
import ThemeSwitch from '../Components/ThemeSwitch'
interface Props{
  className?:string
}
const ThemeSwitchView = ({className}:Props) => {
  return (
    <div>
       <div className={`${className} flex items-center justify-end mr-4 mt-2 `}><ThemeSwitch/></div>
    </div>
  )
}

export default ThemeSwitchView
