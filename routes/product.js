var express = require('express');
var router = express.Router();
var parser = require('body-parser').urlencoded({extended:false})
var passport = require('passport');
var flash = require('connect-flash');
var AddCart = require('../model/AddCart.js')
var Cart = require('../model/Cart.js') 
var User = require('../model/User.js')
var Property = require('../model/Property.js')
var mongoose = require('mongoose');
var events = require('events');
var eventEmitter = new events.EventEmitter();
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/data',{ useNewUrlParser: true });

var footer =[], views =[], buy =[];

  Property.findRandom({}, {},{limit: 4},function(err,docs){
    docs.forEach(function(item){
      footer.push(item);
    })
  })

var view = function view(){
  views=[];
  console.log(views)
  Property.find().sort('-views').limit(3).exec(function(er,view){
    view.forEach(function(item){
      views.push(item);
    })
  })
}
Property.find().sort('-buy').limit(3).exec(function(er,view){
  view.forEach(function(item){
    buy.push(item);
  })
})
eventEmitter.addListener('clickview', view);
router.get('/edit/:id', function(req,res,next){
  Property.findById(req.params.id, function(err,data){
    if (err) console.log(err)
    res.render('admin/index', {pro:data, products:footer,views:views,buy:buy})
  })
})

router.post('/products', function(req,res,next){
  Property.findRandom({}, {},{limit: 4},function(err,docs){
   res.send(docs)
  })
})

router.post('/buy', function(req,res,next){
  res.send(buy)
})

router.post('/views', function(req,res,next){
  res.send(views)
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
  var messages =""
  res.render('user/cart', {buy:buy, products:footer, views,views,cart:data,messages:messages, user : req.user ? req.user : undefined});
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

router.get('/listInfoCart', function(req,res,next){
  var check =[];
  var t = req.user.email;
  messages=""
  AddCart.find(function(err,data){
   if (err) throw err;
  
   data.forEach(function(dt){
    var i = dt.user.email;
    console.log(i);
    console.log(t);
    if( i == t  ){
      console.log('thanhcong');    
      check.push(dt);
     }
   })
   console.log(check);

   if(check.length === 0) messages ="Bạn hiện không có đơn hàng";
    res.render('user/status',{user : req.user ? req.user : undefined,data:check,products:footer, views:views,messages: messages, hasErrors: messages.length > 0})
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
  
    Property.findById(req.body.id, function(err,index){
     
      if(index.num < numLast){
        console.log(index.num);
        var messages='Số lượng vượt quá sản phẩm trong kho! Không thành'
       res.send(messages)
      }
      else{
      console.log(numLast);
     
      var priceLast = parseInt(giohang.items[id].item.price)
      console.log(numLast,priceLast)

      giohang.items[id].soluong = num;
      giohang.items[id].tien = numLast * priceLast;
    
      var data = giohang.convertArray();
      console.log(data)
      req.session.cart = giohang;
      res.send(data)
    }
  })
   
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
        var buy = index.buy + dt.soluong
        
        Property.updateOne({_id: dt.item._id},{$set:{num: lastNum, buy:buy}},function(err){
          if(err) throw err;
          console.log("update");})
        })
      }) 
   
    cart.save().then(function(){
      req.session.cart = {items: {}};
      res.redirect('/product/listInfoCart');
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
  Property.findById(req.params.id,function(er, index){
    var lastNum = index.views + 1;
    eventEmitter.emit('clickview');   
    Property.updateOne({_id: req.params.id},{$set:{views: lastNum}},function(err){
      if(err) throw err;
      console.log("update");})
    res.render('user/detail', {data : index, products:footer})
  })
})
function auto(req,res,next){
	if(req.isAuthenticated() && "users"==req.user.type) {
		return next();}
	res.redirect('/');
	
  }
module.exports = router;