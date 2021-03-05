const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());





app.post("/api/sendMail", (req, res) => {
    console.log(req.body);

    const output = `
    <p>You have a new Contact Request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message:</h3>
    ${req.body.message}`;


    let transporter = nodemailer.createTransport({
        host: "jarrodg.dev",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.USERNAME || process.env.USER, // generated ethereal user
          pass: process.env.PASSWORD || process.env.PASS, // generated ethereal password
        },
      });

      let info = transporter.sendMail({
        from: '"Nodemailer Contact" <jarrod.goodney@jarrodg.dev>', // sender address
        to: "jarrod.goodney@gmail.com", // list of receivers
        subject: "Node Contact Request", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
      });
      
      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 
})

// Serve static assets
if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("SERVER RUNNING AT 5000");
})