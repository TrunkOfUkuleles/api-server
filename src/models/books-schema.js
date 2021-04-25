'use strict';

const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
    title: {type: String, required: true },
    author: {type: String, required: true },
    type: {type: String, uppercase: true, enum:['BOOK', 'SNACK', 'GAME']},
});

const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;