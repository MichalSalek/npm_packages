import sendgrid from '@sendgrid/mail'




export const setApiKey = (API_KEY: string) => sendgrid.setApiKey(API_KEY)



export type SendEmail = {
    subject: string
    text: string
}

// 'from' key is mandatory in sendgrid and must be verified at sendgrid website.

export const sendEmail = (msg: SendEmail, VERIFIED_SENDER: string): Promise<void> => {

    try {
        sendgrid.send({...msg, from: VERIFIED_SENDER})

        console.log('@msalek/emails: Email sent.')

        return Promise.resolve()
    } catch (error: any) {

        console.error('@msalek/emails: Error:')
        console.error(error)

        return Promise.reject()
    }
}
