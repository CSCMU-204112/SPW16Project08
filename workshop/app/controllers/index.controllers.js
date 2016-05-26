var pgp = require('pg-promise')();
const dbconfig = require('../../config/admin');
var db = pgp(dbconfig);

exports.main = function(req, res){
    res.render('index');
}

exports.shop = function(req, res){
    res.render('shop');
}

exports.login = function(req, res){
    res.render('login');
}

exports.single = function(req, res){
    res.render('single');
}