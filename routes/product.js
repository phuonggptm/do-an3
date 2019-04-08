var express = require('express');
var event = require('events')
var utils = require('util')
var router = express.Router();
var parser = require('body-parser').urlencoded({extended:false})
var passport = require('passport');
var flash = require('connect-flash');
var AddCart = require('../model/AddCart.js')
var Cart = require('../model/Cart.js') 
var User = require('../model/User.js')
var Property = require('../model/Property.js')
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/data',{ useNewUrlParser: true });

router.get('/edit/:id', function(req,res,next){
  Property.findById(req.params.id, function(err,data){
    if (err) console.log(err)
    res.render('admin/index', {pro:data})
  })
})

router.post('/infoCart',function(req,res,next){
  var giohang = new Cart( (req.session.cart) ? req.session.cart : {items: {}} );
  var data = giohang.convertArray();
  res.send(data);
})
router.get('/cart', function(req,res,next){
  var giohang = new Cart( (req.session.cart) ? req.session.cart : {items: {}} );
  var data = giohang.convertArray();
  console.log(data)
  res.render('user/cart', {cart:data, user : req.user ? req.user : undefined});
})

router.get('/addCart/:id',function(req,res,next){
  var giohang = new Cart( (req.session.cart) ? req.session.cart : {items: {}} );
  Property.findById(req.params.id,function(err,data){
  if(err) console.log("loi");
  giohang.add(req.params.id, data);
  req.session.cart = giohang;
  res.redirect('/product/cart');
  })
  
});


router.get('/submitCart:total',function(req,res,next){
  var date = new Date();
  var ngay = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
  console.log(ngay);
  var cart = new Cart( (req.session.cart) ? req.session.cart : {items: {}} );
  var data = cart.convertArray();
  var tt = "Đang chờ xử lý";
  console.log(data);
  if(req.user){
    User.findById(req.user._id,function(err,user){
      if(err) console.log("loi");
      var cart = new AddCart({
      date : ngay,
      user : user,
      sum    :req.params.total,
      cart    : data,
      trangthai : tt
    });
    data.forEach(function(dt){
      Property.findById(dt.item._id, function(err,index){
        console.log(index.num);
        var lastNum = index.num - dt.soluong;
        console.log(lastNum);
        Property.updateOne({_id: dt.item._id},{$set:{num: lastNum}},function(err){
          if(err) throw err;
          console.log("update");
        })

      })
    })
    cart.save().then(function(){
      req.session.cart = {items: {}};
      res.redirect('/');
      }); 
    })
  }
  else{
    res.render('user/signin')
  }
})

router.get('/info/:id', function(req,res,next){
  Property.findById(req.params.id,function(er, data){
   res.render('user/detail', {data : data})
  })
})
module.exports = router;