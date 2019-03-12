var mongoose = require("mongoose");
var bcrypt = require('bcryptjs')
var Schema = mongoose.Schema({
    name:{ type: String, index:true},
    email:{ type: String},
    address: {type: String},
    phone: {type: Number},
    password: {type: String},
    type: {type: String}
})

var User = module.exports = mongoose.model('User',Schema);

module.exports.getUserById = function(id,callback){
    User.findById(id,callback)
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash,function(err,res){
        callback(null,isMatch)
    })
}

module.exports.createUser = function(newUser,callback){
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(newUser.password,salt,function(err,hash){
            newUser.password = hash;
                newUser.save(callback);
            });   
    });
}