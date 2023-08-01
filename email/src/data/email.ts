import sendgrind from '@sendgrid/mail'




sendgrind.setApiKey(process.env.SENDGRID_API_KEY as string)





export const sendEmail = (msg: any) => {
    sendgrind
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error: any) => {
            console.error(error)
        })
}

