var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.isAuthenticated());
	if(req.isAuthenticated() && (  'admin' === req.user.type)){
		// console.log(req.user);
 	res.render('admin/index',{user : req.user ? req.user : undefined});
 	}
 	if(req.isAuthenticated() && 'option1' == req.user.type ){
  	 // console.log(req.user.isAdmin);
 	console.log("true2"); 
 	res.render('landlord/index', {user : req.user ? req.user : undefined});
	}

 	else if(req.isAuthenticated() && 'option2' === req.user.type  ){
 	res.render('user/index', {user : req.user ? req.user : undefined});	
	}
	else{
		console.log("trang chu");
		res.render("index.ejs")
		
	}
})




module.exports = router;
