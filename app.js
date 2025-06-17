const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const HOST = "0.0.0.0";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const idx = require("./routes/index");
const del = require("./routes/delete");
const search = require("./routes/search");

app.use("/", idx);
app.use("/delete", del);
app.use("/search", search);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
