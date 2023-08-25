# Emails layer

### Helper package for keep output mailing service layer. 
Helpful bridge with an external provider.


## Usage:
`setApiKey = (API_KEY: string) => void` - Register provider account.    
  

`sendEmail = (msg: SendEmail, VERIFIED_SENDER: string) => Promise<void>` - Just send email. `VERIFIED_SENDER` is a `from` field - must be verified at the provider website.

You can import type from package as well to know a payload model.

###### Source code: [GitHub](https://github.com/MichalSalek/npm_packages/tree/master/email)
