var mongoose = require("mongoose");
var random = require('mongoose-simple-random');
var Property = mongoose.Schema({
   
    img : {type: Array},
    num: {type:Number},
    name: {type: String},
    type: {type: Number},
    product: {type: String},
    price: {type: Number},
    dis : {type: String},
    author: {type: String},
    views: {type: Number},
    buy: {type: Number},
    size: {type: String},
    page: {type:Number},
    weight:{type:Number}

})
Property.plugin(random);
module.exports = mongoose.model("Property", Property)
