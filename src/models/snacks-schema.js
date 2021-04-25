'use strict';

const mongoose = require('mongoose');


const snackSchema = mongoose.Schema({
    item: {type: String, required: true },
    brand: {type: String, required: true },
    type: {type: String, uppercase: true, enum:['CANDY', 'CHIPS', 'DRINKS']},
});

const snackModel = mongoose.model('snack', snackSchema);

module.exports = snackModel;