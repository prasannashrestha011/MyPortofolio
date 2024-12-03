import React from 'react'

export const BackgroudGlow = () => {
  return (
    <div className='absolute inset-0'
    style={{
    backgroundColor:'#082947',
    mask: 'radial-gradient(circle, white 1%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(circle, white 20%, transparent 100%)',
    }}
    >

        </div>
  )
}
