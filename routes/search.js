const express = require("express");
const route = express.Router();
const pool = require("../db");

route.use((req, res, next) => {
  console.log("Search Middleware");
  next();
});

module.exports = route;
