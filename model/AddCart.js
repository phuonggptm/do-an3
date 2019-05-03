var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var AddCart = new Schema({
 
  user		: {type: Object},
  date		: {type: String},
  sum   	:{type: Number},
  cart   	: { type: Object},
  trangthai : {type: String}
});

module.exports = mongoose.model('AddCart', AddCart);
module.exports.createCart = function(newCart,callback){
	
		newCart.save(callback);
}