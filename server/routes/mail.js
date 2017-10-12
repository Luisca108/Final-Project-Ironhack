const express = require("express");
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');

var done = []

router.post("/search", (req, res, next) => {
    console.log(req.body);
    const mail = {
        name: req.body.name,
        email: req.body.email
    }
    console.log(mail);

    var text = 'Hello world from \n\n' + req.body.name;
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '	surprisetrip108@gmail.com', // Your email id
            pass: 'ironhack12345' // Your password
        }
    });
    var mailOptions = {
        from: '	surprisetrip108@gmail.com', // sender address
        to: req.body.email, // list of receivers
        subject: 'Surprise!', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ yo: 'error' });
        } else {
            console.log('Message sent: ' + info.response);
            res.json({ yo: info.response });
        };
    });
});
module.exports = router;
