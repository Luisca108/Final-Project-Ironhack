const express = require("express");
const path = require('path');
const router = express.Router();
const Travel = require('../models/Travel');

const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(
  "default-application_59d3435be4b04627fc657ae2",
  "8e59c8a7-7106-40fb-bdfa-f3e6b9833ab8"
);

const destinations = ['BCN', 'BER', "FRA", "VIE", "BRU", "ZRH", "PRG", "CPH", "MRS", "MUC", "BUD", "ROM", "NAP", "AMS", "WAW", "LON", "STO"];
var result =[]
var prices = []

router.post ("/search" , (req, res, next) => {
  result = []
  console.log(req.body);
  var i = Math.floor((Math.random()* destinations.length));
  console.log(destinations[i])
  result.push(destinations[i])
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
    console.log(payload.trips.tripOption[0].saleTotal)

    i = Math.floor((Math.random() * destinations.length));
    console.log("segunda busqueda a " + destinations[i])
    result.push(destinations[i])
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
      .on("success", payload2 => {
        console.log(payload2.trips.tripOption[0].saleTotal)
        i = Math.floor((Math.random() * destinations.length));
        console.log("tercera busqueda a " + destinations[i])
        result.push(destinations[i])

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
      .on("success", payload3 => {
      
        result.push(payload.trips.tripOption[0].saleTotal, payload2.trips.tripOption[0].saleTotal, payload3.trips.tripOption[0].saleTotal)
        console.log(result)
        res.status(200).json(result)
      })
      .on("error", payload3 => {
        res.status(500).json(payload)
      });
      })
      .on("error", payload2 => {
        res.status(500).json(payload)
      });

  })
  .on("error", payload => {
    res.status(500).json(payload)
  });
})

router.post("/newtravel", (req, res, next) => {
  console.log('entramos al back')
  console.log(req.body)
  const newTravel = new Travel({
    origin: req.body.origin,
    destination:  req.body.destination,
    passengersAdultCount: req.body.passengers,
    fromDate: req.body.startDate,
    toDate: req.body.endDate,
    maxPrice: req.body.maxPrice,
    finalPrice: req.body.finalPrice
  })
  console.log(newTravel);
  newTravel.save((err) => {
    if (err) {
      return err;
      console.log(err)
    } else {
      console.log("ok")
      res.status(200).json(newTravel)
    }
  });
});


module.exports = router;