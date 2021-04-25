'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
// const MONGO_ATLAS =  process.env.MONGO_ATLAS
const MONGODB_URI = process.env.MONGODB_URI
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(MONGODB_URI, options);
const logger = require("./middleware/logger.js");


const bookRoute  = require('./routes/book-route.js');
const foodRouter = require('./routes/snack-route.js');

const errorHandler = require('./error-handlers/500.js')
const notFound = require('./error-handlers/404.js')

app.use(express.json());
app.use(logger);

app.use(bookRoute);
app.use(foodRouter);


app.get("/", (req, res) => {
  res.status(200).send("here we go again")
});


app.use("*", notFound);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`server up on: ${port}`));
        }
      }