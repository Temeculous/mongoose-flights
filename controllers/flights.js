const Flight = require("../models/Flight");

module.exports = { index, getNew };

async function index(req, res) {
  const flights = await Flight.find();
  res.render("index", { flights });
}

function getNew(req, res) {
  res.render("flights/new");
}
