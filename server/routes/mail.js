const express = require("express");
const path = require('path');
const router = express.Router();

var done = []

router.post("/search", (req, res, next) => {
    console.log(req.body);
    const mail = {
        name: req.body.name,
        email: req.body.email
    }
    console.log(mail);
});
module.exports = router;
