var pgp = require('pg-promise')();
const dbconfig = require('../../config/admin');
var db = pgp(dbconfig);

exports.main = function(req, res){
    res.render('index', {
        type: false
    });
}

exports.shop = function(req, res){
    res.render('shop', {
        type: false
    });
}

exports.login = function(req, res){
    res.render('login', {
        type: false
    });
}

exports.single = function(req, res){
    res.render('single', {
        type: false
    });
}

exports.register = function(req, res) {
    res.render('register', {
        type: false
    });
}