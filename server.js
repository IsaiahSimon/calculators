const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // parse data from html form

// Spin up on localhost:3000
app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});

// Home route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Basic Calculator routes
app.get("/basic-calc", function(req, res) {
  res.sendFile(__dirname + "/basic-calc.html");
});

app.post("/basic-calc", function(req, res) {
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);
  let result = num1 + num2;

  res.send(`The result of the calculation is ${result}`);
});

// BMI Calculator routes
app.get("/bmi-calc", function(req, res) {
  res.sendFile(`${__dirname}/bmi-calc.html`);
});

app.post("/bmi-calc", function(req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight / (height * height);

  res.send(`Your BMI is ${bmi}`);
});