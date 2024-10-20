import sgMail from '@sendgrid/mail'

export async function SendMessage(username:string,senderEmail:string,message:string){
    const apikey=process.env.Api_Key
    const authorEmail=process.env.Email_User
    if(!apikey || !authorEmail){
        throw new Error(`invalid api key or email apikey`)
        
    }
    sgMail.setApiKey(apikey as string)
    const messageOption={
        to:authorEmail,
        from: {
            name: "Your Portfolio",  // Make sure the name is formatted correctly
            email: authorEmail       // Use a verified sender email
        },
        replyTo:senderEmail,
        text:message,
        html:`
        <h1>${username}</h1>
        <p>${message}</p>
        `,
        subject:"Contact from portofolio"
    }
    await sgMail.send(messageOption).then((response:object)=>console.log(response)).catch((err:object)=>console.log(err))
}
