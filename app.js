const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/scripts"));
app.use(express.static(__dirname + "/images"));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(8080);
