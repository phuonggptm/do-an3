var mongoose = require("mongoose");

var Property = mongoose.Schema({
    img : {type: Array},
    address: {type:String},
    area: {type: String},
    price: {type: Number },
    dis : {type: String}

})

module.exports = mongoose.model("Property", Property)