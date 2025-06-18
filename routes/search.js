const express = require("express");
const route = express.Router();
const pool = require("../db");

route.use((req, res, next) => {
  console.log("Search Middleware");
  next();
});

route.get("/", (req, res) => {
  const { q } = req.query;
  console.log(req.query);
  console.log(q);

  res.send(`Searched ${q}`);
});

module.exports = route;
