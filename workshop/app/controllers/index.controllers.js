var pgp = require('pg-promise')();
const dbconfig = require('../../config/admin');
var db = pgp(dbconfig);

exports.main = function(req, res){
    res.render('index', {
        type: true
    });
}

exports.shop = function(req, res){
    res.render('shop', {
        type: true
    });
}

exports.login = function(req, res){
    res.render('login', {
        type: true
    });
}

exports.single = function(req, res){
    res.render('single', {
        type: true
    });
}

exports.register = function(req, res) {
    res.render('register', {
        type: true
    });
}