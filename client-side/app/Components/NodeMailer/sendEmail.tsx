import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function SendEmail(username: string, email: string, userMessage: string) {
  console.log(process.env.Email_User);
  console.log(process.env.Email_Pass)
  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: process.env.Email_User,
      pass: process.env.Email_Pass
    },
    
  });

  const mailOptions = {
    from: process.env.Email_User,
    to: process.env.Email_User,
    subject: "Contact from portfolio",
    text: `From: ${username} (${email})\n\nMessage: ${userMessage}`,
    replyTo: email,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info.response);
    return NextResponse.json({message:info.response},{status:200});
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({err},{status:400});
  }
}