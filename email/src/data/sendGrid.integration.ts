import sendgrid from '@sendgrid/mail'
import Response from "@sendgrid/helpers/classes/response";



export const setApiKey = (API_KEY: string) => sendgrid.setApiKey(API_KEY)


export type SendgridAPI = {
    to: string // recipient
    from: string // verified sender
    subject: string // email topic
    text: string // email body
    html?: string  // email body with html
}

// 'from' key is mandatory in sendgrid and must be verified at sendgrid website.

export const sendEmailSendGrid = async (payload: SendgridAPI): Promise<[Response, {}]> => {
    return sendgrid.send(payload)
}
