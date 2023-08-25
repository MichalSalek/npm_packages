# Emails end layer

Helper package for keep output mailing service layer. 
Helpful bridge with an external provider handling.


## Usage:
#### SendGrid:
1. `setApiKey = (API_KEY: string) => void` - Register provider account.

1. `sendEmail = (msg: SendEmail, VERIFIED_SENDER: string) => Promise<void>` - Just send email. `VERIFIED_SENDER` is a `from` field - must be verified at the provider website.

All edge types `.d.ts` are possible to import.

###### Source code: [GitHub](https://github.com/MichalSalek/npm_packages/tree/master/email)
