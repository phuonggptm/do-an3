var express = require('express');
var router = express.Router();
var Property = require('../model/Property.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.isAuthenticated());
	if(req.isAuthenticated() && (  'admin' === req.user.type)){
		// console.log(req.user);
 	res.render('admin/create',{user : req.user ? req.user : undefined, pro:undefined});
 	}
 	

 	else if(req.isAuthenticated() && 'users' === req.user.type  ){
		 res.redirect('/user')
		
	}
	else{
		
		console.log("trang chu");
		res.render("index.ejs")
		
	}
})

router.get('/admin', function(req,res,next){
	res.render('admin/create')
})


router.get('/user',function(req,res,next){

	
	Property.find(function(er, dat){
		if (er) throw er;
		Property.find().sort('-price').limit(1).exec(function(er,price){
			var t = price
			console.log(t)
				res.render('user/index', {user : req.user ? req.user : undefined, all:dat, best:t})
			})
		
	})
	
})	
	
	




module.exports = router;
