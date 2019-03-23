var mongoose = require("mongoose");

var Property = mongoose.Schema({
   
    img : {type: Array},
    num: {type:Number},
    name: {type: String},
    type: {type: String},
    size: {type: String},
    price: {type: Number },
    dis : {type: String},
    title: {type: String}

})

module.exports = mongoose.model("Property", Property)