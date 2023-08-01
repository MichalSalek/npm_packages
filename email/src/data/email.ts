import sendgrind from '@sendgrid/mail'


export const setApiKey = (API_KEY: string) => sendgrind.setApiKey(API_KEY)


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

