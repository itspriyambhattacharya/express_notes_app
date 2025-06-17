const express = require("express");
const route = express.Router();
const db = require("../db");
const pool = require("../db");

route.use((req, res, next) => {
  console.log("Index Middleware");
  next();
});

route.get("/", (req, res) => {
  const sql = `SELECT * FROM note`;
  pool.query(sql, (err, results, fields) => {
    if (err) {
      console.log("Database insertion failed", err.message);
      return res.status(500).send("Insertion Failed");
    }
    res.render("index", { noteObj: results });
  });
});

route.post("/", (req, res) => {
  const { noteHeading, noteDescription } = req.body;
  const val = [noteHeading, noteDescription];

  const sql = `INSERT INTO note (noteHeading, noteDesc) VALUES (?, ?)`;
  pool.query(sql, val, (err, results, fields) => {
    if (err) {
      console.log("Database insertion failed", err.message);
      return res.status(500).send("Insertion Failed");
    }
    console.log("Insertion successful", results.insertId);
  });
});

module.exports = route;
