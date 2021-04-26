'use strict';

const express = require('express');
const OverClass = require('../models/data-collection-class.js');

const mainRouter = express.Router();

mainRouter.get('api/v1/:model', getBooks);
mainRouter.get('api/v1/:model/:id', getABook);
mainRouter.post('api/v1/:model', createBook)
mainRouter.put('api/v1/:model/:id', updateBook);
mainRouter.delete('api/v1/:model/:id', deleteBook);

const routeModel = require(`../models/books-schema.js`);
const targetDB = new OverClass(routeModel)

async function getBooks(req, res) {
    let getAllOfEm = await targetDB.read();
    res.status(200).json(getAllOfEm);
  }
  //parseInt(req.params.id)
  async function getABook(req, res) {
    const id = req.params.id;
    let one = await targetDB.read(id);
    res.status(200).json(one)
  }
  
  async function createBook(req, res) {
    let content = req.body;
    let testCreation = await targetDB.create(content);
    res.status(201).json(testCreation);
  }
  
  async function updateBook(req, res) {
    let id = req.params.id;
    let updated = req.body;
    let updatedBook = await targetDB.update(id, updated)
    res.status(202).json(updatedBook)
  }
  
  async function deleteBook(req, res) {
    const id = req.params.id;
    await targetDB.delete(id);
    res.status(202).send({msg: 'item deleted'});
  }
  
  module.exports = mainRouter;