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

  const sql = `SELECT * FROM note WHERE noteHeading LIKE ? or noteDesc LIKE ?`;

  const wildCard = `%${q}%`;

  pool.query(sql, [wildCard, wildCard], (err, results, fields) => {
    if (err) {
      console.log("No Match found ", err.message);
      return;
    }
    res.render("index", { noteObj: results });
  });
});

module.exports = route;
