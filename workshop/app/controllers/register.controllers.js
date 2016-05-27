var pgp = require('pg-promise')();
const dbconfig = require('../../config/admin');
var db = pgp(dbconfig);


exports.createUser = function(req, res) {

    var username = req.body.username;
    var password = req.body.password;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;


    var command = 'insert into member(username, password, fname, lname, email) values ($1, $2, $3, $4, $5) returning username';

    db.one(command,[username, password, fname, lname, email])
    
    .then(function(data) {
        console.log('[ REGIST SUCCESS ]');
        res.redirect('/login');
    })

    .catch(function(error) {
        console.log(error);
        res.redirect('/register');
    });

}

exports.checkLogin = function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    db.any("select * from member where username = $1 and password = $2", [username, password])

    .then(function(data) {
        console.log('[ LOGIN SUCCESS AS:', data[0].username,']');
        res.redirect('/in');
    })

    .catch(function(error) {
        console.log(error);
        res.redirect('/login');
    })
}
