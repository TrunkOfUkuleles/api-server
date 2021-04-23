'use strict';

const validator = (req, res, next) => {
   if (req.query.title){
      next()
   }else{
      res.status(500).send("Gimme a TITLE")
   }

}

module.exports = validator;