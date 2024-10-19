import nodemailer from 'nodemailer'
export async function SendEmail(username:string,email:string,userMessage:string){
    console.log(process.env.Email_User)
 const transporter=nodemailer.createTransport({
    secure:false,
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:process.env.Email_User,
        pass:process.env.Email_Pass
    }
 })
 const mailOptions={
    from:process.env.Email_User,
    to:process.env.Email_User,
    subject:"Contact from portofolio",
    text:userMessage,
    replyTo: email,
 }
 try{
    const info= await transporter.sendMail(mailOptions)
    console.log(info.response)
 }catch(err){
    console.log(err)
    return
 }
}