'use strict';

const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
    title: {type: String},
    author: {type: String},
    type: {type: String, uppercase: true, enum:['BOOK', 'SNACK', 'GAME']},
});

const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;