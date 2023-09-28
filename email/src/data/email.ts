import { sendEmailSendGrid, SendgridAPI } from './sendGrid.integration'




export type SendEmail = {
    to: SendgridAPI['to']
    subject: SendgridAPI['subject']
    text: SendgridAPI['text']
    html?: SendgridAPI['html']
}

export const sendEmail = async (payload: SendEmail, VERIFIED_SENDER: string): Promise<void> => {

    const createActionID = Math.round(Math.random() * 100000)
    const consoleLogEnhancement = `from: ${VERIFIED_SENDER}, to: ${payload.to}, subject: ${payload.subject}`

    console.info('@msalek/emails: sendEmail BEGIN... ID of action: ', createActionID)
    console.info(consoleLogEnhancement)

    try {
        await sendEmailSendGrid({
            from:    VERIFIED_SENDER,
            html:    payload.html,
            to:      payload.to,
            text:    payload.text,
            subject: payload.subject
        })

        console.info('@msalek/emails: Email sent.')

        await Promise.resolve()
    } catch (error: any) {

        console.error('@msalek/emails: Error:')
        console.error(error)

        await Promise.reject(error)
    }

    console.info('@msalek/emails: sendEmail END. ID of action: ', createActionID)
}
