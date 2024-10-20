"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'

import axios from 'axios'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'

const ContactField = () => {
    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const [message,setMessage]=useState<string>("")
    const [namingError,setNamingError]=useState<string>("")
    const[error,setError]=useState<string>("")
    const [messageError,setMessageError]=useState<string>("")

    const [isMessageSent,setIsMessageSend]=useState<boolean>(false)
    const handleUsername=(e:ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value);
      validateName(e.target.value);
    }
    const handleEmail=(e:ChangeEvent<HTMLInputElement>)=>{
      setEmail(e.target.value);
      validateEmail(e.target.value)
    }
    const handleMessage=(e:ChangeEvent<HTMLInputElement>)=>{
      setMessage(e.target.value);
      validateMessage(e.target.value)
    }
   useEffect(()=>{
    if(email==""){
      setError("")
    }
    
   },[email])
    const sendMessage=async()=>{
      if(!name &&!email && !message){
        setNamingError("please enter your name")
        setError("invalid email !!")
        setMessageError("please leaver your message!!")
        return
      }
      try{
        const response=await axios.post('https://www.prasannashrestha61.com.np/api/contact',{
          username:name,
          email:email,
          message:message
         })
         console.log(response.data)
         toast.success("email was send sucessfully")
         setIsMessageSend(true)
      }catch(err){
        console.log(err)
        toast.error("failed to send your email")
      }
    }
    const validateName=(value:string)=>{
      if(value.trim().length===0){
        setNamingError("Please enter your name")
      }else{
        setNamingError("")
      }
    }
    const validateEmail = (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern
      if (!emailRegex.test(value)) {
        setError('Invalid email format');
      } else {
        setError('');
      }
    };
    const validateMessage=(value:string)=>{
      if(value.trim().length===0){
        setMessageError("Please enter your name")
      }else{
        setMessageError("")
      }
    }
  return (
    isMessageSent?(<div className='kadamThmor  '>
      <div className='flex gap-3 text-3xl '>
      <span>Message sent </span>
      <span><img src='/icons/sucesstick.png' className='w-10' /></span>
      </div>
      <br/>
        <span>I will reply you soon...</span>
      
      </div>):
    (    
    <div className='flex flex-col  gap-4 h-auto kadamThmor text-gray-900  z-10'>
      <div className='flex flex-col gap-2'>
      <label htmlFor='name ' style={{color:'#DBD3D3'}}>Name</label>
      <input name="name" value={name} onChange={handleUsername} 
      className='bg-white rounded p-2'
       placeholder='Username'
       />
       {namingError&&<span className='text-red-500 text-sm'>{namingError}</span>}
      </div>
      <div className='flex flex-col  gap-2'>
          <label htmlFor='name' style={{color:'#DBD3D3'}}>Email</label>
      <input name="email" value={email} onChange={handleEmail} 
          className='bg-white rounded p-2'
          placeholder='Email'
      />
       {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
      <div className='flex flex-col  gap-2'>
      <label htmlFor='message ' style={{color:'#DBD3D3'}}>Message</label>
      <input name="message" value={message} onChange={handleMessage}
          className='bg-white rounded p-2'
          placeholder='Leave a message'
      />
      {messageError&&<span className="text-red-500 text-sm">{messageError}</span>}
      </div>
      <Button  onClick={()=>sendMessage()}>
  Submit
</Button>
    

    </div>
    )
  )
}

export default ContactField
