var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');
var bcrypt = require('bcryptjs');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/User.js')
var Property = require('../model/Property.js')

function bodauTiengViet(str) {
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/ /g, "-");
	str = str.replace(/\./g, "-");
	return str;
}


/* GET users listing. */


var footer =[], views =[], buy =[];
Property.findRandom({}, {},{limit: 4},function(err,docs){
 docs.forEach(function(item){
   footer.push(item);
 })
 })
Property.find().sort('-views').limit(3).exec(function(er,view){
  view.forEach(function(item){
    views.push(item);
  })
})

Property.find().sort('-buy').limit(3).exec(function(er,view){
  view.forEach(function(item){
    buy.push(item);
  })
})
router.get('/resgiter', function(req,res,next){
	var messages=[]
	res.render("user/resgiter",{messages:messages,hasErrors:false})
});

router.post('/resgiter',function(req,res,next){
	var messages =[]
	let query = {email: req.body.email};
	req.checkBody('password2', 'Hãy xác nhận lại mật khẩu').equals(req.body.password);
	var errors = req.validationErrors();
	if(errors){
		errors.forEach(function(error){
		 messages.push(error.msg);
		});}
		User.findOne(query,function(err,user){
	  	if(err) throw err; 
	  	if(user){
			
			msg ="Email đã tồn tại";
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
			address: req.body.addr,
			phone: req.body.phone,
			email : req.body.email,
			password : req.body.password,
			type: 'users',
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

//login
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
	 
	done(err, user); 
	}); 
}); 
//function local-login
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

//user update
router.get('/update/:id',person,function(req,res,next){

		res.render("user/resgiter",{user : req.user ? req.user : undefined})

})


router.post('/update/:id', function(req,res,next){
	newvalue = {
		$set:
		{
			name: req.body.name,
			address : req.body.address,
			phone : req.body.phone,
			email: req.body.email,
			password: req.body.password
		}
	}
	User.updateOne({_id: req.params.id},newvalue,function(err,data){
		if (err) throw err;
		
	})
	res.location('/');
	res.redirect('/');
})
//logout
router.get('/logout',function(req,res){    
	req.session.destroy(function(err){  
			if(err){  
					console.log(err);  
			}  
			else  
			{  
					res.redirect('/');  
			}  
	});  
})
function person(req,res,next){
	if(req.isAuthenticated() && "user"==req.user.type) {
		return next();}
	res.redirect('/');
	
}

router.post('/search',function(req,res,next){
	var search = bodauTiengViet(req.body.search);
  	var checks =[];
   	var searchs = []
	Property.find(function(err,data){
		if (err) throw err;
		data.forEach(function(item){
			var name = bodauTiengViet(item.name);
			var   dis = bodauTiengViet(item.dis);
			var type= bodauTiengViet(item.type )
			if(name.search(search) >=0 || type.search(search) >=0 || dis.search(search) >=0) { 
			searchs.push(item);
			}	
		})
	
		Property.findRandom({}, {},{limit: 4},function(err,docs){
		if(searchs.length === 0 ){
			var messages ="Không có sản phẩm phù hợp"
			res.render('user/search',{ searchs:checks ,messages: messages,products: docs, user : req.user ? req.user : undefined});
			}
		else{
			res.render('user/search', {searchs: searchs ,products: docs, user : req.user ? req.user : undefined})
			}
		})
	})
})
module.exports = router;