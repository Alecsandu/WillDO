const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/Styles"));
app.use(express.static(__dirname + "/Scripts"));
app.use(express.static(__dirname + "/Images"));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(8080);
