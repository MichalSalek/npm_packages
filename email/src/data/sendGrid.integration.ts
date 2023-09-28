import Response from '@sendgrid/helpers/classes/response'
import sendgrid from '@sendgrid/mail'




export const setApiKey = (API_KEY: string) => {
    sendgrid.setApiKey(API_KEY)
    console.info('@msalek/emails: sendgrid API_KEY set!')
}

// 'from' key is mandatory in sendgrid and must be verified at sendgrid website.
//
export type SendgridAPI = {
    to: string // recipient
    from: string // verified sender
    subject: string // email topic
    text: string // email body
    html?: string  // email body with HTML
}

export const sendEmailSendGrid = async (payload: SendgridAPI): Promise<[Response, {}]> => {
    console.info('@msalek/emails: sendEmailSendGrid payload:')
    console.info(payload)
    return sendgrid.send(payload)
}
