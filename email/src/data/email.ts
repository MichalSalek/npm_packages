import { sendEmailSendGrid, SendgridAPI } from './sendGrid.integration'




export type SendEmail = {
    to: SendgridAPI['to']
    subject: SendgridAPI['subject']
    text: SendgridAPI['text']
    html?: SendgridAPI['html']
}



export const sendEmail = async (payload: SendEmail, VERIFIED_SENDER: string): Promise<void> => {

    try {
        await sendEmailSendGrid({
            from: VERIFIED_SENDER,
            html: payload.html,
            to: payload.to,
            text: payload.text,
            subject: payload.subject
        })

        console.log('@msalek/emails: Email sent.',
            `from: ${VERIFIED_SENDER}, to: ${payload.to}, subject: ${payload.subject}`)

        return Promise.resolve()
    } catch (error: any) {

        console.error('@msalek/emails: Error:')
        console.error(error)

        return Promise.reject(error)
    }
}
