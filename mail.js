const mailer = require('nodemailer');
const { Hello } = require("./hello_template");
const { Thanks } = require('./thanks_template');



const sendEmail = (to, name, type) => {
    const smtpTransport = mailer.createTransport({
        host: 'jarrodg.dev',
        port: 993,
        auth: {
            user: "jarrod.goodney@jarrodg.dev",
            pass: "Jarrodwg1996ymym"
        }
    })

    const mail = getEmailData(to, name, type)


    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log('email sent successfully');
        }
        smtpTransport.close();
    })
}

module.exports = { sendEmail }