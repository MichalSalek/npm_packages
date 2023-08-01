import sendgrind from '@sendgrid/mail';
sendgrind.setApiKey(process.env.SENDGRID_API_KEY);
export var sendEmail = function (msg) {
    sendgrind
        .send(msg)
        .then(function () {
        console.log('Email sent');
    })
        .catch(function (error) {
        console.error(error);
    });
};
//# sourceMappingURL=email.js.map