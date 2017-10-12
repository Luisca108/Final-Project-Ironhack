const express = require("express");
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');
const travel =require('../models/Travel')

var done = []

router.post("/search", (req, res, next) => {
travel.find()
 .then(result => {
     console.log(result.destination)
     console.log(req.body);
     const mail = {
         name: req.body.name,
         email: req.body.email,
         destination: req.body.destination,
     }
     console.log(mail);

     var text = 'Hello world from \n\n' + req.body.name + req.body.finalPrice;
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
         html: '<b>We got a surprise for you </b>' + req.body.name +
         '<b>You are going to </b>' + result[0].destination + '<b>!!!</b>'
         //, // plaintext body
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
 
 
    })

});
module.exports = router;
