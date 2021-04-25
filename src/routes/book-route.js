'use strict';

const express = require('express');
const OverClass = require('../models/data-collection-class.js');
const Books = require('../models/books-schema.js');
const library = new OverClass(Books);

const bookRouter = express.Router();

// RESTful routes

// http://localhost:3333/things
bookRouter.get('/books', getBooks);
bookRouter.get('/books/:id', getABook);
bookRouter.post('/books', createBook)
bookRouter.put('/books/:id', updateBook);
bookRouter.delete('/books/:id', deleteBook);

async function getBooks(req, res) {
    let getAllOfEm = await library.read();
    res.status(200).json(getAllOfEm);
  }
  //parseInt(req.params.id)
  async function getABook(req, res) {
    const id = req.params.id;
    let one = await library.read(id);
    res.status(200).json(one)
  }
  
  async function createBook(req, res) {
    let content = req.body;
    console.log("CREATING: ", content)
    let testCreation = await library.create(content);
    res.status(201).json(testCreation);
  }
  
  async function updateBook(req, res) {
    // placeholder for now
    let id = req.params.id;
    let updated = req.body;
    console.log("UPDATE: ", updated, id)
    let updatedBook = await library.update(id, updated)
    res.status(202).json(updatedBook)
  }
  
  async function deleteBook(req, res) {
    // placeholder for now
    const id = req.params.id;
    await library.delete(id);
    res.status(202).send({msg: 'Book deleted'});
  }
  
  module.exports = bookRouter;