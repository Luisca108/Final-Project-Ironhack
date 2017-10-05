const express = require("express");

const path = require("path");

const router = express.Router();
const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(
  "default-application_59d3435be4b04627fc657ae2",
  "8e59c8a7-7106-40fb-bdfa-f3e6b9833ab8"
);



router.post ("/search" , (req, res, next) => {
    rapid
  .call("GoogleFlightsAPI", "searchSingleTrip", {
    apiKey: "AIzaSyBC1L6z_WHLne1T7V8eIlyc878D4QY-Rp8",
    origin: req.body.origin,
    destination: "BOS",
    passengersAdultCount: req.body.passengers,
    passengersChildCount: "0",
    fromDate: "2017-10-31 00:00:00"
  })
  .on("success", payload => {
    res.status(200).json(payload);
  })
  .on("error", payload => {
    /*YOUR CODE GOES HERE*/
  });
  
})

module.exports = router;