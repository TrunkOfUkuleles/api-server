// 'use strict';

// require('@code-fellows/supergoose');

// const OverClass = require('../src/models/data-collection-class.js');
// const book = new OverClass();

// describe("Bookly Actions", () => {


//     it("can create() a book", () =>{
//         let data = {title:"The first installment", author:"a real swell guy", type: "BOOK"}
//         let exp = {title:"The first installment", author:"a real swell guy", type: "BOOK"}
//         return book.create(data)
//             .then(tome => {
//                 Object.keys(tome).forEach(itm => {
//                     expect(record[itm]).toEqual(exp[itm])
//                 })
                
//             })
//     })

//     //read 

//     it("can read from the db", () =>{
//         let data2 = {title:"The first prestallment", author:"a real okay guy", type: "BOOK"}
//         let exp = {title:"The first prestallment", author:"a real okay guy", type: "BOOK"}
//         return books.create(data2)
//             .then(item => {
//                 return books.read(record._id)
//                     .then(smlbk=>{
//                         Object.keys(smlbk).forEach(itm => {
//                             expect(record[itm]).toEqual(exp[itm])
//                     })
//             })
//     })

// })

//     it("can read the whole db", () =>{
//             return books.read({})
//                 .then(db =>{
//                     expect(db.length).toEqual(2);
//         })
// })

//     // UPdate

//     it("can update a book by id", () => {

//         let target = books.read({})
//             .then(res =>{
//                 return res._id
//             })
//         return books.findByIdAndUpdate(target, {title:"The second poststallment", author:"no one", type: "BOOK"})
//         .then(res =>  {
//             expect(res.author).toEqual("no one")
//         })
//     })

//     //Delete

//     it('Can delete a book',() =>{
//         let killMe = books.read({})
//             .then(res =>{
//                 return res._id
//             })
//         return books.findByIdAndDelete(target)
//         .then(res =>  {
//             expect(res).toEqual(null)
//         })

//     })

// })