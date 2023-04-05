const nodemailer = require('nodemailer');
const { NODE_EMAIL_ACCOUNT } = require('./constants');
const sendEmailService = async (allPayload = {}) => {
    const { from, to, subject, htmlText, res } = allPayload;
    const testAccount = await nodemailer.createTestAccount();
    const transporter = await nodemailer.createTransport({
        // config mail server
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount?.user, //Tài khoản gmail vừa tạo
            pass: testAccount?.pass, //Mật khẩu tài khoản gmail vừa tạo
        },
    });
    const content = `
    <div style="padding: 10px; background-color: #003375">
        <div style="padding: 10px; background-color: white;">
            <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
            <span style="color: black">Đây là mail test</span>
        </div>
    </div>`;

    const mailOptions = {
        // thiết lập đối tượng, nội dung gửi mail
        from: from ?? NODE_EMAIL_ACCOUNT.USER_NAME,
        to,
        subject,
        html: htmlText ?? content,
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            res.status(400).send({
                statusCode: 400,
                message: err,
            });
        } else {
            res.status(200).send({
                statusCode: 200,
                message: 'success',
            });
        }
    });
};

module.exports = {
    sendEmailService,
};
