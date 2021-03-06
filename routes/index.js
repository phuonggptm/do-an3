var express = require('express');
var router = express.Router();
var random = require('mongoose-simple-random');
var Property = require('../model/Property.js')
var parser = require('body-parser').urlencoded({extended:false})
var passport = require('passport');
var flash = require('connect-flash');
var events = require('events');
var eventEmitter = new events.EventEmitter();
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

var countJson = function(json){
  var count = 0;
  for(var id in json){
      count++;
  }

  return count;
}

/* GET home page. */
router.get('/', function(req, res, next) {
	eventEmitter.emit('clickview'); 
	console.log(req.isAuthenticated());
	if(req.isAuthenticated() && (  'admin' === req.user.type)){
		// console.log(req.user);
 	res.render('admin/create',{user : req.user ? req.user : undefined, pro:undefined});
 	}
 	
	else{
		Property.findRandom({}, {},{limit: 4},function(err,docs){
			res.render('index', {title:'Shopping',products: docs,buy:buy,views:views,user : req.user ? req.user : undefined});
		})
	}
})


router.get('/admin', function(req,res,next){
	res.render('admin/create')
})


router.get('/topbook', function(req,res,next){
	Property.find().sort('-price').limit(1).exec(function(er,price){
		var t = price

			res.render('user/topbook', {user : req.user ? req.user : undefined, best:price})
		})
})

router.post('/search',function(req,res,next){
	var search = bodauTiengViet(req.body.search);
  	var checks =[];
   	var searchs = []
	Property.find(function(err,data){
		if (err) throw err;
		data.forEach(function(item){
			var name = bodauTiengViet(item.name);
			var   tit = bodauTiengViet(item.title);
			var type= bodauTiengViet(item.type )
			if(name.search(search) >=0 || type.search(search) >=0 || tit.search(search) >=0) { 
			searchs.push(item);
			}	
		})
		console.log(searchs);
		Property.findRandom({}, {},{limit: 4},function(err,docs){
		if(searchs.length === 0 ){
			var messages ="Không có sản phẩm phù hợp"
			res.render('user/search',{ searchs:checks ,messages: messages,products: docs, user : req.user ? req.user : undefined});
			}
		else{
			res.render('user/search', {searchs: searchs ,products: docs, buy:buy, views:views,user : req.user ? req.user : undefined})
			}
		})
	})
})
module.exports = router;
