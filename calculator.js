const express = require("express");
const app = express();

// Home route
app.get("/", function(req, res) {
  res.send("Hello world!");
});

// Spin up on localhost:3000
app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});