'use strict';


module.exports = (err, req, res) =>{
    res.status(500).send({"Something Big or Small Happened": err.message})

}