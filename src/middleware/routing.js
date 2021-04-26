'use strict';

const route = (req, res, next) => {

    if (req.body.type){
        console.log(req.route)
        req.route += `/${req.body.type}`
        next()
    }else{
        next()
    }
}

module.exports = route;