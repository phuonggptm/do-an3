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

router.get('/edit/:id', function(req,res,next){
  Property.findById(req.params.id, function(err,data){
    if (err) console.log(err)
    console.log(data)
    res.render('admin/index', {pro:data})
  })
})
module.exports = router;