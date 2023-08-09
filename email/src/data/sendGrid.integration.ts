import sendgrid from '@sendgrid/mail'




export const setApiKey = (API_KEY: string) => sendgrid.setApiKey(API_KEY)


export type SendgridAPI = {
    to: string // recipient
    from: string // verified sender
    subject: string // email topic
    text: string // email body
    html: string  // email body with html
}

// 'from' key is mandatory in sendgrid and must be verified at sendgrid website.

export const sendEmailSendGrid = async (payload: SendgridAPI): Promise<void> => {
    try {
        await sendgrid.send(payload)
        return Promise.resolve()
    } catch (e) {
        return Promise.reject(e)
    }
}
