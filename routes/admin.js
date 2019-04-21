var express = require('express');
var router = express.Router();
var passport = require('passport');
var parser = require('body-parser').urlencoded({extended:false})
var User = require('../model/User.js')
var Cart = require('../model/AddCart.js')
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
router.get("/list_product", function(req,res,next){
  Property.find(function(e,data){
    res.send(data)
  })
})

router.get('/user',function(req,res,next){
 User.find().populate('User').exec(function(err,carts){
   console.log(carts)
   res.send(carts)
 })
})

router.get('/order',function(req,res,next){
  Cart.find(function(e,carts){
    res.send(carts)
  })
})
router.post("/create",upload.array('filename',2),function(req,res,next){
  var img =[];
  req.files.forEach(function(file){
      img.push(file.filename)
  })
  var newPro = new Property({
     
      img: img,
      author : req.body.author,
      name: req.body.name,
      type: req.body.type,
      price: req.body.price,
      dis: req.body.dis,
      num: req.body.num,
      product : req.body.product
  })
  newPro.save()
  
  res.redirect("/admin")
})

//Display Property
router.post('/edit',parser, function(req,res,next){
  Property.findById(req.body.id, function(err,data){
    if (err) throw err;
    res.send(data)
  })
})

router.post('/edit/:id',upload.array('filename',2),function(req,res,next){
  var img =[];
  req.files.forEach(function(file){
      img.push(file.filename)
  })
  var newValue={$set:
    { 
      img: img,
      author : req.body.author,
      name: req.body.name,
      type: req.body.type,
      price: req.body.price,
      dis: req.body.dis,
      num: req.body.num,
      product : req.body.product
 }};
     console.log(req.params.id);
       Property.updateOne({_id: req.params.id},newValue,function (err,res){
             if(err) throw err;
             console.log();
           })
          res.location('/');
          res.redirect('/');
})
router.post('/delete', parser, function(req,res,next){
  Property.findById(req.body.id).deleteOne(function() { 
		//req.flash('success_msg', 'Đã Xoá Thành Công');
		res.redirect('/admin/list_product');
	});
})

router.post('/status',parser, function(req,res,next){
  newValue ={$set:{
    trangthai:req.body.status
  }}
  Cart.updateOne({_id:req.body.id},newValue,function(err,res){
        if(err) throw err;
        console.log();
      })
    res.location('/admin/list_product');
    res.redirect('/admin/list_product');
  })


router.get('/statistic_book',function(req,res,next){
  var checks = [0,0,0,0,0,0,0,0,0,0,0,0];
  Cart.find(function (err,types) {
    if(err) throw err;
    types.forEach(function(type){
      var t = type.date;
      fist= t.indexOf("-")
      last = t.lastIndexOf("-");
      var cat = t.slice(fist+1,last)
      console.log(cat);
      var date = parseInt(cat,10);
      console.log(date);
      type.cart.forEach(function(ty){
      console.log(ty.soluong);
      checks[date-1] += ty.soluong;
      })
    console.log(checks);
    
    })
    res.send(checks)
  })
})
//check isAuthenticated
function auto(req,res,next){
	if(req.isAuthenticated() && "admin"==req.user.type) {
		return next();}
	res.redirect('/');
	
}
module.exports = router;