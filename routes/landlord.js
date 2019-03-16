var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');
var bcrypt = require('bcryptjs');
var LocalStrategy = require('passport-local').Strategy;
var Property = require('../model/Property.js')
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
router.post("/postproperty",upload.array('filename'),function(req,res,next){
    var img =[];
    req.files.forEach(function(file){
        img.push(file.filename)
    })
    var newPro = new Property({
        title : req.body.title,
        address: req.body.street + " " + req.body.city + " " + req.body.provice,
        area : req.body.area,
        price: req.body.cost,
        dis: req.body.dis
    })
    newPro.save()
})


module.exports = router;