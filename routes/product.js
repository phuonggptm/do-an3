var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');
var AddCart = require('../model/AddCart.js')
var Cart = require('../model/Cart.js') 
var User = require('../model/User.js')
var Property = require('../model/Property.js')
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/data',{ useNewUrlParser: true });
var multer  = require('multer')


router.get('/edit/:id', function(req,res,next){
  Property.findById(req.params.id, function(err,data){
    if (err) console.log(err)
    console.log(data)
    res.render('admin/index', {pro:data})
  })
})

router.get('/addCart', function(req,res,next){
  var giohang = new Cart( (req.session.cart) ? req.session.cart : {items: {}} );
  var data = giohang.convertArray();
  res.render('user/giohang', {data: data,user : req.user ? req.user : undefined});
})

router.get('/addCart/:id',function(req,res,next){
  var giohang = new Cart( (req.session.cart) ? req.session.cart : {items: {}} );
  Property.findById(req.params.id,function(err,data){
 if(err) console.log("loi");
  giohang.add(req.params.id, data);
    req.session.cart = giohang;
    res.redirect('/product/addCart');
  })
});

router.post('/submitCart:tong',function(req,res,next){
  var date = new Date();
  var ngay = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  console.log(ngay);
  var giohang = new GioHang( (req.session.cart) ? req.session.cart : {items: {}} );
  var data = giohang.convertArray();
  var user =[];
  var tt = "Đang chờ xử lý";
  var tong    =req.params.tong;
  data.forEach(function(dt){
    Property.findById(dt.item._id, function(err,index){
      console.log(index.num);
      var nu = index.num - dt.soluong;
      console.log(nu);
      Product.updateOne({_id: dt.item._id},{$set:{num: nu}},function(err){
        if(err) throw err;
        console.log("update");
      })

    })
  })
  User.findById(req.user._id,function(err,user){
    if(err) console.log("loi");
  var cart = new AddCart({
  đate : ngay,
    user : user,
  sum    :req.params.tong,
  cart    : data,
  trangthai : tt
});
cart.save().then(function(){
  req.session.cart = {items: {}};
  res.redirect('/user/status');
}); 
})

})
module.exports = router;