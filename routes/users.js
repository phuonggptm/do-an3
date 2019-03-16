var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');
var bcrypt = require('bcryptjs');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/User.js')

/* GET users listing. */


router.get('/resgiter', function(req,res,next){
	
	res.render("user/resgiter")
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
			res.render("user/signin")
			 
	}});
})


router.get('/login', function(req,res,next){
	var messages = req.flash('error');
	res.render('user/signin',{
		messages: messages
	})
})
router.post('/login', function(req,res,next){
	passport.authenticate('local-login',{successRedirect:'/',failureRedirect:'/users/login',failureFlash:true})(req, res,next)
 
})

passport.serializeUser(function(user, done) { 
	console.log("serialize");
	done(null, user.id); 
}); 
   
   // used to deserialize the user 
passport.deserializeUser(function(id, done) { 
	User.getUserById(id, function(err, user) { 
	   console.log(user.type);
	done(err, user); 
	}); 
}); 

passport.use('local-login',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(email,password,done){
  let query = {email: email};
  User.findOne(query,function(err,user){
    if(err) throw err; 
    if(!user){
      return done(null,false, {message:'Tài khoản không tồn tại'});
    }

    bcrypt.compare(password, user.password,function(err,isMatch){
      if(err) return done(err);
      if(isMatch){
        return done(null, user);
      }else{
        return done(null,false, { message:'Mật khẩu không đúng.'});
      }
    });
  });
}));

module.exports = router;