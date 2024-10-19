"use client"
import React, { ChangeEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
const ContactField = () => {
    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const [message,setMessage]=useState<string>("")
    const handleUsername=(e:ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value);
    }
    const handleEmail=(e:ChangeEvent<HTMLInputElement>)=>{
      setEmail(e.target.value);
    }
    const handleMessage=(e:ChangeEvent<HTMLInputElement>)=>{
      setMessage(e.target.value);
    }
  return (
    <div className='flex flex-col  gap-4 h-auto kadamThmor text-gray-900 z-20'>
      <div className='flex flex-col gap-2'>
      <label htmlFor='name ' style={{color:'#DBD3D3'}}>Name</label>
      <Input name="name" value={name} onChange={handleUsername} 
      className='bg-white rounded p-2'
       placeholder='Username'
       />
      </div>
      <div className='flex flex-col  gap-2'>
          <label htmlFor='name' style={{color:'#DBD3D3'}}>Email</label>
      <Input name="email" value={email} onChange={handleEmail} 
          className='bg-white rounded p-2'
          placeholder='Email'
      />
      </div>
      <div className='flex flex-col  gap-2'>
      <label htmlFor='message ' style={{color:'#DBD3D3'}}>Message</label>
      <Input name="message" value={message} onChange={handleMessage}
          className='bg-white rounded p-2'
          placeholder='Leave a message'
      />
      </div>
      <Button className='bg-blue-500 hover:bg-blue-800 mx-auto w-64' >Submit</Button>
      
    </div>
  )
}

export default ContactField
