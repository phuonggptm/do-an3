var mongoose = require("mongoose");
var random = require('mongoose-simple-random');
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
Property.plugin(random);
module.exports = mongoose.model("Property", Property)
