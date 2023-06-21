var express = require("express");
var router = express.Router();

const flightCtrl = require("../controllers/flights");

/* GET Flights */
router.get("/", flightCtrl.index);
// GET new Flight Page
router.get("/new", flightCtrl.getNew);
// POST new Flight
router.post("/", flightCtrl.addNew);

module.exports = router;
