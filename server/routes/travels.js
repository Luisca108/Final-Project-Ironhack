const express = require("express");

const path = require('path');

const router = express.Router();
const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(
  "default-application_59d3435be4b04627fc657ae2",
  "8e59c8a7-7106-40fb-bdfa-f3e6b9833ab8"
);

const destinations = ['BCN', 'BER', "PAR", "VIE", "BRU", "SOF", "PRG", "CPH", "MRS", "MUC", "BUD", "ROM", "NAP", "AMS", "WAW", "LON", "STO"];


router.post ("/search" , (req, res, next) => {
  console.log(req.body);
  var i = Math.floor((Math.random()* destinations.length));
console.log(destinations[i])
rapid.call('GoogleFlightsAPI', 'searchSingleTrip', {
  'apiKey': 'AIzaSyBC1L6z_WHLne1T7V8eIlyc878D4QY-Rp8',
    origin: req.body.origin,
    destination: destinations[i],
    passengersAdultCount: req.body.passengers,
    passengersChildCount: "0",
    fromDate: req.body.startDate,
    toDate: req.body.endDate,
    maxPrice: req.body.maxPrice
  })
  .on("success", payload => {
    res.status(200).json(payload)
  })
  .on("error", payload => {
    res.status(500).json(payload)
  });
})

module.exports = router;