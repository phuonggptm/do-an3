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
router.get("/creatproperty", auto, function(req,res,next){
  Property.find({status:"1"},function(e,pro){
    res.render("landlord/create_pro",{ property:pro,user : req.user ? req.user : undefined})
  })
})
router.post("/postproperty/:id",upload.array('filename',3),function(req,res,next){
  var img =[];
  req.files.forEach(function(file){
      img.push(file.filename)
  })
  var newPro = new Property({
      own: req.params.id,
      img: img,
      title : req.body.title,
      address: req.body.street + " " + req.body.city + " " + req.body.provice,
      area : req.body.area,
      price: req.body.cost,
      dis: req.body.dis,
      status: "0"
  })
  newPro.save()
  
  res.redirect("/")
})

//Display Property

router.get('/:id',auto,function(req,res,next){

  var pageno = Number(req.params.id);  
  Property.find({}).skip(pageno*6).sort({price: -1}).limit(6).exec(function (err, docs) {
    Property.countDocuments(function(err, count) {
      var status = 'Showing '+(pageno*6+1)+' to '+(pageno*6+6)+' of '+count+' Properties';
       console.log(status);  
     Property.find({}).skip(0).sort({price: -1}).limit(5).exec(function (err, latestproperty) {
       console.log(latestproperty)
    res.render("landlord/list_pro.ejs",{property: docs, count: count, pageno: pageno+1, status: status, latestproperty: latestproperty, user : req.user ? req.user : undefined});
    })    
    })
  })
})
//check isAuthenticated
function auto(req,res,next){
	if(req.isAuthenticated() && "option1"==req.user.type) {
		return next();}
	res.redirect('/');
	
}
module.exports = router;