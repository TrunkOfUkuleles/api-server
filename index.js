'use strict';

const server = require('./src/server.js');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3333;

dotenv.config();

server.start(PORT);
