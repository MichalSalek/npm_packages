"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
var tslib_1 = require("tslib");
var mail_1 = tslib_1.__importDefault(require("@sendgrid/mail"));
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
var sendEmail = function (msg) {
    mail_1.default
        .send(msg)
        .then(function () {
        console.log('Email sent');
    })
        .catch(function (error) {
        console.error(error);
    });
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map