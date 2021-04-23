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
    return mockRequest.get('/person?notName=notFred').then(data => {
        expect(data.status).toBe(500);
});
  });
  
  it('should create a new item in the DB', async () => {
    const ressy = await mockRequest.post('/books').send({title: "Test1", author: "testMan1"})
    expect(ressy.req.data).toEqual("Test1")
   
  });

  it('should get all from DB', async () => {
    let db = await mockRequest.get('/books')
    expect(db.req.data.length).toEqual(1);

  });

  

  it('should get one item from the DB', async () => {
    let getter = await mockRequest.get('/books/0')
    expect(getter.req.data.title).toEqual("Test1")
    
  });

 

  it('should update an item in the DB', async () => {
     mockRequest.put('/books/0').send({title: "Test1updated", author: "testMan1updated"})
      return mockRequest.get('/books/0').then(data=>{
        expect(data.req.data.author).toEqual("testMan1updated")
    });
  });

  it('should delete an item in the DB', async () => {
    mockRequest.delete('/books/1')
    return mockRequest.get('/books/0').then(data=>{
      expect(data.req.data).toEqual(undefined)
  });


})
})