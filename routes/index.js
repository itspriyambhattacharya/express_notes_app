const express = require("express");
const route = express.Router();

route.use((req, res, next) => {
  console.log("Index Middleware");
  next();
});

route.get("/", (req, res) => {
  res.render("index");
});

module.exports = route;
