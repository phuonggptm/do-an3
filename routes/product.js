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

router.get('/listInfoCart',auto, function(req,res,next){
  var check =[];
  var t = req.user._id;
  messages=""
 AddCart.find(function(err,data){
   if (err) throw err;
   data.forEach(function(dt){
    let i = dt.user;
    console.log(i);
    console.log(t);
     if( i == t  ){
       console.log('thanhcong');    
       check.push(dt);
       console.log(check);
     }
   })
   if(data.length === 0) messages ="Bạn hiện không có đơn hàng";
    res.render('user/status',{user : req.user ? req.user : undefined,data:check, messages: messages, hasErrors: messages.length > 0})
   })
})

router.post('/update', parser, function(req, res,next){
  var giohang = new Cart( (req.session.cart) ? req.session.cart : {items: {}} );
  console.log(giohang)
  var id = req.body.id;
  num = req.body.num;
  console.log(id,num)
  console.log(parseInt(num))
  var numLast = parseInt(num)
  var priceLast = parseInt(giohang.items[id].item.price)
  console.log(numLast,priceLast)

  giohang.items[id].soluong = num;
  giohang.items[id].tien = numLast * priceLast;
  var data = giohang.convertArray();
  console.log(data)
  req.session.cart = giohang;
  res.send(data)
})
router.post('/submitCart:total',function(req,res,next){
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

router.get('/delCart/:id',function (req, res) {
  var id      = req.params.id;
  console.log(id);
  var giohang   = new Cart( (req.session.cart) ? req.session.cart : {items: {}} );

  giohang.delCart(id);
  req.session.cart = giohang;
  var data = giohang.convertArray();

    res.render('user/giohang', {data: data,user : req.user ? req.user : undefined});
  
});
router.get('/info/:id', function(req,res,next){
  Property.findById(req.params.id,function(er, data){
   res.render('user/detail', {data : data})
  })
})
function auto(req,res,next){
	if(req.isAuthenticated() && "users"==req.user.type) {
		return next();}
	res.redirect('/');
	
}
module.exports = router;