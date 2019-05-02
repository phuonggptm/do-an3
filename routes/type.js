var express = require('express');
var router = express.Router();
var AddCart = require('../model/AddCart.js')
var Cart = require('../model/Cart.js') 
var User = require('../model/User.js')
var Property = require('../model/Property.js')
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/data',{ useNewUrlParser: true });


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
var products =[], views =[], buy =[];
Property.findRandom({}, {},{limit: 4},function(err,docs){
 docs.forEach(function(item){
   products.push(item);
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

router.get('/short_story', function(req,res,next){
    Property.find({type:'3'},{},{limit:8}, function(err, data){
        if(err) throw err;
       
           res.render('short_story',{title:'Truyện ngắn',data: data,products: products,user : req.user ? req.user : undefined})
      })
})


router.get('/tieu_thuyet', function(req,res,next){
    Property.find({type:4},{},{limit:8}, function(err, data){
        if(err) throw err;
        res.render('short_story',{title:'Tiểu thuyết',data: data,products: products,user : req.user ? req.user : undefined})
    })
})


router.get('/cotich', function(req,res,next){
    Property.find({type:2},{},{limit:8}, function(err, data){
        if(err) throw err;
        res.render('short_story',{title:'Cổ tích',data: data,products: products,user : req.user ? req.user : undefined})
      })
})
module.exports = router;
