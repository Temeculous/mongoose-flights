var express = require("express");
var router = express.Router();
var flightsCtrl = require("../controllers/flights");

/* GET home page. */
router.get("/", async function (req, res, next) {
  var flights = await flightsCtrl.getAllFlights();
  res.render("index", { title: "Flights", flights });
});

module.exports = router;
