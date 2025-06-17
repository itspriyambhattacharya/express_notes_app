const express = require("express");
const route = express.Router();
const pool = require("../db");

route.use((req, res, next) => {
  console.log("Delete Middleware");
  next();
});

route.get("/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const sql = `DELETE FROM note WHERE id = ?`;

  pool.query(sql, [id], (err, results, fields) => {
    if (err) {
      console.log("Deletion Failed");
      return res.status(500).send("Failed to delete");
    }
    console.log(`Deleted note with id = ${id}`);
    res.redirect("/");
  });
});

module.exports = route;
