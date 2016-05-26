var pgp = require('pg-promise')();
const dbconfig = require('../../config/admin');
var db = pgp(dbconfig);

exports.main = function(req, res){
    res.render('index', {});
}

exports.shop = function(req, res){
    res.render('shop', {});
}
