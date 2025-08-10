const path = require("path");
const express = require("express");

const app = express();

// Parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up public static files
app.use(express.static(path.join(__dirname, "public")));

// Setting up ejs for frontend
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

// Dynamic routing
app.get("/profile/:username", (req, res) => {
  res.send(`Welcome , ${req.params.username}`);
});


app.get("/author/:username/:age", (req, res) => {
  res.send(`Welcome , ${req.params.username}`);
});


app.listen(3000);
