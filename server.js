const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:9001");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
