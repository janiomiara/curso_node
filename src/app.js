const express = require('express');
const config = require("./config/config");
const bodyParser = require('body-parser');
const db = require('./config/db')
const app = express();
const {port} = config

app.use(bodyParser.json());

db.on("connected", function () {
  console.log("connected!");
});

db.on("disconnected", function () {
  console.log("disconnected!");
});

db.on("error", function (error) {
  console.log('Connection error: ' + error);
});



require('./config/routes')(app);

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});