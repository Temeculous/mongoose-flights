const Flight = require("../models/Flight");

module.exports = { index, getNew, addNew };

async function index(req, res) {
  const flights = await Flight.find();
  res.render("index", { flights });
}

function getNew(req, res) {
  res.render("flights/new");
}


async function addNew(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Flight.create(req.body);
        res.redirect('/')
    } catch (err) {
        res.render("flights/new", { errMsg: err });
    }
}