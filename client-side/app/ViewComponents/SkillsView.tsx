import { SkillsItems } from '@/Ui_data/NavItems'
import React from 'react'

const SkillsView:React.FC = () => {
  return (
    <div className='border border-black w-8/12 mx-auto'>
      <h2 className='LexendDeca font-bold text-3xl'>Skills</h2>
      <br/>
      <div>
        {SkillsItems.map((item,idx)=>(
        <>
        <header className='LexendDeca font-semibold text-2xl' key={idx}>{item.header}</header>
        <main className='flex gap-4'>
        {item.skills.map((skill,idx)=>(
            <img src={skill} className='w-14 object-contain' key={idx}/>
        ))}
      
        </main>
        </>
        ))}
      </div>
    </div>
  )
}

export default SkillsView
