
import { SendEmail } from '@/app/Components/NodeMailer/sendEmail';
import { NextRequest, NextResponse } from 'next/server'
export async function POST(req:NextRequest){
    try{
        const {username,email,userMessage}= await req.json();
        console.log(username,email,userMessage)
        await SendEmail(username,email,userMessage);
        return NextResponse.json({message:"you are authenticated",email:userMessage},{status:200})
    }catch(err){
        console.log(err)
        return
    }
}