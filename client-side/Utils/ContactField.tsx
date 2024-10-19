"use client"
import React, { ChangeEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
const ContactField = () => {
    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const [message,setMessage]=useState<string>("")
    const handleUserInfo=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        switch(name){
            case 'name':
                setName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'message':
                setMessage(value)
                break;
        }
    }
  return (
    <div className='flex flex-col  gap-4 h-auto kadamThmor text-gray-900 '>
      <div className='flex flex-col gap-2'>
      <label htmlFor='name ' style={{color:'#DBD3D3'}}>Name</label>
      <Input name="name" value={name} onChange={handleUserInfo} 

      className='bg-white rounded p-2'
       placeholder='Username'
       />
      </div>
      <div className='flex flex-col  gap-2'>
          <label htmlFor='name' style={{color:'#DBD3D3'}}>Email</label>
      <Input name="email" value={email} onChange={handleUserInfo} 
          className='bg-white rounded p-2'
          placeholder='Email'
      />
      </div>
      <div className='flex flex-col  gap-2'>
      <label htmlFor='message ' style={{color:'#DBD3D3'}}>Message</label>
      <Input name="message" value={message} onChange={handleUserInfo}
          className='bg-white rounded p-2'
          placeholder='Leave a message'
      />
      </div>
      <Button className='bg-blue-500 hover:bg-blue-800 mx-auto w-64'>Submit</Button>
      
    </div>
  )
}

export default ContactField
