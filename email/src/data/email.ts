import sendgrind from '@sendgrid/mail'


export const setApiKey = (API_KEY: string) => sendgrind.setApiKey(API_KEY)


export const sendEmail = (msg: any, VERIFIED_SENDER: string) => {
    sendgrind
        .send({...msg, from: VERIFIED_SENDER})
        .then(() => {
            console.log('Email sent')
        })
        .catch((error: any) => {
            console.error(error)
        })
}

