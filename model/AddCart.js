var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var AddCart = new Schema({
 
  user		: {type:  String},
  msg		: {type: String },
  ngay		: {type: String},
  tong   	:{type: Number},
  cart   	: { type: Object},
  trangthai : {type: String}
});

module.exports = mongoose.model('AddCart', AddCart);
module.exports.createCart = function(newCart,callback){
	
		newCart.save(callback);
}