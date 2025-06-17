const express = require("express");
const route = express.Router();
const pool = require("../db");

route.use((req, res, next) => {
  console.log("Search Middleware");
  next();
});

route.get("/", (req, res) => {
  const { search } = req.query;
  console.log(search);

  res.send(`Searched ${search}`);
});

module.exports = route;
