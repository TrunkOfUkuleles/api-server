'use strict';

const express = require('express');
const OverClass = require('../models/data-collection-class.js');
const Snacks = require('../models/snacks-schema.js');
const store = new OverClass(Snacks);

const foodRouter = express.Router();

// RESTful routes

// http://localhost:3333/things
foodRouter.get('/snacks', getSnacks);
foodRouter.get('/snacks/:id', getASnack);
foodRouter.post('/snacks', createSnacks)
foodRouter.put('/snacks/:id', updateSnack);
foodRouter.delete('/snacks/:id', deleteSnack);

async function getSnacks(req, res) {
    let getAllOfEm = await store.read();
    res.status(200).json(getAllOfEm);
  }
  
  async function getASnack(req, res) {
    const id = req.params.id;
    let one = await store.read(id);
    res.status(200).json(one);
  }
  
  async function createSnacks(req, res) {
    let content = req.body;
    let testCreation = await store.create(content);
    res.status(201).json(testCreation);
  }
  
  async function updateSnack(req, res) {
    // placeholder for now
    let updated = req.body;
    let id = req.params.id;
    let updatedSnack = await store.update(id, updated)
    res.status(202).json(updatedSnack)
  }
  
  async function deleteSnack(req, res) {
    let id = req.params.id;
    await store.delete(id);
    res.status(202).send({msg: 'food item deleted'});
  }
  
  module.exports = foodRouter;