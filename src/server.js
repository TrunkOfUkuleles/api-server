'use strict';

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const MONGODB_URI =  'mongodb://localhost:27017/books'
//process.env.MONGODB_URI ||
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(MONGODB_URI, options);

const logger = require("./middleware/logger.js");
// const validator = require("./middleware/validator.js");

const bookRoute  = require('./routes/book-route.js');
// const snackRoute = require('./routes/book-route.js');
const errorHandler = require('./error-handlers/500.js')
const notFound = require('./error-handlers/404.js')

app.use(express.json());
app.use(logger);

app.use(bookRoute);
// app.use(snackRoute);


app.get("/", (req, res) => {
  res.status(200).send("here we go again");
});


app.use("*", notFound);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`server up on: ${port}`));
        }
      }