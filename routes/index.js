const express = require("express");
const route = express.Router();
const db = require("../db");

route.use((req, res, next) => {
  console.log("Index Middleware");
  next();
});

route.get("/", (req, res) => {
  res.render("index");
});

module.exports = route;
