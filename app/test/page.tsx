import React from 'react'

const page = () => {
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
      <h1 className="relative text-3xl font-bold text-gray-900 group">
   
          Hover me

        
        <span className="absolute left-0 -bottom-1  h-0.5 w-full bg-blue-500 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
      </h1>
    </div>
    </div>
  )
}

export default page
