'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_ATLAS =  process.env.MONGO_URL
// const MONGODB_URI = process.env.MONGODB_LOCAL
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(MONGO_ATLAS, options);
const logger = require("./middleware/logger.js");
const route = require("./middleware/routing.js");

const bookRoute  = require('./routes/book-route.js');
const foodRouter = require('./routes/snack-route.js');
// const mainRouter = require('./routes/v1.js');

const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

app.use(express.json());
app.use(logger);

app.use(bookRoute);
app.use(foodRouter);
// app.use(route);
// app.use(mainRouter)

// app.get("/", (req, res) => {
//   res.status(200).send("here we go again")
// });


app.use("*", notFound);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        app.listen(port);
        }
      }