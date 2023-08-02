import sendgrid from '@sendgrid/mail'




export const setApiKey = (API_KEY: string) => sendgrid.setApiKey(API_KEY)


// 'from' key is mandatory in sendgrid and must be verified at sendgrid website.

export const sendEmail = (msg: any, VERIFIED_SENDER: string) => {
    sendgrid
        .send({...msg, from: VERIFIED_SENDER})
        .then(() => {
            console.log('@msalek/emails: Email sent.')
        })
        .catch((error: any) => {
            console.error('@msalek/emails: Error:')
            console.error(error)
        })
}
