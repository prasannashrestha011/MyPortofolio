

import { SendMessage } from '@/app/Components/NodeMailer/sendGridEmail';
import { NextRequest, NextResponse } from 'next/server'
export async function POST(req:NextRequest){
    try{
        const {username,email,message}= await req.json();
        console.log(username+" -> "+message)
        const response=await SendMessage(username,email,message);
        
        return NextResponse.json({message:response},{status:200})
    }catch(err){
        const errorMessage = (err as Error).message || 'Unknown error';

        console.error(err); // Log the full error for debugging

      
        return NextResponse.json(
            { error: 'Failed to send message', details: errorMessage },
            { status: 500 }
        );
    }
}