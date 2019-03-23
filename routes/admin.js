var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');
var bcrypt = require('bcryptjs');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/User.js')
var Property = require('../model/Property.js')
var mongoose = require('mongoose');
var db  = mongoose.connection;
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/data',{ useNewUrlParser: true });
var multer  = require('multer')
const storage = multer.diskStorage({
  destination : './public/uploads/',
  filename: function(req,file,cb){
    cb(null,file.fieldname + '-' + Date.now() + file.originalname);
  }
})

const upload = multer({
  storage: storage
});

// Creatr property
router.get("/list_product", auto, function(req,res,next){
  Property.find(function(e,pro){
    res.render("admin/list_product",{ property:pro,user : req.user ? req.user : undefined})
  })
})
router.post("/create",upload.array('filename',2),function(req,res,next){
  var img =[];
  req.files.forEach(function(file){
      img.push(file.filename)
  })
  var newPro = new Property({
     
      img: img,
      title : req.body.title,
      name: req.body.name,
      type: req.body.type,
      size: req.body.name,
      price: req.body.price,
      dis: req.body.dis,
      num: req.body.Number
  })
  newPro.save()
  
  res.redirect("/")
})

//Display Property


//check isAuthenticated
function auto(req,res,next){
	if(req.isAuthenticated() && "admin"==req.user.type) {
		return next();}
	res.redirect('/');
	
}
module.exports = router;