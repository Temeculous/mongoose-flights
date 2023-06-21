const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  airport: {
    type: String,
    default: "DEN",
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  flightNo: {
    type: Number,
    range: [10, 9999],
  },
  departs: {
    type: Date,
    default: new Date(6 / 20 / 2024),
  },
});

module.exports = mongoose.model("Flight", flightSchema);
