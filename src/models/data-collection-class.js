
'use strict';

class OverClass {
    constructor(Smodel){
        this.model = Smodel;
        }

        create(obj){
            let newBook = this.model(obj)
            return newBook.save();
        }

        read(_id){
            if (_id) {
                return this.model.findOne({ _id });
              } else {
                return this.model.find({});
              }
        }

        update(_id, obj){
            return this.model.findByIdAndUpdate(_id, obj, {new: true, useFindAndModify: false})
        }

        delete(_id){
            return this.model.findByIdAndDelete(_id, { useFindAndModify: false});
        }

}

module.exports = OverClass