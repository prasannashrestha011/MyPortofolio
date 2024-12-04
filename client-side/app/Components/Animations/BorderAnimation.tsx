import { useTime, useTransform ,motion} from 'framer-motion'
import React, { ReactNode } from 'react'

const BorderAnimation:React.FC<{children:ReactNode}> = ({children}) => {

    const time=useTime()

    const rotate=useTransform(time,[0,2000],[0,369],{
        clamp:false
    })
    const rotateBg=useTransform(rotate,(r)=>`
    conic-gradient(from ${r}deg,#ff4545,#00ff99,#006aff,#ff0095,#ff4545)
    `)
  return (
    <div className='w-auto'>
        <div className='relative'>
      
            <span className='relative z-10  flex justify-center items-center  p-1'>
            {children}
            </span>
           
           <motion.div 
           className='absolute inset-[1px] rounded-full'
           style={{
            background:rotateBg
           }}>

           </motion.div>
        </div>
    </div>
  )
}

export default BorderAnimation