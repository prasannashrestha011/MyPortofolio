import React from 'react'

export const BackgroudGlow = () => {
  return (
    <div className='absolute inset-0'
    style={{
    backgroundColor:'black',
    mask: 'radial-gradient(circle, white 8%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(circle, white 10%, transparent 100%)',
    }}
    >

        </div>
  )
}
