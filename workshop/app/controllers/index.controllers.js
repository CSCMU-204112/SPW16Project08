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

exports.single2 = function(req, res){
    res.render('single2');
}

exports.single3 = function(req, res){
    res.render('single3');
}

exports.single4 = function(req, res){
    res.render('single4');
}

exports.single5 = function(req, res){
    res.render('single5');
}

exports.single6 = function(req, res){
    res.render('single6');
}
exports.single7 = function(req, res){
    res.render('single7');
}

exports.single8 = function(req, res){
    res.render('single8');
}

exports.single9 = function(req, res){
    res.render('single9');
}


exports.single10 = function(req, res){
    res.render('single10');

}

exports.single11 = function(req, res){
    res.render('single11');
}

exports.single12 = function(req, res){
    res.render('single12');
}