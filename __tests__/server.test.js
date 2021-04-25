'use strict';

const {server} = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('WEB SERVER:', () => {

 

  it('should respond with a 404 on not found', async () => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond with a 500 on an error', () => {
    return mockRequest.put('/books/draw').then(data => {
        expect(data.status).toBe(500);
});
  });
  
  it('should create a new item in the DB', async () => {
    const ressy = await mockRequest.post('/books').send({title: "Test1", author: "testMan1", type: "BOOK"})
    expect(ressy.status).toBe(201);
  //  expect(ressy.body.title).toEqual("Test1");
  });

  it('should get all from DB', async () => {
    let db = await mockRequest.get('/books')
    expect(db.status).toBe(200);
  });

  

  it('should get one item from the DB', async () => {
    let tBook = await mockRequest.post('/books').send({ title: "test", author:"1 from db", type: "BOOK"})
    let id = tBook.body._id
    let getter = await mockRequest.get(`/books/${id}`)
    expect(getter.body._id).toEqual(id)
    
  });

 

  it('should update an item in the DB', async () => {
    const newOb = await mockRequest.post('/books').send({title: "Test1", author: "testMan1", type: "BOOK"})
    const who = newOb.body._id
    const updated = await mockRequest.put(`/books/${who}`).send({title: "updateMan", author: "whoCan", type: "BOOK"})
    expect(updated.status).toBe(202);
    expect(updated.body._id).toEqual(who);
    
  });

  it('should delete an item in the DB', async () => {
    const newOb = await mockRequest.post('/books').send({title: "Testdel", author: "delMan", type: "BOOK"})
    const who = newOb.body._id
    await mockRequest.delete(`/books/${who}`).then(data=>{
      expect(data.status).toEqual(202);
  });
});

  it('it should have a second route', async()=>{
    const newOb = await mockRequest.post('/snacks').send({item: "snacker", brand: "delMan", type: "CANDY"})
    const who = newOb.body._id
 

    let db = await mockRequest.get('/snacks')
    expect(db.status).toBe(200);

    let getter = await mockRequest.get(`/snacks/${who}`)
    expect(getter.body._id).toEqual(who)

    const updated = await mockRequest.put(`/snacks/${who}`).send({item: "updateMan", brand: "whoCan", type: "CANDY"})
    expect(updated.status).toBe(202);
    expect(updated.body._id).toEqual(who);
    expect(updated.body.item).toEqual("updateMan")

   await mockRequest.delete(`/snacks/${who}`).then(data=>{
      expect(data.status).toEqual(202);
    })
})
})