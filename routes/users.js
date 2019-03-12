var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcryptjs');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/User.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(req.isAuthenticated() && ( req.user.isAdmin ==='admin')){
		// console.log(req.user);
 	res.render('admin/index',{user : req.user ? req.user : undefined});
 	}
 	if(req.isAuthenticated() &&  req.user.isAdmin === 'option1'){
  	 // console.log(req.user.isAdmin);
 	console.log("true2"); 
 	res.render('landlord/index', {user : req.user ? req.user : undefined});
	}

 	if(req.isAuthenticated() && req.user.isAdmin === 'option2'){
 	res.render('user/index', {user : req.user ? req.user : undefined});	
	}
	else{
		res.render("index.ejs")
	}
})




router.get('/resgiter', function(req,res,next){
	res.render("user/resgiter");
});

router.post('/resgiter',function(req,res,next){
	var messages = [];
	let query = {email: req.body.email};
	
	User.findOne(query,function(err,user){
	  	if(err) throw err; 
	  	if(user){
			console.log(user);
			msg ="Tài khoản đã tồn tại";
		 	// console.log(msg);
			messages.push(msg);
			console.log(messages);
		}
  
	 	if(messages.length > 0){      
		  	res.render("user/resgiter",{
			messages: messages,
			hasErrors: messages.length > 0,
			user : req.user ? req.user : undefined
		  	})
		}
		else {
			var newUser = new User({
			name: req.body.name,
			address: req.body.address,
			phone: req.body.phone,
			email : req.body.email,
			password : req.body.password,
			type: req.body.exampleRadios,
				});

			bcrypt.genSalt(10,function(err,salt){
			bcrypt.hash(newUser.password,salt,function(err,hash){
			newUser.password = hash;})})
				
			User.createUser(newUser, function(err,user){
				if(err) throw err;})
			res.location('/');
			res.redirect('/');
			 
	}});
})

router.post('/login', function(req,res,next){


 
 
})

module.exports = router;