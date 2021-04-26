'use strict';

// const server = require('../src/server.js');
const mongoose = require('mongoose');
// const supertest = require('supertest');
// const mockRequest = supertest(server);
require('dotenv').config();


describe('WEB SERVER:', () => {

  // let connection;
  let db;

  beforeAll(async () => {
    let options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    db = await mongoose.connect(process.env.MONGO_URL, options);
    // db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should respond with a 404 on not found', async () => {
    return db.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond with a 500 on an error', () => {
    return db.put('/books/draw').then(data => {
        expect(data.status).toBe(500);
});
  });
  
  it('should create a new item in the DB', async () => {
    let books = db.collection('books');
    await books.insertOne(mockUser);
    const insertedUser = await users.findOne({_id: 'some-user-id'});
    
    expect(insertedUser.status).toBe(201);
  //  expect(ressy.body.title).toEqual("Test1");
  });

  it('should get all from DB', async () => {
    let db = await db.get('/books')
    expect(db.status).toBe(200);
  });

  

  it('should get one item from the DB', async () => {
    let tBook = await db.post('/books').send({ title: "test", author:"1 from db", type: "BOOK"})
    let id = tBook.body._id
    let getter = await db.get(`/books/${id}`)
    expect(getter.body._id).toEqual(id)
    
  });

 

  it('should update an item in the DB', async () => {
    const newOb = await db.post('/books').send({title: "Test1", author: "testMan1", type: "BOOK"})
    const who = newOb.body._id
    const updated = await db.put(`/books/${who}`).send({title: "updateMan", author: "whoCan", type: "BOOK"})
    expect(updated.status).toBe(202);
    expect(updated.body._id).toEqual(who);
    
  });

  it('should delete an item in the DB', async () => {
    const newOb = await db.post('/books').send({title: "Testdel", author: "delMan", type: "BOOK"})
    const who = newOb.body._id
    await db.delete(`/books/${who}`).then(data=>{
      expect(data.status).toEqual(202);
  });
});

  it('it should have a second route', async()=>{
    const newOb = await db.post('/snacks').send({item: "snacker", brand: "delMan", type: "CANDY"})
    const who = newOb.body._id
 

    let db = await db.get('/snacks')
    expect(db.status).toBe(200);

    let getter = await db.get(`/snacks/${who}`)
    expect(getter.body._id).toEqual(who)

    const updated = await db.put(`/snacks/${who}`).send({item: "updateMan", brand: "whoCan", type: "CANDY"})
    expect(updated.status).toBe(202);
    expect(updated.body._id).toEqual(who);
    expect(updated.body.item).toEqual("updateMan")

   await db.delete(`/snacks/${who}`).then(data=>{
      expect(data.status).toEqual(202);
    })
})
})